---
name: implement-slice-1
description: Implement Slice 1 of the web calculator (core shell and arithmetic), then verify behavior and prepare a stakeholder showcase.
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
    "slice-1",
    "implementation",
    "verification",
    "demo",
  ]
ai_generated: true
model: "openai/gpt-5.3-codex@unknown"
operator: "johnmillerATcodemag-com"
chat_id: "slice-1-implementation-prompt-20260522"
prompt: |
  Using slice 1 instructions and implementation plan, create a prompt file that implements slice 1. Include verification steps and showcase instructions that demonstrate the functionality to stakeholders.
started: "2026-05-22T03:05:00Z"
ended: "2026-05-22T03:22:00Z"
task_durations:
  - task: "instruction and spec synthesis"
    duration: "00:05:00"
  - task: "promptfile authoring"
    duration: "00:09:00"
  - task: "provenance and README updates"
    duration: "00:03:00"
total_duration: "00:17:00"
ai_log: "ai-logs/2026/05/22/slice-1-implementation-prompt-20260522/conversation.md"
source: "specs/web-calculator-vertical-slices.md, specs/web-calculator-implementation-plan.md"
owner: "Web Calculator Team"
version: "1.0.0"
---

# Implement Slice 1: Core Calculator Shell And Arithmetic

Implement Slice 1 end-to-end based on:

- specs\web-calculator-implementation-plan.md
- specs\web-calculator-vertical-slices.md
- specs\web-calculator-specification.md

## Objective

Deliver a vertically complete Slice 1 that includes:

- Core calculator UI shell
- Numeric and operator input (+, -, \*, /, .)
- Evaluation via = (and Enter support if already available)
- Result display
- Automated tests for Slice 1 acceptance scenarios

Limit scope to Slice 1 behavior. Do not implement Slice 2+ features unless required to make Slice 1 functional.

## Requirements Mapping

Implement and verify these requirements:

- FR-001 Expression Input
- FR-002 Evaluation
- Slice 1 acceptance criteria:
  - 12+7 = 19
  - 9/3 = 3
  - 5.5\*2 = 11

## Implementation Instructions

1. Read the three source documents and summarize Slice 1 constraints before coding.
2. Inspect existing project structure and reuse current framework and tooling.
3. Implement UI and logic as a single vertical slice:
   - UI shell and display
   - Input action handling for numbers, decimal, and arithmetic operators
   - Evaluation action that computes and renders result
4. Use safe expression handling. Do not use eval or unsafe code execution.
5. Keep Slice 1 code isolated and testable.
6. Add or update unit tests for arithmetic evaluation and display behavior.
7. If e2e tests exist, add a minimal Slice 1 smoke path.
8. Run formatting/linting only if already configured in this repo.

## Verification Steps

Run the following checks and report pass/fail with evidence:

1. Automated tests

- Unit tests: {{test_command}}
- E2E tests (if configured): {{e2e_command}}

2. Slice 1 acceptance checks

- Enter 12+7 then evaluate, result must be 19
- Enter 9/3 then evaluate, result must be 3
- Enter 5.5\*2 then evaluate, result must be 11

3. Code safety check

- Confirm no unsafe expression evaluation patterns (for example, eval, Function constructor)

4. UX sanity check

- Display updates correctly after each input token
- Result remains visible after evaluation

## Stakeholder Showcase Instructions

Use this script to demonstrate Slice 1 in a review session:

1. Setup

- Start the app using the repo-standard dev command.
- Confirm calculator loads and display starts in a valid default state.

2. Live demo flow

- Scenario A: Type or click 12+7, evaluate, show 19.
- Scenario B: Type or click 9/3, evaluate, show 3.
- Scenario C: Type or click 5.5\*2, evaluate, show 11.

3. Explain value delivered

- Slice 1 provides a complete end-to-end arithmetic baseline.
- Users can perform day-to-day core calculations.
- Feature is backed by automated tests and ready for Slice 2 extension.

4. Evidence package

- Show test output summary for Slice 1.
- Show key files changed and where Slice 1 logic lives.
- Show acceptance criteria checklist with pass status.

## Output Format Required

Return results in this structure:

1. Files changed

- List each file and a one-line purpose.

2. Requirement coverage

- Map implemented behavior to FR-001 and FR-002.

3. Verification results

- Command run, status, and key output lines.

4. Showcase notes

- What was demonstrated and stakeholder-ready talking points.

5. Risks and next step

- Any known gap for Slice 1 and what to do next for Slice 2.
