# GitHub Actions CI/CD Learning Guide

This guide teaches the GitHub Actions path I recommend for this Node.js/TypeScript repository. The immediate goal is **continuous integration (CI)**: automatically prove each pull request builds and type-checks. Only add **continuous deployment (CD)** after CI is reliable and production access is protected.

## The mental model

```text
Git push / pull request
        ↓
Workflow (.github/workflows/*.yml)
        ↓
Runner: a short-lived machine executes your jobs
        ↓
Checks: install → type-check → build → security checks
        ↓
PR can merge only when required checks pass
        ↓
Later: approved deployment → staging → production
```

- A **workflow** is the YAML file that automates a process.
- An **event** starts it, such as opening a pull request or pushing to `main`.
- A **job** is a group of steps that runs on one runner.
- A **step** runs a command or reusable action, such as checking out code or setting up Node.
- **CI** validates changes. **CD** deploys an already-validated artifact to an environment.

Workflow files must be placed under `.github/workflows/` in the repository.

## Learn in this order

### 1. Start with CI only

Create a workflow that runs on pull requests to `main` and on direct pushes to `main`. It should:

1. Check out the exact commit.
2. Install the Node version the project supports.
3. Install locked dependencies with `npm ci` (not `npm install`).
4. Run static checks and a production build.

The root project exposes `npm run check` and `npm run build`; the Next.js application in `aknexus-next/` exposes `npm run lint` and `npm run build`. Keep them in separate jobs so failures are easy to identify.

### 2. Make CI a merge requirement

After the workflow is passing, configure GitHub branch protection for `main`:

- Require a pull request before merging.
- Require the CI checks to pass.
- Require at least one review, if the team size supports it.
- Block force pushes and direct pushes.

At this stage CI is already valuable: broken builds cannot silently reach the main branch.

### 3. Add security feedback to pull requests

Add these as separate checks, initially non-blocking if the repository has known legacy findings:

- **Secret scan:** Gitleaks detects credentials accidentally committed to the repository.
- **Dependency scan:** Dependabot plus npm audit or a dedicated SCA scanner identifies vulnerable packages.
- **Code scan:** CodeQL for JavaScript/TypeScript identifies common unsafe patterns.
- **Infrastructure scan:** when Terraform is added, run `terraform fmt -check`, `terraform validate`, `tflint`, and Checkov or Trivy config on each pull request.

Set a short, explicit deadline to convert critical/high-confidence findings into blocking checks. Never allow a secret finding to be ignored without rotation and a written exception.

### 4. Deploy safely to staging

When CI is stable, deploy the same built artifact to staging after a merge to `main`. Before a production deployment workflow exists, configure a GitHub `staging` Environment. It gives a deployment history and scopes any staging-only secrets.

### 5. Add production last

Create a `production` GitHub Environment with:

- Required reviewer approval.
- Deployment branch restriction (release tag or `main`, according to your release policy).
- Production-only values stored as Environment secrets, if any remain necessary.
- A deployment concurrency group so two production releases cannot overlap.

Use GitHub OIDC to exchange a GitHub workflow identity for short-lived AWS credentials. Do **not** store long-lived AWS access keys in GitHub secrets. The AWS IAM role trust policy must allow only this repository and production environment.

## A safe first CI workflow

Save this as `.github/workflows/ci.yml` when you are ready to enable CI. It does not deploy and does not require AWS credentials.

```yaml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

# Default to no write access. Add only the permission a job needs.
permissions:
  contents: read

# New commits cancel older CI runs for the same branch/PR.
concurrency:
  group: ci-${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  root-app:
    name: Root app — check and build
    runs-on: ubuntu-latest
    steps:
      - name: Check out source
        uses: actions/checkout@<PINNED_COMMIT_SHA>

      - name: Set up Node
        uses: actions/setup-node@<PINNED_COMMIT_SHA>
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Type-check
        run: npm run check

      - name: Build
        run: npm run build

  next-app:
    name: Next app — lint and build
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: aknexus-next
    steps:
      - name: Check out source
        uses: actions/checkout@<PINNED_COMMIT_SHA>

      - name: Set up Node
        uses: actions/setup-node@<PINNED_COMMIT_SHA>
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: aknexus-next/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build
```

Replace each `@<PINNED_COMMIT_SHA>` with the full immutable commit SHA for the action release you approve. Pinning third-party actions avoids silently executing a changed tag. Start from each action's official GitHub repository and use its published secure-pinning guidance.

## Read the workflow from top to bottom

1. `on` says **when** it runs.
2. `permissions` defines the default GitHub token access; `contents: read` is enough for checkout.
3. `concurrency` prevents wasting CI time on stale commits. It is safe to cancel checks, but production deployments should generally queue rather than be cancelled mid-flight.
4. Each job gets a clean Ubuntu runner.
5. `actions/checkout` retrieves the pull request commit.
6. `actions/setup-node` installs Node and caches package downloads.
7. `npm ci` installs exactly what each committed lock file specifies.
8. Build/type/lint commands are the same commands developers run locally.

## What a production AWS deployment job eventually needs

Do not copy this until the GitHub Environment and AWS OIDC role are both set up. This is the important shape of an OIDC-authenticated deploy job:

```yaml
deploy-production:
  needs: [root-app, next-app]
  runs-on: ubuntu-latest
  environment: production
  permissions:
    contents: read
    id-token: write
  concurrency:
    group: production-deploy
    cancel-in-progress: false
  steps:
    - uses: actions/checkout@<PINNED_COMMIT_SHA>
    - uses: aws-actions/configure-aws-credentials@<PINNED_COMMIT_SHA>
      with:
        role-to-assume: ${{ vars.AWS_DEPLOY_ROLE_ARN }}
        aws-region: ${{ vars.AWS_REGION }}
    # Build or retrieve the immutable artifact; deploy; run smoke test.
```

`id-token: write` permits the job to request an OIDC identity token; it does not itself grant AWS permissions. AWS grants access only if the IAM role trust policy accepts the token claims and the role permissions permit the deployment action.

## Deployment safety checklist

Before enabling a production job, all of these should be true:

- [ ] The app builds and tests reliably in CI.
- [ ] `main` has required PR reviews and required status checks.
- [ ] The production Environment requires approval and limits allowed branches/tags.
- [ ] AWS access uses OIDC, not IAM user access keys.
- [ ] The AWS role is least privilege and only trusts the intended repository/environment.
- [ ] The pipeline builds an immutable versioned artifact once, then promotes that exact artifact.
- [ ] A deployment has health/smoke checks and an owner-approved rollback procedure.
- [ ] Production deployment concurrency queues releases instead of allowing overlap.
- [ ] Secrets are in AWS Secrets Manager/SSM or protected GitHub Environment secrets—not source code, workflow YAML, or Terraform variables.

## Your practical first week

**Day 1:** Learn the vocabulary above, add the CI workflow in a branch, and open a pull request. Read the Actions log from top to bottom.

**Day 2:** Fix any mismatches between local and CI Node versions/commands. Require the green CI check to merge.

**Day 3:** Enable Dependabot and GitHub secret scanning/push protection. Add Gitleaks and make secret findings blocking.

**Days 4–5:** Create staging and production GitHub Environments. Document what deployment means for this app—EC2, S3/CloudFront, Lambda, or a combination—and define a rollback.

**Week 2:** Set up AWS OIDC, deploy to staging, then add reviewed production promotion. Add Terraform plan checks before any Terraform apply workflow.

## Recommended official references

- [Workflow syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)
- [Deployment environments and protection rules](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/control-deployments)
- [Concurrency](https://docs.github.com/en/actions/concepts/workflows-and-actions/concurrency)
- [GitHub Actions OIDC with AWS](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws)
