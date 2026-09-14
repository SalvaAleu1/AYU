# AYU-Juba — Cloudflare Pages Deployment

The production architecture is a static Vite/React site. No D1 database, R2 bucket, Workers API, server-side membership account, or GitHub Actions workflow is required.

## Cloudflare Pages settings

- Repository: `SalvaAleu1/AYU`
- Production branch: `main`
- Root directory: repository root
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: Cloudflare’s supported Node.js runtime
- Environment variables: none required for the public website

## Membership registration

The website does not store membership applications. Membership registration opens the official AYU Google Form at `https://forms.gle/4GTEwGTtW1wYq3ry5`. The link is configured in `membershipRegistrationUrl` inside `src/data/finalPlatformData.ts` and is used by the public Membership and Contact pages.

## Production behavior

Cloudflare installs dependencies from `package.json`, runs the Vite production build and serves the generated `dist` directory. Security headers are defined in `public/_headers` and are copied into the production build.

## GitHub Actions

Do not enable GitHub Actions for builds or deployment. Cloudflare Pages performs the production build directly from the repository.
