---
name: implement-slice-4
description: Implement Slice 4 of the web calculator (percentage workflow), then verify behavior and prepare a stakeholder showcase.
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
tags:
  [
    "calculator",
    "vertical-slice",
    "slice-4",
    "percentage",
    "implementation",
    "verification",
    "demo",
  ]
ai_generated: true
model: "openai/gpt-5.3-codex@unknown"
operator: "johnmillerATcodemag-com"
chat_id: "slice-4-implementation-prompt-20260522"
prompt: |
  Using slice 4 instructions and implementation plan, create a prompt file that implements the slice. Include verification steps and showcase instructions that demonstrate the functionality to stakeholders.
started: "2026-05-22T04:10:00Z"
ended: "2026-05-22T04:28:00Z"
task_durations:
  - task: "slice 4 requirement synthesis"
    duration: "00:05:00"
  - task: "promptfile authoring"
    duration: "00:10:00"
  - task: "provenance and index updates"
    duration: "00:03:00"
total_duration: "00:18:00"
ai_log: "ai-logs/2026/05/22/slice-4-implementation-prompt-20260522/conversation.md"
source: "specs/web-calculator-vertical-slices.md, specs/web-calculator-implementation-plan.md"
owner: "Web Calculator Team"
version: "1.0.0"
---

# Implement Slice 4: Percentage Workflow

Implement Slice 4 end-to-end based on:

- {{implementation_plan}}
- {{vertical_slices}}

## Objective

Deliver a vertically complete Slice 4 that includes:

- Percentage operator behavior aligned to FR-006
- A documented percentage model in code comments or project docs
- Automated tests that lock percent behavior and prevent regressions

Limit scope to Slice 4 behavior. Do not implement Slice 5+ features unless needed to keep Slice 4 functional.

## Requirements Mapping

Implement and verify this requirement:

- FR-006 Percentage Behavior
- Slice 4 acceptance criteria:
  - 200\*10% = 20
  - 50+10% follows the documented model consistently

## Percentage Model To Implement

Use a deterministic consumer-math model and document it where logic is implemented:

- a*b% => a*(b/100)
- a/b% => a/(b/100)
- a+b% => a + (a\*b/100)
- a-b% => a - (a\*b/100)

If the existing codebase already has a documented model, preserve that model and align tests to it.

## Implementation Instructions

1. Read the source documents and summarize Slice 4 constraints before coding.
2. Inspect existing calculator parsing and evaluation flow to add percent support without unsafe execution.
3. Implement percentage behavior in a single vertical slice:
   - UI input path for % key/button and keyboard parity if keyboard handling exists
   - Evaluation logic for percent scenarios in multiplicative and additive contexts
   - Display behavior for intermediate and final values
4. Ensure percent behavior is deterministic and consistent after equals chaining.
5. Keep Slice 4 logic isolated and testable.
6. Add or update unit tests for all required percent scenarios.
7. If e2e tests exist, add one minimal percent smoke flow.
8. Run formatting/linting only if already configured in this repo.

## Verification Steps

Run the following checks and report pass/fail with evidence:

1. Automated tests

- Unit tests: {{test_command}}
- E2E tests (if configured): {{e2e_command}}

2. Slice 4 acceptance checks

- Enter 200\*10% then evaluate, result must be 20
- Enter 50+10% then evaluate, result must match the documented model
- If using the model above, expected result is 55

3. Consistency checks

- Verify repeated runs of the same input produce identical results
- Verify behavior is identical for click and keyboard paths when both are supported

4. Code safety check

- Confirm no unsafe expression evaluation patterns (for example, eval, Function constructor)

## Stakeholder Showcase Instructions

Use this script to demonstrate Slice 4 in a review session:

1. Setup

- Start the app using the repo-standard dev command.
- Confirm calculator loads and display starts in a valid default state.
- State objective: percent workflows for discount/tax/tip style math.

2. Live demo flow

- Scenario A: 200\*10% => 20 (basic percentage extraction)
- Scenario B: 50+10% => model-consistent result (typically 55)
- Scenario C: 120-15% => model-consistent discount result (typically 102)

3. Quality evidence

- Show test output summary for percent-related tests.
- Show where the percentage model is documented in code or docs.
- Show acceptance checklist with pass status.

4. Decision gate

- Ask stakeholders to confirm: go/no-go for Slice 4 completion.
- Capture any requested model clarifications as follow-up actions with owners.

## Output Format Required

Return results in this structure:

1. Files changed

- List each file and a one-line purpose.

2. Requirement coverage

- Map implemented behavior to FR-006 and Slice 4 acceptance criteria.

3. Verification results

- Command run, status, and key output lines.

4. Showcase notes

- What was demonstrated, stakeholder feedback, and decision outcome.

5. Risks and next step

- Any known gap for Slice 4 and what to do next for Slice 5.
