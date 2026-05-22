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
name: "typescript-instructions"
description: "Guidance for TypeScript in the web calculator"
applyTo: "**/*.ts"
version: "1.0.0"
author: "johnmillerATcodemag-com"
tags: ["typescript", "types", "logic", "safety"]
owner: "Web Calculator Team"
reviewedDate: "2026-05-22"
nextReview: "2026-08-22"
---

# TypeScript Instructions

## Overview

Use TypeScript for calculator logic, DOM wiring, and shared types. Keep calculation code pure and avoid dynamic evaluation.

## Rules

- Enable strict typing and keep `any` out of calculator code.
- Keep parsing and evaluation in pure functions that are easy to test.
- Never use `eval` or `Function` for expression handling.
- Separate DOM event code from calculation logic.
- Model invalid states explicitly with `null`, unions, or result objects.
- Define and document one percentage behavior contract, then enforce it consistently.
- Keep keyboard-to-action mapping centralized so button and keyboard flows stay equivalent.
- Do not call `preventDefault()` for modified key chords (`Ctrl`, `Meta`, `Alt`); preserve browser and OS shortcuts.
- Normalize incomplete numeric tokens before evaluation (for example trailing `.`) so append flows cannot create guaranteed-invalid expressions.
- Avoid redundant branches and dead-condition checks; if a conditional returns identical branches, simplify it.

## Validation Checklist

- [ ] `tsc` passes with strict settings
- [ ] Core calculator logic is testable without the DOM
- [ ] No unsafe runtime code evaluation is used
- [ ] Error states are represented explicitly
- [ ] Percentage behavior is implemented and documented consistently
- [ ] Keyboard and button inputs use the same command path
- [ ] Keyboard handling preserves browser shortcuts when modifier keys are pressed
- [ ] Trailing-decimal and similar partial-token states are normalized before operator append/evaluation
- [ ] Conditionals were reviewed for redundant branches or no-op logic

## Summary

TypeScript should keep the calculator predictable, typed, and safe while preserving consistent user behavior across input methods.
