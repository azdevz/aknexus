# AWS Senior Review — Prioritized Remediation Plan

**Scope:** One-off architecture, infrastructure-as-code, CI/CD, security, and cost review for a small B2B SaaS running in one AWS account: approximately five EC2 instances, Amazon RDS for PostgreSQL, Lambda, S3, and CloudFront.

**Important:** This is a remediation plan based on the stated setup. The Terraform source, AWS configuration, bills, and GitHub Actions workflows were not available for direct inspection. Treat each item marked **Validate** as a required discovery check before changing production.

## Executive summary

The biggest risks are not the number of services, but the missing control boundaries: a single AWS account, plaintext secrets in Terraform inputs, and a deployment pipeline that likely uses long-lived credentials and has no policy or security gates.

Implement the first five P0 items before undertaking a broad Terraform rewrite. They materially reduce the likelihood and blast radius of account compromise, secret exposure, accidental production change, and data loss.

| Priority | Outcome | Target |
| --- | --- | --- |
| P0 | Remove exposed credentials, protect production access and recovery | 0–7 days |
| P1 | Create repeatable Terraform and deployment controls | 1–4 weeks |
| P2 | Improve resilience, isolation, observability, and cost management | 1–3 months |

## P0 — fix first

### 1. Remove secrets from Terraform and rotate every exposed value

**Risk:** Terraform variable files, state files, CI logs, and Git history can all expose database passwords, API keys, and tokens. Marking an output `sensitive` only hides it in normal CLI display; it does not remove it from Terraform state.

**Actions:**

1. **Validate:** scan tracked files, CI variables, Terraform state, and commit history for passwords, API keys, private keys, connection strings, and AWS access keys.
2. Immediately rotate any secret found in code, variables, state, logs, or Git history. Revoke old values; do not assume a file deletion is sufficient.
3. Store runtime application secrets in AWS Secrets Manager (preferred for database credentials and rotation) or SSM Parameter Store `SecureString` for lower-complexity configuration.
4. Give each workload an IAM role that reads only its named secrets. Do not inject a broad AWS credential into EC2 or Lambda.
5. Keep Terraform responsible for secret *containers*, resource permissions, and secret references—not the secret values themselves. Supply initial values through a protected deployment process if unavoidable.
6. Enable secret scanning and push protection in GitHub, then add a CI secret scanner such as Gitleaks.

**Acceptance criteria:** no live secret is tracked in Git or written to Terraform state; all previous exposed values are revoked; application roles can read only their required secrets.

### 2. Replace GitHub AWS keys with short-lived OIDC access

**Risk:** static AWS access keys stored as GitHub secrets are long-lived, hard to scope safely, and easy to misuse if exfiltrated.

**Actions:**

1. Configure GitHub Actions OpenID Connect (OIDC) with an AWS IAM identity provider.
2. Create separate, least-privilege deploy roles for non-production and production. Trust policies must limit repository, branch/tag, and GitHub environment claims.
3. Use GitHub Environments: require approval for production, scope environment secrets, and restrict production deployment branches/tags.
4. Delete static IAM user access keys after the OIDC workflow has been tested.
5. Use separate read-only Terraform plan access and controlled apply/deployment access where practical.

**Acceptance criteria:** workflows use `id-token: write` and `aws-actions/configure-aws-credentials` with a role ARN; no AWS IAM user key is used by CI.

### 3. Establish protected Terraform remote state and locking

**Risk:** local state or shared, unprotected state risks loss, concurrent changes, leaked credentials, and untraceable infrastructure drift.

**Actions:**

1. Move state to a dedicated S3 backend bucket with versioning, default encryption, public-access block, HTTPS-only bucket policy, and least-privilege access.
2. Enable Terraform state locking using the current supported S3 locking approach for the Terraform version in use, or DynamoDB locking if the selected version/workflow requires it. Test concurrent applies before removing any legacy lock table.
3. Keep state files isolated by environment and workload; never share a production state file with development.
4. Protect the state bucket with backups/version recovery, CloudTrail data-event logging as appropriate, and lifecycle policy for old versions.
5. Permit `apply` only through the reviewed CI path. Developers may use a read-only plan role; production break-glass access should be tightly controlled and logged.

**Acceptance criteria:** `terraform init` uses remote state; concurrent applies are blocked; production state cannot be read by normal developer identities.

### 4. Enforce minimum network and database exposure

**Risk:** public EC2/RDS access and overly broad security groups are common direct paths to compromise.

**Actions:**

1. **Validate:** enumerate every public IP, public subnet, internet-facing security-group rule, RDS `PubliclyAccessible` setting, and route table.
2. Keep RDS in private subnets with `PubliclyAccessible = false`; allow port 5432 only from the application security group, never a CIDR such as `0.0.0.0/0`.
3. Allow SSH only through AWS Systems Manager Session Manager. Remove inbound TCP/22 and avoid bastion hosts unless a justified exception is documented.
4. Place EC2 application instances in private subnets behind an Application Load Balancer; expose only HTTPS (443) at the load balancer. Redirect HTTP to HTTPS.
5. Restrict egress where feasible, especially for sensitive workloads. Add VPC endpoints for commonly used AWS APIs when they improve control/cost.
6. Require encryption in transit to RDS and enforce current TLS at CloudFront/ALB.

**Acceptance criteria:** no public RDS; no SSH open to the internet; application/database security groups reference each other rather than broad CIDRs.

### 5. Verify backup, restore, and incident readiness

**Risk:** an automated backup without a tested restore is not a recovery capability.

**Actions:**

1. Enable RDS automated backups with retention appropriate to contractual obligations (commonly at least 7–14 days) and deletion protection for production.
2. Ensure RDS is encrypted with KMS and snapshots are retained according to policy. Review PostgreSQL logs and audit needs.
3. Enable S3 versioning, encryption, public-access block, and lifecycle policies. Confirm CloudFront origin access control (OAC) is used so buckets are not public.
4. Run and document a restore exercise: restore an RDS snapshot to an isolated instance, verify application data, and record recovery time/objective gaps.
5. Create an incident runbook: disable compromised IAM access, rotate secrets, isolate an instance, restore database, and communicate status.

**Acceptance criteria:** restore test completed successfully; RPO/RTO are documented and accepted by the business; production deletion protection is enabled where appropriate.

## P1 — build a maintainable delivery baseline

### Terraform refactor sequence

Do not rewrite everything at once. First stabilize state and access, then migrate resources incrementally using `moved` blocks or state moves, with reviewed plans and backups.

Recommended repository shape:

```text
infra/
  modules/
    network/        # VPC, subnets, routing, endpoints
    security/       # shared IAM, KMS, security groups
    compute/        # launch templates, ASG/EC2, ALB
    database/       # RDS subnet group, parameter group, instance
    storage-cdn/    # S3, CloudFront, OAC
    observability/  # alarms, dashboards, log retention
  environments/
    dev/
    staging/
    production/
```

Refactor in this order:

1. Pin Terraform and provider versions; add `terraform fmt`, `validate`, and provider lock file to source control.
2. Define standard tags: `Environment`, `Service`, `Owner`, `CostCenter`, `ManagedBy = Terraform`, and `DataClassification`.
3. Create a secure backend and split state by environment before extracting modules.
4. Extract low-risk, repeated foundations first: tags, security groups, S3/CloudFront, then network and compute; keep module inputs small and explicit.
5. Replace hardcoded IDs/CIDRs/names with typed variables and environment-specific values. Never use variables for secrets.
6. Add `precondition`/validation rules for non-negotiables, e.g. public RDS forbidden in production and public S3 access blocked.
7. Add a drift-detection plan on a schedule; alert but do not auto-apply drift corrections.

**Environment separation decision:** create at least distinct `dev`, `staging`, and `production` environments. For the immediate phase, separate AWS accounts are strongly preferred for production versus non-production. If account separation cannot happen this quarter, use separate VPCs, state, IAM roles, KMS keys, CI environments, budgets, and explicitly documented temporary access boundaries—but treat it as a transitional exception.

### CI/CD target pipeline

| Stage | Pull request | Main / release | Production |
| --- | --- | --- | --- |
| Application | format, unit tests, dependency scan, secret scan | build immutable artifact, publish SBOM | deploy the tested artifact only |
| Terraform | `fmt -check`, `validate`, lint, security/policy scan, plan | reviewed plan | approved apply via protected GitHub Environment |
| Security | Gitleaks, dependency/SCA, code scan | image/artifact scan if containers are used | audit log + post-deploy smoke test |
| Guardrails | no credentials, no apply | branch protection and required checks | approval, concurrency lock, rollback procedure |

Minimum implementation:

1. Protect `main`: pull request review, required status checks, no direct pushes.
2. Pin GitHub Actions to trusted immutable commit SHAs and keep action permissions minimal (`contents: read` by default).
3. Run Gitleaks, a dependency scanner, and static analysis (for example CodeQL for supported languages) on pull requests and scheduled scans.
4. Run `tflint` plus IaC security scanning (for example Checkov or Trivy config) against Terraform; make high-confidence critical findings blocking.
5. Save Terraform plan output as a pull-request artifact/comment. Require review of the exact production plan prior to apply.
6. Use deployment concurrency controls so two production deploys cannot overlap.
7. Build once, promote the identical versioned artifact from staging to production. Record artifact commit SHA, Terraform version, plan, deployer, and timestamp.
8. Add health checks and a rollback runbook. For EC2, use launch templates and rolling/blue-green deployment tooling appropriate to the app rather than in-place manual server changes.

## Security — top three fixes

1. **Secrets and CI identities:** rotate leaked secrets; centralize them in Secrets Manager/SSM; replace GitHub static AWS keys with scoped OIDC roles.
2. **Least privilege and account controls:** remove root access keys, enable MFA for root and privileged users, use IAM Identity Center for human access, eliminate broad `AdministratorAccess`/wildcard policies, and enable CloudTrail across all regions. Turn on GuardDuty and Security Hub with an owner for triage.
3. **Private-by-default network/data plane:** no public RDS, no public S3 origins, no internet SSH, narrowly scoped security groups, TLS everywhere, encryption at rest, and verified backups.

## Architecture review checklist

Use this during the AWS console/API review; record the result, owner, and remediation ticket for every failed check.

### Account, identity, and logging

- [ ] Root user has MFA; root access keys do not exist; root is not used day-to-day.
- [ ] Humans use IAM Identity Center or federated roles, with MFA and no shared IAM users.
- [ ] Break-glass access is time-bound, logged, and tested.
- [ ] IAM Access Analyzer has been reviewed; no unintended external access exists.
- [ ] CloudTrail is enabled for all regions, logs are retained in a separate protected bucket, and alerting exists for important IAM/security events.
- [ ] GuardDuty and Security Hub are enabled and assigned to an operational owner.
- [ ] AWS Config / managed rules are enabled for the highest-value controls (public S3, public RDS, unrestricted security groups, root MFA).

### Network and compute

- [ ] VPC has public and private subnets across at least two Availability Zones where availability requirements justify it.
- [ ] EC2 instances do not have public IPs unless a specific approved exception exists.
- [ ] Application traffic enters through ALB/CloudFront on HTTPS; ACM certificates renew automatically.
- [ ] Security group ingress is minimal and service-to-service, not broad CIDRs.
- [ ] IMDSv2 is required on EC2; EBS encryption is enabled; SSM agent is operational.
- [ ] EC2 uses instance profiles, not baked or environment AWS access keys.
- [ ] Systems Manager Patch Manager or an equivalent patch process has clear patch/reboot ownership.
- [ ] CloudWatch alarms cover CPU, disk, memory/application health, 5xx rate, ALB unhealthy hosts, and instance status checks.

### RDS PostgreSQL

- [ ] RDS is private, encrypted, backed up, deletion-protected, and patched within policy.
- [ ] Multi-AZ is enabled if downtime of a primary failure exceeds the business RTO.
- [ ] Database access uses a dedicated application role with least privilege; admin credentials are not used by the app.
- [ ] Connections are encrypted; credentials are stored/rotated through Secrets Manager where feasible.
- [ ] Performance Insights / CloudWatch metrics are enabled; alarms cover storage, CPU, connections, replication/failover conditions, and backup failures.
- [ ] A restore test has been performed and recorded.

### S3, CloudFront, Lambda

- [ ] Every S3 bucket has account-level and bucket-level public access block unless intentional public hosting is documented.
- [ ] S3 buckets use encryption, versioning, lifecycle rules, scoped bucket policies, and access logging/data-event audit where needed.
- [ ] CloudFront uses OAC for S3 origins, HTTPS-only viewers, current security policy, appropriate cache behavior, and WAF if the endpoint is internet-facing.
- [ ] Lambda has least-privilege execution roles, no secrets in environment variables when a secret service is practical, log retention set, DLQ/destinations for asynchronous failure where relevant, and alarms for errors/throttles/duration.

## Cost: fast, low-risk wins

Costs must be verified from Cost Explorer and CloudWatch before changing capacity. Start with a 30-day baseline grouped by service, tag, region, and usage type.

1. Enable cost allocation tags, AWS Budgets (monthly and forecast alerts), and Cost Anomaly Detection. Route alerts to an owner who will act on them.
2. Check EC2 CPU, memory, disk, network, and peak patterns for 14–30 days. Downsize persistently underused instances; stop non-production instances outside working hours; remove unattached EBS volumes, unused Elastic IPs, old snapshots/AMIs, and idle load balancers only after confirming ownership.
3. Evaluate Savings Plans for stable EC2/Fargate/Lambda compute after right-sizing. Do not commit before correcting obvious idle capacity.
4. Review RDS instance CPU, memory, connections, storage growth, IOPS, backup/snapshot storage, and Multi-AZ need. Right-size only with a rollback window and performance validation.
5. Add S3 lifecycle rules for noncurrent versions, incomplete multipart uploads, logs, and archival data. Check Intelligent-Tiering only for data with uncertain access patterns.
6. Review CloudFront cache hit ratio and data-transfer origin traffic. Set suitable cache-control headers and avoid avoidable origin fetches.
7. Identify NAT Gateway, cross-AZ, and public-IP data-transfer charges. Use VPC endpoints and architecture changes only where the measured savings justify added complexity.

## Delivery backlog

| Order | Ticket | Owner | Definition of done |
| --- | --- | --- | --- |
| 1 | Secret exposure response | Dev + security owner | Scan complete; all exposed values rotated/revoked; secrets removed from code/state inputs |
| 2 | GitHub-to-AWS OIDC | DevOps | Per-environment roles in use; static CI keys removed |
| 3 | Terraform state hardening | DevOps | Versioned encrypted remote state, locking, least-privilege access, recovery tested |
| 4 | Production network closure | DevOps | RDS private; no open SSH; SG rules reviewed and documented |
| 5 | RDS/S3 recovery baseline | DevOps | Backups, deletion protection, encryption, and restore exercise verified |
| 6 | CI quality and security gates | Dev | PR scans and Terraform plan review required; production approval/concurrency enabled |
| 7 | Terraform environment/module migration | DevOps | Separate state/environment layout; first modules migrated with no unmanaged drift |
| 8 | Visibility and alerting | DevOps | CloudTrail, GuardDuty, Security Hub, Config, dashboards, and actionable alarms enabled |
| 9 | Cost baseline and right-sizing | Finance + DevOps | Budgets/tags enabled; measured savings actions completed |
| 10 | Account separation | Leadership + DevOps | Production and non-production accounts separated, or an approved dated exception is documented |

## 30-day implementation plan

**Days 1–3:** inventory public exposure, IAM access, secrets, state locations, backup configuration, and current spend. Rotate exposed secrets. Enable/verify root MFA, CloudTrail, and budgets.

**Days 4–7:** configure GitHub OIDC and protected environments; harden remote Terraform state; close public RDS/SSH exposure; confirm RDS and S3 recovery settings.

**Week 2:** add CI security checks, Terraform validation/lint/IaC scanning, plan/apply separation, concurrency, and a repeatable rollback procedure. Run a database restore test.

**Weeks 3–4:** split environments and state; migrate the first Terraform modules; enable remaining monitoring and detective controls; implement validated cost optimizations; produce a short exception register for anything deferred.

## Evidence to collect for the final audit sign-off

- Terraform repository (including backend configuration, `.tfvars` policy, provider lock file, and state locations—never send secret values).
- GitHub Actions workflows, repository branch protections, environment protection rules, and CI IAM role policies.
- AWS Organization/account structure, IAM credential report, IAM Access Analyzer findings, and CloudTrail/GuardDuty/Security Hub status.
- VPC/subnet/route/security-group inventory; EC2 instance list; ALB/CloudFront/WAF configuration.
- RDS configuration, backup retention, snapshot/restore evidence, parameter groups, performance metrics.
- S3 bucket policies/settings and CloudFront origins/distributions.
- Cost Explorer export for the last 30–90 days and CloudWatch utilization metrics.

## Operating rule after remediation

All infrastructure changes should follow: pull request → automated checks and Terraform plan → review/approval → protected production apply/deploy → smoke test and monitoring check → documented rollback if needed. No console-only production changes unless handled as a logged emergency and captured back into Terraform immediately afterward.
