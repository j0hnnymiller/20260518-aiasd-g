---
ai_generated: true
model: "openai/gpt-5.4-mini@2026-05-22"
operator: "johnmillerATcodemag-com"
chat_id: "web-calculator-tech-instructions-20260522"
prompt: |
  using #file:web-calculator-specification.md create instruction files for each
started: "2026-05-22T00:20:00Z"
ended: "2026-05-22T00:35:00Z"
task_durations:
  - task: "technology scoping"
    duration: "00:03:00"
  - task: "instruction drafting"
    duration: "00:09:00"
  - task: "provenance and README updates"
    duration: "00:03:00"
total_duration: "00:15:00"
ai_log: "ai-logs/2026/05/22/web-calculator-tech-instructions-20260522/conversation.md"
source: "specs/web-calculator-specification.md"
name: "playwright-instructions"
description: "Guidance for Playwright in the web calculator"
applyTo: "**/*playwright*.ts"
version: "1.0.0"
author: "johnmillerATcodemag-com"
tags: ["playwright", "e2e", "browser-tests", "accessibility"]
owner: "Web Calculator Team"
reviewedDate: "2026-05-22"
nextReview: "2026-08-22"
---

# Playwright Instructions

## Overview

Use Playwright for end-to-end flows that exercise the calculator in real browser conditions, including keyboard usage and responsive layouts.

## Rules

- Cover the main user flows: input, evaluate, clear, and recover from error.
- Use stable selectors such as `data-testid` when possible.
- Verify visible output instead of implementation details.
- Include at least one mobile viewport check for the calculator layout.
- Avoid arbitrary sleeps; wait on observable UI state.
- Include acceptance scenarios for `12+7`, `9/3`, and `10/0`.
- Include at least one keyboard-only scenario using `Enter`, `Backspace`, and `Esc`.

## Validation Checklist

- [ ] Keyboard and mouse entry produce the same result
- [ ] Mobile viewport remains usable
- [ ] Error states are visible and recoverable
- [ ] Selectors are stable and readable
- [ ] Core arithmetic flows pass end to end
- [ ] Clear and backspace interactions pass end to end

## Summary

Playwright should confirm the calculator works end to end in a browser for arithmetic, editing, keyboard usage, and error recovery.
