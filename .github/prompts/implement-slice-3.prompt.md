---
name: implement-slice-3
description: Implement Slice 3 of the web calculator (error handling and validation), then verify behavior and prepare a stakeholder showcase.
arguments:
  implementation_plan:
    type: string
    description: Path to the implementation plan markdown file
    default: specs/web-calculator-implementation-plan.md
  vertical_slices:
    type: string
    description: Path to the vertical slices markdown file
    default: specs/web-calculator-vertical-slices.md
  test_command:
    type: string
    description: Command to run unit tests for calculator logic
    default: npm run test
  e2e_command:
    type: string
    description: Command to run browser end-to-end tests
    default: npm run test:e2e
  dev_command:
    type: string
    description: Command to run the app locally for manual showcase steps
    default: npm run dev
tags:
  [
    "calculator",
    "vertical-slice",
    "slice-3",
    "error-handling",
    "validation",
    "verification",
    "demo",
  ]
ai_generated: true
model: "openai/gpt-5.3-codex@unknown"
operator: "johnmillerATcodemag-com"
chat_id: "slice-3-implementation-prompt-20260522"
prompt: |
  Using slice 3 instructions and implementation plan, create a prompt file that implements the slice. Include verification steps and showcase instructions that demonstrate the functionality to stakeholders.
started: "2026-05-22T04:10:00Z"
ended: "2026-05-22T04:28:00Z"
task_durations:
  - task: "slice 3 requirement synthesis"
    duration: "00:05:00"
  - task: "promptfile authoring"
    duration: "00:10:00"
  - task: "provenance and README updates"
    duration: "00:03:00"
total_duration: "00:18:00"
ai_log: "ai-logs/2026/05/22/slice-3-implementation-prompt-20260522/conversation.md"
source: "specs/web-calculator-vertical-slices.md, specs/web-calculator-implementation-plan.md"
owner: "Web Calculator Team"
version: "1.0.0"
---

# Implement Slice 3: Error Handling And Validation

Implement Slice 3 end-to-end based on:

- specs/web-calculator-implementation-plan.md
- specs/web-calculator-vertical-slices.md

## Objective

Deliver a vertically complete Slice 3 that includes:

- Malformed expression detection
- Division-by-zero handling
- Explicit UI error state and message behavior
- Recovery from error without page reload
- Automated tests for Slice 3 acceptance scenarios

Limit scope to Slice 3 behavior. Do not add percentage, memory, or advanced function behavior.

## Requirements Mapping

Implement and verify these requirements:

- FR-004 Error handling
- NFR-004 Reliability and recoverability
- NFR-005 Safe evaluation implementation
- Slice 3 acceptance criteria:
  - 10/0 shows an explicit error
  - 5++ shows an explicit error
  - App remains interactive after error and supports corrective input

## Implementation Instructions

1. Read the two source documents and summarize Slice 3 constraints before coding.
2. Inspect current calculator state and result rendering flow from Slices 1-2.
3. Implement explicit validation and error-state transitions:
   - Detect malformed expressions before evaluation
   - Detect division-by-zero during evaluation
   - Present a clear error state in the display
4. Implement recovery rules after error:
   - Numeric input should start a valid new expression
   - Clear actions should reset error state deterministically
   - Backspace behavior should remain consistent with current editing model
5. Ensure no uncaught runtime errors for normal invalid-input paths.
6. Preserve safe expression handling. Do not use eval, Function constructor, or equivalent unsafe execution.
7. Add or update unit tests for invalid expression, divide-by-zero, and recovery behavior.
8. If e2e tests exist, add a minimal error-flow smoke test.
9. Run formatting/linting only if already configured in this repo.

## Verification Steps

Run the following checks and report pass/fail with evidence:

1. Automated tests

- Unit tests: {{test_command}}
- E2E tests (if configured): {{e2e_command}}

2. Slice 3 acceptance checks

- Enter 10/0 then evaluate; verify explicit error is shown
- Enter 5++ then evaluate; verify explicit error is shown
- After each error, enter a valid expression (for example 8+2) and verify recovery without reload

3. Runtime safety checks

- Confirm no uncaught exceptions in browser console during invalid-input scenarios
- Confirm no unsafe execution patterns (for example eval, Function constructor)

4. UX sanity checks

- Error messaging is visible and understandable
- After recovery input, display returns to normal expression/result behavior

## Stakeholder Showcase Instructions

Use this script to demonstrate Slice 3 in a stakeholder review session:

1. Context setup

- State objective: improve calculator reliability through explicit error handling and recovery.
- State target user impact: users can correct mistakes without refresh or workflow interruption.

2. Live evidence walkthrough

- Start app with {{dev_command}} and confirm baseline ready state.
- Scenario A: 10/0 then evaluate; show explicit divide-by-zero error.
- Scenario B: 5++ then evaluate; show explicit malformed-expression error.
- Scenario C: after each error, enter 8+2 and evaluate; show successful recovery.

3. Quality evidence

- Show test results for new error and recovery coverage.
- Confirm runtime stability evidence (no uncaught console exceptions in demo path).
- Map each scenario to Slice 3 acceptance criteria.

4. Decision gate

- Ask for go/no-go on Slice 3 readiness.
- Capture risks, mitigations, and owners for any conditional approvals.

## Output Format Required

Return results in this structure:

1. Files changed

- List each file and one-line purpose.

2. Requirement coverage

- Map implemented behavior to FR-004, NFR-004, and NFR-005.

3. Verification results

- Command run, status, and key output lines.

4. Showcase notes

- What was demonstrated and stakeholder decision outcome.

5. Risks and next step

- Known gaps and the recommended handoff to Slice 4.
