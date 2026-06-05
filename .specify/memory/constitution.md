<!--
Sync Impact Report
Version change: none -> 1.0.0
Modified principles: template placeholders -> Static Web App Minimum
Added sections: Static Web App Constraints; Development Workflow
Removed sections: none
Templates requiring updates:
- updated: .specify/templates/plan-template.md
- updated: .specify/templates/tasks-template.md
- reviewed: .specify/templates/spec-template.md
- not present: .specify/templates/commands/*.md
Follow-up TODOs: none
-->

# First Project Constitution

## Core Principles

### I. Static Output First
The application MUST be deliverable as static files: HTML, CSS, JavaScript, and
assets. Runtime server logic, databases, and authenticated backends are out of
scope unless a future amendment explicitly permits them.

Rationale: static delivery keeps the project simple, portable, and cheap to run.

### II. User-Visible Scope
Every feature MUST be expressed as an independently testable user scenario with
clear acceptance criteria. Work that does not improve a user-visible outcome
MUST be deferred unless it is required for build, deployment, or accessibility.

Rationale: the app should grow by small, demonstrable slices.

### III. Accessibility Baseline
Pages and controls MUST use semantic markup, keyboard-accessible interactions,
readable contrast, and descriptive text alternatives for meaningful media.

Rationale: static apps still need to be usable by people with different devices
and access needs.

## Static Web App Constraints

The default project structure is a single static web app. Source files SHOULD
live under `src/` when a build step exists, and deployable files SHOULD live
under `public/` or `dist/` according to the chosen tool. If no build tool is
needed, repository-root HTML/CSS/JS files are acceptable.

External services MAY be linked from the frontend, but features MUST still define
the user impact, failure behavior, and any required configuration. Secrets MUST
NOT be embedded in static files.

## Development Workflow

Specifications MUST list prioritized user stories, measurable success criteria,
and assumptions. Plans MUST document the selected static app structure,
dependencies, target browsers or platforms, and the verification approach.
Tasks MUST be grouped by user story and include any setup, accessibility,
responsive layout, asset, and verification work required to complete the story.

## Governance

This constitution governs feature specifications, plans, tasks, and
implementation decisions for this project. Amendments MUST update this file,
include a Sync Impact Report, and review dependent Spec Kit templates for
alignment.

Versioning follows semantic versioning:
- MAJOR for removing or redefining a principle in a way that changes prior
  obligations.
- MINOR for adding a principle, section, or material new requirement.
- PATCH for clarifications that do not change obligations.

Compliance MUST be checked during planning and before delivery. Any exception
MUST be documented in the plan's Complexity Tracking section with the reason and
the simpler alternative that was rejected.

**Version**: 1.0.0 | **Ratified**: 2026-06-05 | **Last Amended**: 2026-06-05
