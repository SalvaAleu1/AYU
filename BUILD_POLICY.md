# AYU Build and Deployment Policy

This file records the production development and deployment rule for the AYU public website.

- GitHub is used as the source-code repository only.
- Do not add or rely on GitHub Actions or other GitHub CI/CD workflows.
- Do not consume GitHub Actions credits for build, test or deployment runs.
- The production website is static and database-free; no D1 database, R2 membership storage or website account backend is required.
- Membership registration is handled through the official AYU Google Form at `https://forms.gle/4GTEwGTtW1wYq3ry5`.
- Cloudflare Workers Builds installs dependencies, runs `npm run build`, and deploys `dist` through Workers Static Assets using `npx wrangler deploy`.
- `wrangler.toml` is the source of truth for Cloudflare deployment and points `[assets].directory` to `./dist`.
- Source-level review and repository consistency checks may be performed without triggering GitHub Actions.
- Domain-specific canonical URLs and sitemap hostnames must use the actual production hostname after it is assigned; they must never be invented.
