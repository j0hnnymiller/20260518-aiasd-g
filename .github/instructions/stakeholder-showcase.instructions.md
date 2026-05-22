---
ai_generated: true
model: "openai/gpt-5.3-codex@unknown"
operator: "johnmillerATcodemag-com"
chat_id: "stakeholder-showcase-instructions-20260522"
prompt: |
  create an instruction file for showcasing features to stakeholders
started: "2026-05-22T01:30:00Z"
ended: "2026-05-22T01:40:00Z"
task_durations:
  - task: "showcase requirements framing"
    duration: "00:03:00"
  - task: "instruction drafting"
    duration: "00:05:00"
  - task: "provenance and indexing updates"
    duration: "00:02:00"
total_duration: "00:10:00"
ai_log: "ai-logs/2026/05/22/stakeholder-showcase-instructions-20260522/conversation.md"
source: "GitHub Copilot Chat"
name: "stakeholder-feature-showcase-instructions"
description: "Guidance for preparing and running stakeholder-facing feature showcases"
applyTo: "**/{slides,specs,docs,requirements,features}/**/*.{md,txt}"
version: "1.0.0"
author: "johnmillerATcodemag-com"
tags: ["stakeholders", "demo", "feature-showcase", "communication"]
owner: "Product Team"
reviewedDate: "2026-05-22"
nextReview: "2026-08-22"
---

# Stakeholder Feature Showcase Instructions

## Overview

Use this guidance to prepare concise, outcome-focused feature showcases for stakeholders. Prioritize business value, user impact, and release confidence over implementation detail.

## Rules

- Start every showcase with the business objective, target user, and success metric.
- Demonstrate only release-ready capabilities unless explicitly labeled as exploratory.
- Structure the walkthrough as problem, capability, evidence, and decision request.
- Use realistic scenarios and production-like data where allowed.
- Call out assumptions, dependencies, and known limitations clearly.
- Tie each showcased feature to its acceptance criteria and current delivery status.
- Include risk level and mitigation for any item not fully complete.
- Capture stakeholder decisions, action items, and owners before closing.

## Showcase Flow

1. Context setup: objective, audience, and scope for this session.
2. Feature narrative: user problem and expected business outcome.
3. Live evidence: walkthrough of behavior and acceptance criteria coverage.
4. Quality evidence: tests, accessibility checks, and performance indicators.
5. Decision gate: go, no-go, or conditional go with explicit follow-ups.

## Validation Checklist

- [ ] Agenda and business outcomes are shared in advance
- [ ] Demo script maps each feature to acceptance criteria
- [ ] All non-final behavior is clearly labeled
- [ ] Risks and mitigations are explicitly documented
- [ ] Stakeholder feedback is captured as actionable items with owners
- [ ] Final decision and next milestone are recorded

## Summary

Run showcases as decision forums, not feature tours: prove value, verify quality, and exit with clear commitments.
