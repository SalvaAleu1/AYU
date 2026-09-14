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

The website does not store membership applications. Once AYU supplies its exact Google Form URL, add it to `membershipRegistrationUrl` in `src/data/finalPlatformData.ts`. The Membership page will then show the external registration button automatically.

## Production behavior

Cloudflare installs dependencies from `package.json`, runs the Vite production build and serves the generated `dist` directory. Security headers are defined in `public/_headers` and are copied into the production build.

## GitHub Actions

Do not enable GitHub Actions for builds or deployment. Cloudflare Pages performs the production build directly from the repository.
