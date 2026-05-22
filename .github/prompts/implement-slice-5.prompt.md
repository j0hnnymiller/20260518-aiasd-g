---
name: implement-slice-5
description: Implement Slice 5 of the web calculator (accessibility and responsive polish), then verify behavior and run a stakeholder showcase.
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
  accessibility_command:
    type: string
    description: Command to run accessibility checks if configured
    default: npm run test:e2e
tags:
  [
    "calculator",
    "vertical-slice",
    "slice-5",
    "implementation",
    "verification",
    "demo",
    "accessibility",
    "responsive",
    "wcag",
  ]
ai_generated: true
model: "openai/gpt-5.3-codex@unknown"
operator: "johnmillerATcodemag-com"
chat_id: "slice-5-implementation-prompt-20260522"
prompt: |
  Using slice 5 instructions and implementation plan, create a prompt file that implements the slice. Include verification steps and showcase instructions that demonstrate the functionality to stakeholders.
started: "2026-05-22T11:10:00Z"
ended: "2026-05-22T11:28:00Z"
task_durations:
  - task: "slice and plan synthesis"
    duration: "00:05:00"
  - task: "promptfile authoring"
    duration: "00:10:00"
  - task: "provenance and indexing updates"
    duration: "00:03:00"
total_duration: "00:18:00"
ai_log: "ai-logs/2026/05/22/slice-5-implementation-prompt-20260522/conversation.md"
source: "specs/web-calculator-vertical-slices.md, specs/web-calculator-implementation-plan.md, .github/instructions/stakeholder-showcase.instructions.md"
owner: "Web Calculator Team"
version: "1.0.0"
---

# Implement Slice 5: Accessibility And Responsive Polish

Implement Slice 5 end-to-end based on:

- specs/web-calculator-implementation-plan.md
- specs/web-calculator-vertical-slices.md
- .github/instructions/stakeholder-showcase.instructions.md

## Objective

Deliver a vertically complete Slice 5 that includes:

- Semantic and accessible calculator markup
- Keyboard reachability and visible focus behavior
- Mobile-first responsive layout that remains usable at 320px width
- Accessible names and announcement behavior for display/result state
- Automated and manual evidence that accessibility and responsive criteria are met

Limit scope to Slice 5 behavior. Do not implement Slice 6+ features unless required to make Slice 5 functional.

## Requirements Mapping

Implement and verify these requirements:

- NFR-001 Accessibility baseline
- NFR-002 Responsive behavior
- NFR-003 Usability and visual clarity
- Slice 5 acceptance criteria:
  - Controls are keyboard reachable
  - Layout works at 320px width
  - Buttons and display meet accessible naming and contrast needs

## Implementation Instructions

1. Read the implementation plan and vertical slice file, then summarize Slice 5 constraints before coding.
2. Inspect current UI structure and preserve existing framework and component boundaries.
3. Implement semantic structure and accessible naming:
   - Use meaningful regions/landmarks for calculator container and display area
   - Ensure every interactive control has an accessible name
   - Ensure result/display text is announced appropriately for assistive technologies
4. Implement keyboard and focus usability:
   - Verify full keyboard reachability for all calculator controls
   - Add clear, consistent focus-visible styles that meet contrast expectations
   - Avoid focus traps and preserve logical tab order
5. Implement responsive polish:
   - Ensure stable layout and touch targets at 320px width
   - Prevent display clipping/overlap for typical and long expressions
   - Preserve readability and usability at desktop widths
6. Add or update automated tests for keyboard reachability, accessible naming, and responsive baseline behavior.
7. If available, run accessibility auditing tooling and address actionable violations in Slice 5 scope.
8. Run formatting/linting only if already configured in this repo.

## Verification Steps

Run the following checks and report pass/fail with evidence:

1. Automated tests

- Unit tests: {{test_command}}
- E2E tests (if configured): {{e2e_command}}
- Accessibility checks (if configured): {{accessibility_command}}

2. Slice 5 acceptance checks

- Keyboard-only navigation reaches every control and enables full calculation flow
- At 320px viewport width, controls remain usable and display content remains readable
- Controls and display have accessible names that are exposed to assistive technology
- Focus indicators are clearly visible for keyboard navigation states
- Key color pairings and focus treatments satisfy WCAG AA contrast expectations

3. Architecture and semantics check

- Confirm semantic structure is present (landmarks/regions and meaningful control labeling)
- Confirm result announcement behavior is intentionally implemented and testable
- Confirm responsive behavior is controlled by existing styling system without ad hoc overrides

4. Evidence capture checklist

- Capture test output summary for Slice 5 checks
- Capture at least one 320px screenshot and one desktop screenshot
- Capture one keyboard-only interaction walkthrough note
- Capture one accessibility inspection result summary (tool output or manual checklist)

## Stakeholder Showcase Instructions

Use this script to demonstrate Slice 5 in a review session:

1. Context setup

- Business objective: improve usability, inclusion, and release readiness across devices.
- Target users: keyboard-only users, screen-reader users, and mobile users.
- Scope: Slice 5 accessibility and responsive polish only.

2. Feature narrative (problem, capability, outcome)

- Problem: calculator usability can degrade on small screens and for assistive-tech users.
- Capability delivered: semantic labeling, keyboard reachability, visible focus, and 320px-verified layout.
- Outcome: broader reach and lower usability risk at MVP release gate.

3. Live evidence walkthrough

- Scenario A (Keyboard reachability): complete a calculation using keyboard only.
- Scenario B (Accessible naming): inspect key controls/display with accessibility tree or equivalent tooling.
- Scenario C (Responsive behavior): switch to 320px viewport and run one calculation.
- Scenario D (Focus and contrast): tab through controls and call out visible focus and contrast-safe states.

4. Quality evidence

- Show unit/e2e/accessibility check summaries.
- Show acceptance criteria checklist with explicit pass status.
- Call out any known limitations, risk level, and mitigation plan.

5. Decision gate

- Request go/no-go (or conditional go) for Slice 5 exit.
- Record stakeholder decisions, owners, and follow-up action items.

## Output Format Required

Return results in this structure:

1. Files changed

- List each file and a one-line purpose.

2. Requirement coverage

- Map implemented behavior to NFR-001, NFR-002, and NFR-003.

3. Verification results

- Command run, status, and key output lines.

4. Showcase notes

- What was demonstrated, stakeholder decision, and action items.

5. Risks and next step

- Any known Slice 5 gaps and the recommended handoff path.
