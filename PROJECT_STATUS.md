# AYU Platform — Final Development Checkpoint

This file is the internal build checkpoint for the Apuk Youth Union in Juba (AYU-Juba) public platform.

## Production rules

- AYU and Apuk Graduates’ Congress (AGC) are separate organizations. AGC appears in AYU only where the AYU Constitution identifies it as a community partner.
- Public production UI must not contain placeholders, developer notes, fake statistics, fabricated news/projects/events, invented leadership details, or confidential/internal verification processes.
- Missing noncritical public data remains absent or conditionally hidden rather than fabricated.
- Use clear, simple public English. Avoid unnecessary technical or internal terms.
- Do not publish the AYU membership fee amount on the website. Current registration requirements and fee details are provided through the official membership Google Form.
- Avoid unnecessary public counting of programme areas, leadership offices, board members or similar organizational information. Show what AYU does instead of emphasizing totals.
- News should focus mainly on what happened or what AYU did, rather than presenting routine organizational actions as the work of one individual.
- The Amended 2025 Constitution was amended and approved by the General Assembly. Agany Geng Ayiei was the serving Chairperson who signed it into law.
- GitHub is the source-code repository only. GitHub Actions/CI is not used.
- The production website is static and database-free.
- Membership registration uses the official AYU Google Form: `https://forms.gle/4GTEwGTtW1wYq3ry5`.
- Cloudflare Workers Builds performs dependency installation, production build and deployment from `main`.

## Final checkpoint

**Completed:** Phases 1–31  
**Development status:** Complete  
**Production status:** Deploy-ready through Cloudflare Workers Static Assets  
**Repository:** `SalvaAleu1/AYU`  
**Primary branch:** `main`

## Completed roadmap

1. Project Foundation & AYU Design System
2. Global Website Shell
3. Homepage
4. About AYU
5. AYU Identity, Logo & Symbols
6. Leadership System
7. Advisory Board & Past Leadership
8. Our Work / Program Architecture
9. Individual Programs & Projects
10. News & Official Communications
11. Events System
12. Impact & Success Stories
13. Media Centre
14. Membership Information
15. Membership Application & Registration — official AYU Google Form
16. Authentication & Account Security — superseded by static public architecture
17. Member Portal — superseded by static public architecture
18. Member Privacy & Public Visibility Controls
19. Contributions, Payments & Receipts Framework — public governance/accountability principles retained
20. Governance & Transparency Centre
21. Constitution Digital Reader
22. Elections Module
23. Election Administration
24. Apuk Youth Hub
25. Partners, Sponsors & Support
26. Contact & Official Communication Channels
27. Source-controlled Content Management
28. Repository Roles & Internal Governance Controls
29. Notifications, Search & Platform Utilities
30. Cloudflare Production Architecture — Workers Builds with Static Assets
31. Production Hardening, SEO, Legal, Testing & Launch

## Cloudflare deployment configuration

- Repository: `SalvaAleu1/AYU`
- Branch: `main`
- Root directory: `/`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Version command: `npx wrangler versions upload`
- Static assets directory: `./dist` via `wrangler.toml`
- Environment variables: none required by the AYU application
- GitHub Actions: not used

## Membership registration

`membershipRegistrationUrl` in `src/data/finalPlatformData.ts` points to the official form at `https://forms.gle/4GTEwGTtW1wYq3ry5`. The Membership and Contact pages link directly to it. The website does not display the membership fee amount.

## Public-content cleanup completed

- Removed the membership fee amount from public membership pages, election summaries and the online Constitution reader.
- Removed unnecessary public totals and decorative numbering from leadership, work, impact, events, governance, Youth Hub and related pages.
- Rewrote public wording in simple English across the main website sections.
- Reworked news items to focus on events and AYU actions rather than individual personalities.
- Corrected Constitution wording throughout: the General Assembly amended and approved the Constitution; the serving Chairperson signed it into law.
- Removed internal design guidance from the public Identity page.
- Kept the full list of constitutional leadership roles where useful, without presenting the number of offices as a public statistic.

## Launch note

A Cloudflare production build passed before the final wording cleanup. The latest source changes are ready for Cloudflare to rebuild and verify on the next deployment. The deployment configuration matches the Cloudflare Workers Builds project shown in the dashboard. Domain-specific canonical and sitemap URLs should only be generated after the production hostname is known.
