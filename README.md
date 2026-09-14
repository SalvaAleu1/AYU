# Apuk Youth Union in Juba (AYU)

Official public website of **Apuk Youth Union in Juba (AYU-Juba)**.

> **Motto:** Together for Peace, Unity and Development.

## Constitutional foundation

The website is grounded in the amended 2025 Constitution of Apuk Youth Union in Juba. Public content covers AYU's constitutional identity, mission, vision, values, objectives, membership, governance organs, leadership structure, programmes, finances, elections and relationships with other Apuk institutions.

AYU and Apuk Graduates’ Congress (AGC) are separate organizations. AGC appears here only where the AYU Constitution identifies it as a community partner.

## Production architecture

- React + TypeScript + Vite
- Static, database-free public website
- Cloudflare Workers Builds with Static Assets
- GitHub repository used for source control; GitHub Actions are not required
- Responsive mobile, tablet and desktop layouts
- Source-controlled news, events, programmes, governance and election information
- Searchable digital reader for the Amended 2025 AYU Constitution
- Membership registration through the official AYU Google Form: `https://forms.gle/4GTEwGTtW1wYq3ry5`
- Security headers, SEO/social metadata, Privacy Policy, Terms of Use, Accessibility statement and professional 404 page

## Public sections

Home, About AYU, Identity & Symbols, Leadership, Advisory Board & History, Our Work, News & Official Communications, Events, Impact, Media Centre, Membership, Governance & Transparency, Constitution, Elections, Apuk Youth Hub, Partners & Support, Contact, Search and website utilities.

## Content operations

Public content is maintained in typed source files under `src/data/`. See `CONTENT_OPERATIONS.md` for the content map and publication principles. Internal repository roles and source-management policy are defined under `src/admin/`.

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Cloudflare Workers Builds:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Version command: `npx wrangler versions upload`
- Production branch: `main`
- Root directory: `/`
- Environment variables: none required for the static public site

The `wrangler.toml` file deploys `./dist` as Workers Static Assets.

See `CLOUDFLARE_DEPLOYMENT.md` for deployment details.
