# Web Calculator

Slice 2 extends the Vue 3 + TypeScript calculator with editing controls (`AC`, `Backspace`) and keyboard parity while keeping safe arithmetic evaluation, unit tests, Playwright acceptance tests, and a GitHub Pages-compatible Vite build.

## Commands

- `npm install` - install dependencies
- `npm run test` - run unit tests for calculator logic
- `npm run build` - type-check and build for GitHub Pages
- `npm run test:e2e` - run Playwright acceptance tests

## AI-Assisted Artifacts

- [`src/components/Calculator.vue`](src/components/Calculator.vue) - calculator UI shell with semantic controls and shared action dispatch.
- [`src/calculator/evaluator.ts`](src/calculator/evaluator.ts) - pure recursive-descent evaluator for `+`, `-`, `*`, `/`, and decimals without `eval`.
- [`src/calculator/useCalculator.ts`](src/calculator/useCalculator.ts) - shared action dispatcher for button and keyboard flows, including clear and backspace editing actions.
- [`src/calculator/evaluator.test.ts`](src/calculator/evaluator.test.ts) - table-driven arithmetic tests, including Slice 1 acceptance scenarios.
- [`src/calculator/useCalculator.test.ts`](src/calculator/useCalculator.test.ts) - Slice 2 unit coverage for `AC`, `Backspace`, and keyboard/mouse parity.
- [`e2e/calculator.spec.ts`](e2e/calculator.spec.ts) - Playwright acceptance coverage for arithmetic plus Slice 2 editing and keyboard parity scenarios.
- [`ai-logs/2026/05/22/web-calculator-slice-1-20260522/`](ai-logs/2026/05/22/web-calculator-slice-1-20260522/) - provenance log and session summary for Slice 1 scaffolding and implementation.
