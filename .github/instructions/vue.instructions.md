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
name: "vue-instructions"
description: "Guidance for Vue in the web calculator"
applyTo: "**/*.vue"
version: "1.0.0"
author: "johnmillerATcodemag-com"
tags: ["vue", "component-design", "ui", "composition-api"]
owner: "Web Calculator Team"
reviewedDate: "2026-05-22"
nextReview: "2026-08-22"
---

# Vue Instructions

## Overview

Use Vue to keep the calculator UI small, reactive, and easy to maintain. Prefer a single focused component tree over global state.

## Rules

- Prefer Vue 3 with `<script setup lang="ts">`.
- Keep calculator state local unless a shared store is clearly needed.
- Use computed values for derived display state.
- Keep templates declarative and event handlers minimal.
- Pass only the props and emits needed for reuse.
- Use a single source of truth for expression, result, and error state.
- Route both keyboard and button interactions through shared action handlers.

## Validation Checklist

- [ ] Components are small and single-purpose
- [ ] Display state is derived, not duplicated
- [ ] Keyboard and button input behave the same
- [ ] No unnecessary global store is introduced
- [ ] Error transitions and recovery are predictable
- [ ] Percentage flow matches the documented behavior model

## Summary

Vue should stay lightweight and local to the calculator UI, with clear state transitions and shared input behavior.
