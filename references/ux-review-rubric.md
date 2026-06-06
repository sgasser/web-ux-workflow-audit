# UX Review Rubric

Use this rubric for each workflow and screenshot. Start with the user goal and the task outcome, then use screenshots as evidence.

## Severity

- `P0`: The user cannot complete a core task such as signup, payment, submission, cancellation, login, admin confirmation, or recovery.
- `P1`: The user can technically proceed, but the experience is likely to cause drop-off, wrong decisions, avoidable errors, or loss of trust.
- `P2`: The user can complete the task, but the screen or transition creates unnecessary effort, uncertainty, or scanning cost.
- `P3`: The issue is mostly polish and has limited task impact.

## Heuristic Lenses

- `clarity`: The screen communicates purpose, current state, and next action without relying on hidden knowledge.
- `information hierarchy`: Decision-critical information is prominent, grouped, and ordered before supporting detail.
- `action visibility`: Primary, secondary, destructive, disabled, loading, and recovery actions are easy to distinguish.
- `error prevention and recovery`: The flow prevents avoidable mistakes and gives a useful next step after errors, cancellation, expiry, or missing data.
- `trust and risk communication`: Payment, legal, cancellation, refund, irreversible, and admin consequences are explained before commitment.
- `copy and content UX`: Interface text helps users decide, act, and recover without guessing.
- `accessibility`: Focus order, labels, keyboard access, target size, contrast, and semantics are strong enough for real use.
- `mobile ergonomics`: Small-screen ordering, spacing, tap targets, sticky elements, and text wrapping support fast completion.
- `conversion and friction`: Each step earns its place and removes unnecessary decisions, repetition, or waiting.
- `workflow continuity`: Context carries across list, detail, form, confirmation, payment, success, cancellation, and follow-up states.

## Copy And Content Checks

- Do calls to action describe the next consequence, not just a generic verb?
- Are form labels meaningful without relying on placeholder text?
- Do helper texts appear close to the field or decision they support?
- Do errors explain what happened and how to fix it?
- Do empty, unavailable, sold-out, expired, cancelled, and failed states give a next step?
- Are prices, dates, times, quantities, statuses, and locations formatted consistently?
- Are payment, refund, cancellation, legal, privacy, and destructive-action consequences explicit before commitment?
- Does the tone match the audience, task risk, and product context?
- Are link text, button names, icon labels, and image alt text useful to assistive technology?
- Is the language consistent, localized, and free from internal implementation terms?

## Workflow Continuity Checks

- Does the entry point match the user's likely intent?
- Does each screen preserve enough context from the previous step?
- Is the primary action placed near the decision it confirms?
- Are cancellation, failure, expired, and back-navigation states recoverable?
- Does the final state confirm what happened and what the user should do next?
- Can the user resume or correct the workflow without starting over unnecessarily?

## Excellent

- The screen has a clear primary task and a visible next action.
- Important information appears before secondary detail.
- Visual hierarchy is obvious without reading every word.
- The screen recovers well from uncertainty, pending states, or incomplete data.
- The workflow communicates consequence, progress, and recovery without extra explanation.

## Strong

- Layout is responsive and readable.
- Labels, prices, statuses, and dates are understandable.
- Components match the product's existing design system.
- Actions have sensible hover, focus, disabled, loading, empty, error, and success states.
- The primary action is close to the decision point and does not compete with secondary actions.

## Usable

- The screen is usable but the hierarchy is not especially strong.
- Information is present, but scanning takes more effort than necessary.
- The visual system is consistent, but the screen still feels generic or under-prioritized.
- The workflow works, but recovery or next-step guidance could be clearer.
- The responsive behavior is acceptable, but spacing, density, or ordering could improve task speed.

## Needs Improvement

- The user cannot tell what to do next.
- Large empty areas push important content below the fold without purpose.
- Copy is vague, technically accurate but user-hostile, or missing context.
- Destructive, payment, or admin actions do not explain consequences.
- Tables/forms are cramped, misaligned, or hide important status fields.
- Mobile text, buttons, or cards overflow, overlap, or require awkward scanning.
- Accessibility affordances such as focus, labels, target size, or contrast are weak.
- State transitions such as pending, failed, cancelled, expired, or completed are ambiguous.

## Recommended Next Change

Write fixes as specific changes:

- Move primary action near the decision point.
- Replace placeholder/fallback values with user-facing copy.
- Add recovery path after cancel, failure, timeout, or expired state.
- Reduce visual dominance of repeated decorative assets.
- Clarify payment/refund/cancel consequences.
- Add tests for workflow behavior and copy that prevents regressions.
