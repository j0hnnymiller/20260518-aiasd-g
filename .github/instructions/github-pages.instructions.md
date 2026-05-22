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
name: "github-pages-instructions"
description: "Guidance for GitHub Pages hosting of the web calculator"
applyTo: "**/*"
version: "1.0.0"
author: "johnmillerATcodemag-com"
tags: ["github-pages", "static-hosting", "deployment", "frontend"]
owner: "Web Calculator Team"
reviewedDate: "2026-05-22"
nextReview: "2026-08-22"
---

# GitHub Pages Instructions

## Overview

Use GitHub Pages only for static hosting of the calculator. Keep the deployable output free of server dependencies and aligned with the published base path.

## Rules

- Publish only static build output.
- Use relative asset paths or set the correct base path for the Pages URL.
- Verify refresh behavior and any client-side routing fallback.
- Keep deployment steps reproducible from source.
- Do not rely on server-only features or runtime secrets.
- Keep the calculator as a single static client app with no required backend runtime.
- Ensure build and deploy outputs are deterministic for repeatable releases.

## Validation Checklist

- [ ] Build output loads from the Pages URL
- [ ] CSS, JS, and asset paths resolve correctly
- [ ] Refresh does not break the app
- [ ] Deployment uses only static artifacts
- [ ] No server runtime, API secret, or backend dependency is required
- [ ] Release process is repeatable from repository source

## Summary

GitHub Pages should serve the calculator as a simple static site with predictable paths, no backend dependency, and repeatable deployment.
