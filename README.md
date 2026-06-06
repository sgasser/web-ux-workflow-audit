# Web UX Workflow Audit

Reusable skill for auditing websites, web apps, landing pages, admin panels, and browser-based workflows with screenshots, UX feedback, focused fixes, and before/after validation.

Works for local, staged, and public browser-based experiences. For public URLs without source access, use audit-only mode.

## What It Does

- Desktop and mobile screenshots
- Workflow-by-workflow UX feedback
- Screen-by-screen UX/UI feedback
- UI, copy, forms, accessibility, mobile, trust, and recovery checks
- Severity ratings from `P0` to `P3`
- Focused UX fixes when requested
- Browser logs, tests, builds, and before/after validation when available

## Install

```bash
npx skills add sgasser/web-ux-workflow-audit -g --yes
```

## Use

```text
Use $web-ux-workflow-audit.
```

Default mode is `audit only`. The skill should not edit code unless implementation is explicitly requested.

- `audit only`: screenshots and findings, no code changes
- `full audit and fix`: audit, fix, and validate before/after

If no target is provided, the skill tries to infer one from the active browser or local project context.

Example:

```text
Use $web-ux-workflow-audit in audit only mode.

Target: http://localhost:3000
Scope: full site/app audit. Discover routes, navigation, forms, states, and important workflows before testing.
Save desktop/mobile screenshots, report P0-P3 findings, and do not change code.
```

## Optional Screenshot Helper

If the target project already has Playwright installed:

```bash
node scripts/capture-pages.mjs --out screenshots/ux-audit --mobile --url http://localhost:3000
```

The helper writes screenshots and a `manifest.json`.

## Safety

Use test data for sensitive workflows. Do not trigger real payments, emails, refunds, cancellations, uploads, or destructive actions without explicit approval. Sandbox payment flows are allowed only when the user explicitly authorizes test-mode payments.

## License

MIT
