# AYU Public Website — Content Operations

The production website is intentionally designed as a static, source-controlled public platform. It does not require a website database for ordinary public content, membership registration, elections information, or routine publishing.

## Publishing model

- Public content is maintained in typed source files under `src/data/`.
- The official AYU membership Google Form is configured in `src/data/finalPlatformData.ts` as `https://forms.gle/4GTEwGTtW1wYq3ry5`.
- News, events, projects, leadership, governance documents and election records are published by updating their relevant source collection.
- Records that are not approved for public release remain absent from the public collections.
- Repository permissions and branch controls are the administrative boundary for public content changes.

## Key content locations

- News: `src/data/newsData.ts`
- Events: `src/data/eventsData.ts`
- Programmes/projects: `src/data/workData.ts`
- Leadership: `src/data/leadershipData.ts`
- Governance archive: `src/data/governanceArchive.ts`
- Elections, Youth Hub, partners and public-link configuration: `src/data/finalPlatformData.ts`
- Constitution: `src/data/constitution/`

## Production principle

The public site must not publish fabricated leadership, statistics, projects, events, election records, contact details or payment information. Confidential records remain outside the public repository content model unless AYU expressly authorizes their release.
