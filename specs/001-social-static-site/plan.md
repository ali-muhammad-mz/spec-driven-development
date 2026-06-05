# Implementation Plan: Social Static Site

**Branch**: `001-social-static-site` | **Date**: 2026-06-05 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-social-static-site/spec.md`

## Summary

Build a static social media demo with Next.js App Router, TypeScript, CSS Modules,
and embedded mock data. The app ships as static files and provides a homepage,
notifications page, and chats page with the exact mocked content counts required
by the specification.

## Technical Context

**Language/Version**: TypeScript with Next.js App Router

**Primary Dependencies**: Next.js, React, CSS Modules, Playwright

**Storage**: N/A - all posts, profiles, notifications, and chats are embedded mock data

**Testing**: Next.js production build and Playwright browser checks

**Target Platform**: Static web output for modern desktop and mobile browsers

**Project Type**: Static web app

**Performance Goals**: Pages should render immediately from static output and remain readable on mobile phones

**Constraints**: No database, no backend routes, no authentication, no live feed, no external social media service

**Scale/Scope**: Three routes with fixed mock data: 10 posts, 3 suggested profiles, 10 notifications, 5 chats

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Static output: Pass. Next.js is configured for static export and uses no runtime server requirements.
- User-visible scope: Pass. Work maps to homepage feed, notifications navigation, and chats navigation.
- Accessibility baseline: Pass. Plan includes semantic landmarks, keyboard navigation, readable contrast, and text alternatives.
- Lightweight dependencies: Pass. Dependencies are limited to Next.js/React/TypeScript plus Playwright for verification.
- Verification: Pass. Build and Playwright checks verify content counts, routes, keyboard navigation, and mobile layout.

## Project Structure

### Documentation (this feature)

```text
specs/001-social-static-site/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-contract.md
├── tasks.md
└── checklists/
    └── requirements.md
```

### Source Code (repository root)

```text
app/
├── chats/
│   └── page.tsx
├── notifications/
│   └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── Header.module.css
├── Header.tsx
├── SocialLists.module.css
└── SocialLists.tsx

data/
└── mockData.ts

tests/
└── social-site.spec.ts
```

**Structure Decision**: Use a single static Next.js app at the repository root.
The App Router provides the three required pages, CSS Modules scope component
styles, and the `data/` module owns fixed mock content.

## Complexity Tracking

No constitution violations.
