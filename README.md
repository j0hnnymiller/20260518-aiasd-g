# Web Calculator

Slice 1 delivers a Vue 3 + TypeScript calculator with safe arithmetic evaluation, unit tests, Playwright acceptance tests, and a GitHub Pages-compatible Vite build.

## Commands

- `npm install` - install dependencies
- `npm run test` - run unit tests for calculator logic
- `npm run build` - type-check and build for GitHub Pages
- `npm run test:e2e` - run Playwright acceptance tests

## AI-Assisted Artifacts

- [`src/components/Calculator.vue`](src/components/Calculator.vue) - calculator UI shell with semantic controls and shared action dispatch.
- [`src/calculator/evaluator.ts`](src/calculator/evaluator.ts) - pure recursive-descent evaluator for `+`, `-`, `*`, `/`, and decimals without `eval`.
- [`src/calculator/evaluator.test.ts`](src/calculator/evaluator.test.ts) - table-driven arithmetic tests, including Slice 1 acceptance scenarios.
- [`e2e/calculator.spec.ts`](e2e/calculator.spec.ts) - Playwright acceptance coverage for `12+7`, `9/3`, and `5.5*2`.
- [`ai-logs/2026/05/22/web-calculator-slice-1-20260522/`](ai-logs/2026/05/22/web-calculator-slice-1-20260522/) - provenance log and session summary for Slice 1 scaffolding and implementation.
