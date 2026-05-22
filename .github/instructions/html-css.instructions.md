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
name: "html-css-instructions"
description: "Guidance for HTML and CSS in the web calculator"
applyTo: "**/*.{html,css}"
version: "1.0.0"
author: "johnmillerATcodemag-com"
tags: ["html", "css", "accessibility", "responsive-design"]
owner: "Web Calculator Team"
reviewedDate: "2026-05-22"
nextReview: "2026-08-22"
---

# HTML and CSS Instructions

## Overview

Use semantic HTML for structure and CSS for presentation only. Keep the calculator accessible, responsive, and simple to restyle.

## Rules

- Use semantic elements such as `button`, `main`, `section`, `output`, and `label`.
- Keep the calculator readout in a dedicated `output` region and make errors visually distinct from normal results.
- Keep the readout accessible with an `aria-live` strategy suitable for result and error updates.
- Keep controls keyboard reachable and visible on focus.
- Ensure tap targets are at least 44x44 CSS pixels for mobile usability.
- Use mobile-first CSS with flexible layouts and readable spacing.
- Avoid inline styles and hard-coded pixel-only layouts when fluid sizing is better.
- Use CSS variables for colors, spacing, and radii.
- Define explicit visual states for default, hover, focus-visible, active, and disabled buttons.
- Keep layout stable while values grow; prevent overflow clipping in the display.

## Validation Checklist

- [ ] Buttons have clear labels and focus styles
- [ ] Layout works at 320px width without horizontal scrolling
- [ ] Contrast meets WCAG AA for text and controls
- [ ] No interactive control depends on hover only
- [ ] Display and error states are visually distinct and readable
- [ ] Button targets are usable on touch devices
- [ ] Long expressions or results do not break layout
- [ ] Result and error announcements are accessible to assistive technology

## Summary

Favor semantic markup, accessible feedback, and responsive CSS that supports a small static calculator UI.
