---
name: web-ux-workflow-audit
description: End-to-end UI/UX workflow audit for local or staged websites, web apps, landing pages, static sites, admin panels, dashboards, checkout flows, onboarding flows, and similar browser-based products. Use when the user asks to understand a site or app, walk every important workflow, capture and save screenshots, review each workflow and screen for UX/UI issues, prioritize findings by user impact, implement focused fixes, run tests/builds/checks, inspect browser or app logs, and provide final validation screenshots. Framework-neutral; apply to server-rendered apps, single-page apps, static sites, admin panels, checkout flows, onboarding, dashboards, and similar web experiences.
---

# Web UX Workflow Audit

## Outcome

Produce an evidence-based product workflow audit and, when requested, implement fixes. The expected deliverable is a task-first map of workflows, named screenshots as evidence, UX findings prioritized by user impact, per-screen feedback, code changes if needed, automated verification, browser/log checks, and final screenshots proving the result.

## Modes

Default to `audit only` unless the user explicitly asks for implementation.

- `audit only`: capture workflows and screenshots, then report findings, severity, and recommended fixes without changing code.
- `full audit and fix`: audit, implement focused fixes for the highest-impact validated issues, verify, and capture before/after screenshots.

For follow-up requests after an earlier audit, apply the already approved or directly requested UX fixes, then verify them with affected checks and screenshots.

## Severity

- `P0`: blocks task completion, payment, signup, submission, cancellation, or recovery.
- `P1`: likely causes drop-off, wrong decisions, avoidable errors, or loss of trust.
- `P2`: slows users down, creates avoidable cognitive load, or weakens clarity.
- `P3`: polish issue with limited task impact.

## UX Heuristics

Use these lenses when judging each workflow and screenshot:

- `clarity`: users can tell what the screen is for and what to do next.
- `information hierarchy`: the most decision-relevant information appears first and reads fastest.
- `action visibility`: primary, secondary, destructive, disabled, and recovery actions are placed and styled appropriately.
- `error prevention and recovery`: validation, empty states, failures, cancellation, and timeout states prevent avoidable harm and offer a next step.
- `trust and risk communication`: payment, legal, destructive, account, and admin consequences are explicit before commitment.
- `copy and content UX`: labels, instructions, calls to action, errors, empty states, dates, prices, statuses, and legal or payment copy help users decide and recover.
- `accessibility`: focus, labels, target size, contrast, keyboard flow, and semantic structure support broad use.
- `mobile ergonomics`: layout, tap targets, ordering, sticky regions, and text fit work on small screens.
- `conversion and friction`: the path removes unnecessary decisions and keeps effort proportional to the task.
- `workflow continuity`: users never lose context between list, detail, form, confirmation, success, cancellation, and follow-up states.

## Copy And Content UX

Treat text as part of the interface, not as decoration. During review, check:

- `cta clarity`: buttons and links say what will happen next, especially for signup, payment, cancellation, submission, and destructive actions.
- `form labels`: labels are user-facing, specific, and understandable without placeholder text.
- `error messages`: errors explain the problem, the cause when useful, and the next action.
- `empty states`: empty, unavailable, sold-out, expired, and missing-data states give a useful recovery path.
- `trust copy`: payment, legal, refund, cancellation, privacy, account, and admin consequences are explicit before commitment.
- `data wording`: prices, dates, times, statuses, quantities, names, and locations are consistent, scannable, and localized for the product.
- `tone`: wording matches the audience, risk level, and product context.
- `microcopy placement`: explanations appear close to the decision or field they support.
- `accessible names`: images, links, buttons, icons, and form controls have useful accessible text.
- `language consistency`: avoid mixed languages, internal jargon, placeholder copy, and implementation terms unless the product context requires them.

## Workflow

1. **Orient**
   - Read local agent/project instructions first.
   - Identify framework, routing, test commands, build commands, auth/admin access patterns, and existing screenshot or browser tooling.
   - Prefer project-native docs and tools. For framework-specific work, activate the relevant framework/test/design skills too.

2. **Map Workflows And User Goals**
   - List user-facing and admin-facing workflows before testing.
   - For each workflow, state the user goal, entry point, required decision, primary action, possible failure or cancellation path, and expected end state.
   - Include happy paths, empty states, validation errors, auth redirects, payment/cancel/success states, destructive or irreversible actions, and responsive breakpoints.
   - Treat screen transitions as part of the UX: list to detail, detail to form, form to payment, payment to success/cancel, admin review to action, and error to recovery.
   - For public URLs without source code access, run audit-only mode and provide findings and recommendations.
   - Avoid live side effects unless the user explicitly authorized them. Use test data, sandbox accounts, or screenshots of pre-existing states when possible.

3. **Capture Screenshots**
   - Create a timestamped or task-specific screenshot directory.
   - Save screenshots with sortable names such as `01-home.png`, `02-list-empty.png`, `03-form-error.png`.
   - Capture desktop and mobile for primary flows. Capture modal, loading, empty, error, disabled, and success states when reachable.
   - If a page animates in, wait for the animation to settle before the screenshot.
   - If using the bundled helper, run `scripts/capture-pages.mjs` after checking its options.

4. **Review Workflows And Screens**
   - Start from the workflow goal, not the visual appearance. Ask whether a real user can complete the task confidently, safely, and efficiently.
   - For each workflow finding, include:
     - `user goal`: what the user is trying to accomplish
     - `observed evidence`: screenshot names, browser behavior, logs, copy, layout, or state transitions
     - `ux impact`: how the issue affects completion, confidence, speed, trust, or error risk
     - `severity`: P0, P1, P2, or P3
     - `heuristic`: one or more UX heuristics from this skill
     - `recommendation`: the next concrete change
   - For every screenshot, also give structured feedback:
     - `excellent`: interaction, hierarchy, or recovery patterns that work especially well
     - `strong`: solid UX/UI decisions that should be preserved
     - `usable`: acceptable areas that work but lack polish, clarity, or speed
     - `needs improvement`: concrete usability, accessibility, content, workflow, or visual issues
     - `recommended next change`: the next specific fix to make
   - Review visible and accessible text as UX evidence. Check CTA labels, headings, helper text, validation messages, empty states, status labels, dates, prices, legal copy, payment copy, and recovery instructions.
   - Read `references/ux-review-rubric.md` when a consistent audit rubric is useful.
   - Tie findings to user goals, screenshot names, and user impact, not vague visual preference.

5. **Fix**
   - Keep changes scoped to validated issues.
   - Preserve existing design system and component patterns.
   - Improve hierarchy, copy, spacing, responsive behavior, state clarity, focus/hover/error states, and workflow recovery.
   - Do not rewrite the app or introduce new dependencies unless necessary and approved.

6. **Verify**
   - Run formatter, build, focused tests, and any project-specific checks.
   - Re-run affected workflows in a real browser.
   - Inspect browser console/logs and backend/app logs.
   - Capture final screenshots using names like `07-home-final.png`.
   - Compare before/after evidence for each fixed issue: previous screenshot, final screenshot, command result, and remaining risk.
   - Report commands run, pass/fail result, residual risk, and screenshot paths.

## Browser And Screenshot Guidance

- Use the available browser, screenshot, test, and logging tools in the current runtime. Prefer the user's active browser when available for local targets.
- Use Playwright or project browser tests when repeatability matters.
- If an app serves built assets, rebuild after Tailwind/CSS/class changes before visual verification.
- Confirm screenshots are non-empty and visually inspect final images before reporting success.
- For sensitive forms, payment flows, destructive admin actions, emails, uploads, or external submissions, confirm before sending data or triggering side effects unless the user already gave narrow approval.

## Reporting Shape

Keep the final report short and actionable:

```markdown
Implemented:
- ...

Verification:
- `npm run build` passed
- `npm test -- ...` passed
- Browser logs: clean

Screenshots:
![label](screenshots/ux-audit/01-home-desktop.png)
```

For workflow-level UX feedback, use this shape:

```markdown
## Workflow: <name>

User goal:
- ...

Observed evidence:
- ...

UX impact:
- ...

Severity:
- P1

Heuristic:
- workflow continuity
- error prevention and recovery

Recommendation:
- ...

Implemented:
- ...

Validation:
- ...

Final screenshot:
![label](screenshots/ux-audit/07-home-final.png)
```

For screenshot-by-screenshot UX feedback, use this secondary shape:

```markdown
## 01-home.png

Excellent:
- ...

Strong:
- ...

Usable:
- ...

Needs improvement:
- ...

Recommended next change:
- ...
```

When no fixes were made, still provide the audit findings and screenshot paths.
