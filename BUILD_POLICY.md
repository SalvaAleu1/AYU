# AYU Build and Deployment Policy

This file records the internal development/deployment rule for the AYU platform.

- GitHub is used as the source-code repository only.
- Do not add or rely on GitHub Actions or other GitHub CI/CD workflows.
- Continue committing source files, migrations, configuration and documentation directly to the repository.
- Do not consume GitHub Actions credits for build, test or deployment runs.
- Dependency installation, production build, database/resource binding, migration execution and runtime verification will be performed during Cloudflare deployment in the production architecture and launch phases.
- Source-level review and repository consistency checks may still be performed during development, but they must not trigger GitHub Actions.
- The current three-phases-per-Continue roadmap rule remains unchanged.
