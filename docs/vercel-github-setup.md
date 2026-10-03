# Vercel + GitHub setup

This repository's Vercel application is the Next.js project in `aknexus-next/`.

## One-time Vercel setup

1. In Vercel, select **Add New → Project** and import this GitHub repository.
2. Set **Root Directory** to `aknexus-next`.
3. Confirm the Framework Preset is **Next.js**. Leave the standard build command (`next build`) and install command (`npm install`) unless Vercel detects a different setting.
4. Add required environment variables in **Project Settings → Environment Variables**. Do not commit secrets to GitHub. Set each value only for the environments that need it: Production, Preview, and/or Development.
5. Ensure **Production Branch** is `main`.
6. Deploy once from the Vercel dashboard to confirm the configuration.

Vercel's Git integration will then do this automatically:

```text
Feature branch + pull request → Vercel Preview URL
PR approval + merge to main  → Vercel Production deployment
```

## GitHub setup

The workflow at `.github/workflows/ci.yml` validates the Vercel app and scans the repository for secrets. It does **not** deploy: Vercel handles preview and production deployment through its GitHub integration.

In GitHub, open **Settings → Branches → Add branch protection rule** for `main` and enable:

- Require a pull request before merging.
- Require status checks to pass before merging.
- Select the CI workflow checks: **Security checks** and **Vercel app - lint and build**.
- Require at least one approving review, if available.
- Block force pushes and direct pushes.

After this is enabled, your safe release flow is:

1. Make a feature branch.
2. Test locally using `npm --prefix aknexus-next run lint` and `npm --prefix aknexus-next run build`.
3. Push the feature branch and open a pull request into `main`.
4. Review the GitHub CI results and Vercel Preview URL.
5. Merge only after the required checks and review pass.
6. Vercel deploys the resulting `main` commit to production.

## Current blocker

The new CI workflow intentionally runs `npm run lint`. It currently reports Next.js link-rule errors because several internal navigation links use `<a href="/">` rather than `Link` from `next/link`. Fix those errors before making the CI status check required; otherwise every pull request will be blocked, as it should be.

## Security note

Use Vercel's Git integration for this project instead of a GitHub Actions deployment token. It avoids storing a `VERCEL_TOKEN` in GitHub for the normal case. GitHub Actions deployment with the Vercel CLI is useful only when you need a custom build/deployment process.
