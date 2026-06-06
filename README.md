# Web UX Workflow Audit

Reusable skill for auditing websites, web apps, landing pages, admin panels, and browser-based workflows with screenshots, UX feedback, focused fixes, and before/after validation.

## What It Does

- Desktop and mobile screenshots
- Workflow-by-workflow UX feedback
- Screen-by-screen UI feedback
- UI, copy, forms, accessibility, mobile, trust, and recovery checks
- Severity ratings from `P0` to `P3`
- Focused UX fixes when requested
- Browser logs, tests, builds, and before/after validation

## Install

```bash
npx skills add sgasser/web-ux-workflow-audit -g --yes
```

## Use

```text
Use $web-ux-workflow-audit.
```

Add a mode when needed:

- `audit only`: screenshots and findings, no code changes
- `full audit and fix`: audit, fix, and validate before/after

## Safety

Use test data for sensitive workflows. Do not trigger real payments, emails, refunds, cancellations, uploads, or destructive actions without explicit approval.

## License

MIT
