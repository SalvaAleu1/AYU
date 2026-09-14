# AYU-Juba — Cloudflare Workers Deployment

The production architecture is a static Vite/React site deployed through **Cloudflare Workers Builds with Static Assets**. No D1 database, R2 membership storage, server-side membership account, or GitHub Actions workflow is required.

## Cloudflare Workers Builds settings

- Repository: `SalvaAleu1/AYU`
- Production branch: `main`
- Root directory: `/`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Version command: `npx wrangler versions upload`
- Environment variables: none required for the public website

## Wrangler configuration

`wrangler.toml` is configured for Workers Static Assets:

```toml
name = "ayu"
compatibility_date = "2026-09-14"
workers_dev = true
send_metrics = false

[assets]
directory = "./dist"
not_found_handling = "404-page"
html_handling = "auto-trailing-slash"
```

Do not use `wrangler pages deploy` for this Cloudflare project. The dashboard project was created under Workers Builds, which requires a Deploy command. `npx wrangler deploy` reads the `[assets]` configuration above and uploads the built `dist` directory as static assets.

## Membership registration

The website does not store membership applications. Membership registration opens the official AYU Google Form at `https://forms.gle/4GTEwGTtW1wYq3ry5`. The link is configured in `membershipRegistrationUrl` inside `src/data/finalPlatformData.ts` and is used by the public Membership and Contact pages.

## Production behavior

Cloudflare installs dependencies, runs the Vite production build, then Wrangler deploys the generated `dist` directory as Workers Static Assets. The `_headers` file in `public/` is copied into `dist` by Vite and is supported by Workers Static Assets for response headers.

## GitHub Actions

Do not enable GitHub Actions for builds or deployment. Cloudflare Workers Builds performs the production build and deployment directly from the connected repository.
