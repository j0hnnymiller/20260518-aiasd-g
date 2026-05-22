---
name: implement-slice-2
description: Implement Slice 2 of the web calculator (editing and keyboard parity), then verify behavior and run a stakeholder showcase.
arguments:
  implementation_plan:
    type: string
    description: Path to the implementation plan markdown file
    default: specs/web-calculator-implementation-plan.md
  vertical_slices:
    type: string
    description: Path to the vertical slices markdown file
    default: specs/web-calculator-vertical-slices.md
  specification:
    type: string
    description: Path to the product specification markdown file
    default: specs/web-calculator-specification.md
  test_command:
    type: string
    description: Command to run unit tests for calculator logic
    default: npm run test
  e2e_command:
    type: string
    description: Command to run browser end-to-end tests
    default: npm run test:e2e
tags:
  [
    "calculator",
    "vertical-slice",
    "slice-2",
    "implementation",
    "verification",
    "demo",
    "keyboard",
  ]
ai_generated: true
model: "openai/gpt-5.3-codex@unknown"
operator: "johnmillerATcodemag-com"
chat_id: "slice-2-implementation-prompt-20260522"
prompt: |
  Using slice 2 instructions and implementation plan, create a prompt file that implements the slice. Include verification steps and showcase instructions that demonstrate the functionality to stakeholders.
started: "2026-05-22T10:00:00Z"
ended: "2026-05-22T10:17:00Z"
task_durations:
  - task: "slice and plan synthesis"
    duration: "00:05:00"
  - task: "promptfile authoring"
    duration: "00:09:00"
  - task: "provenance and indexing updates"
    duration: "00:03:00"
total_duration: "00:17:00"
ai_log: "ai-logs/2026/05/22/slice-2-implementation-prompt-20260522/conversation.md"
source: "specs/web-calculator-vertical-slices.md, specs/web-calculator-implementation-plan.md"
owner: "Web Calculator Team"
version: "1.0.0"
---

# Implement Slice 2: Editing And Keyboard Parity

Implement Slice 2 end-to-end based on:

- specs/web-calculator-implementation-plan.md
- specs/web-calculator-vertical-slices.md
- specs/web-calculator-specification.md

## Objective

Deliver a vertically complete Slice 2 that includes:

- Editing controls (`AC`, `Backspace`)
- Keyboard parity for digits, operators, `Enter`, `Backspace`, and `Esc`
- Shared action path so keyboard and click interactions produce identical outcomes
- Automated tests for Slice 2 acceptance scenarios

Limit scope to Slice 2 behavior. Do not implement Slice 3+ features unless required to make Slice 2 functional.

## Requirements Mapping

Implement and verify these requirements:

- FR-003 Clear And Correct
- FR-005 Keyboard Support
- Slice 2 acceptance criteria:
  - `Backspace` changes `123` to `12`
  - `AC` or `Esc` resets the display to `0`
  - Keyboard and mouse actions produce the same result

## Implementation Instructions

1. Read the three source documents and summarize Slice 2 constraints before coding.
2. Inspect existing project structure and preserve current framework and tooling.
3. Implement Slice 2 as a vertical increment on top of Slice 1 behavior:
   - Add `AC` action and connect button + `Esc`
   - Add `Backspace` action and connect button + keyboard key
   - Add/confirm keyboard mappings for digits, operators, decimal, and `Enter`
4. Route both click and keyboard interactions through the same action handlers.
5. Keep behavior deterministic and testable. Do not add Slice 3 error-state features in this slice.
6. Add or update unit tests for clear, backspace, and keyboard parity.
7. If e2e tests exist, add a Slice 2 interaction smoke path.
8. Run lint/format commands only if already configured in this repo.

## Verification Steps

Run the following checks and report pass/fail with evidence:

1. Automated tests

- Unit tests: {{test_command}}
- E2E tests (if configured): {{e2e_command}}

2. Slice 2 acceptance checks

- Enter `123`, trigger `Backspace`, result must be `12`
- Enter any expression, press `AC` and verify display resets to `0`
- Enter any expression, press `Esc` and verify display resets to `0`
- Run one scenario by mouse and by keyboard, verify identical display/result sequence

3. Interaction architecture check

- Confirm keyboard and click handlers call the same action functions
- Confirm no duplicated business logic paths for input/editing actions

4. UX sanity check

- Backspace removes exactly one token/character at a time
- Clear operations always restore a stable default display state

## Stakeholder Showcase Instructions

Use this script to demonstrate Slice 2 in a review session:

1. Context setup

- State objective: improve user correction speed and full keyboard usability.
- State scope: Slice 2 only (`AC`, `Backspace`, keyboard parity).

2. Live demo flow

- Scenario A (Correction): enter `123`, press `Backspace`, show `12`.
- Scenario B (Reset): enter any expression, press `AC`, show reset to `0`.
- Scenario C (Keyboard reset): enter any expression, press `Esc`, show reset to `0`.
- Scenario D (Parity): perform the same calculation once by click and once by keyboard, show identical behavior.

3. Quality evidence

- Show unit test summary for Slice 2.
- Show e2e smoke result for editing/keyboard flow (if configured).
- Show key changed files and where shared action handling is implemented.

4. Decision gate

- Ask for go/no-go on Slice 2 exit criteria.
- Capture follow-up actions for any parity or UX defects.

## Output Format Required

Return results in this structure:

1. Files changed

- List each file and a one-line purpose.

2. Requirement coverage

- Map implemented behavior to FR-003 and FR-005.

3. Verification results

- Command run, status, and key output lines.

4. Showcase notes

- What was demonstrated, stakeholder decision, and action items.

5. Risks and next step

- Any known Slice 2 gap and the recommended handoff to Slice 3.
