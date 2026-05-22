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
name: "vitest-instructions"
description: "Guidance for Vitest in the web calculator"
applyTo: "**/*.{test,spec}.ts"
version: "1.0.0"
author: "johnmillerATcodemag-com"
tags: ["vitest", "testing", "unit-tests", "calculator-logic"]
owner: "Web Calculator Team"
reviewedDate: "2026-05-22"
nextReview: "2026-08-22"
---

# Vitest Instructions

## Overview

Use Vitest for fast unit tests around parsing, calculation, and error handling. Keep tests deterministic and behavior-focused.

## Rules

- Test pure calculator logic first.
- Use table-driven cases for arithmetic and edge conditions.
- Name tests after user-visible behavior, not implementation detail.
- Assert clear results for invalid expressions and division by zero.
- Keep unit tests independent from browser rendering.
- Add explicit tests for percentage behavior and malformed input recovery.
- Verify clear (`AC`) and backspace logic as first-class behaviors.

## Validation Checklist

- [ ] Arithmetic cases cover happy paths and edge cases
- [ ] Error cases assert explicit failures
- [ ] Tests do not rely on timing or network access
- [ ] Pure logic can run without DOM setup
- [ ] Percentage cases match documented examples (for example `200*10% -> 20`)
- [ ] Clear and backspace behavior is covered by tests

## Summary

Vitest should prove calculator behavior quickly, with focused tests that lock down arithmetic, error recovery, edit controls, and percentage logic.
