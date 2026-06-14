# Spec-Driven Social Static Site

This repository showcases a small social media static website built through a
spec-driven development workflow. The goal was not only to build the app, but to
keep a visible trail from product intent to specification, implementation plan,
task breakdown, and verification.

## What Was Built

- A static Next.js social media demo
- Homepage with a post status box, 10 mocked posts, and 3 suggested profiles
- Notifications page with 10 mocked notifications
- Chats page with 5 mocked friend chat previews
- Responsive layout for desktop and mobile phones
- Keyboard-accessible header navigation
- Fully mocked embedded data with no database, backend, auth, or real feed

## How Spec-Driven Development Was Used

The project was developed through Spec Kit style artifacts before and alongside
implementation:

1. **Constitution** defined project rules for a static web app:
   - static output first
   - user-visible scope
   - accessibility baseline
   - lightweight dependencies
   - verification before delivery

2. **Specification** captured the user-facing behavior:
   - prioritized user stories
   - acceptance scenarios
   - functional requirements
   - success criteria
   - assumptions and scope boundaries

3. **Plan** translated the specification into a technical approach:
   - Next.js App Router
   - TypeScript
   - CSS Modules
   - static export
   - embedded mock data
   - Playwright verification

4. **Research and Design Artifacts** documented decisions:
   - why static Next.js export was selected
   - why data is embedded
   - the mock data model
   - route-level UI contracts
   - quickstart validation flow

5. **Tasks** recorded the implemented work by user story:
   - setup and shared foundation
   - homepage feed
   - notifications page
   - chats page
   - responsive and accessibility verification

## Spec Artifacts

The complete spec-driven trail lives in:

```text
specs/001-social-static-site/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── tasks.md
├── contracts/
│   └── ui-contract.md
└── checklists/
    └── requirements.md
```

The project constitution lives in:

```text
.specify/memory/constitution.md
```

## Application Structure

```text
app/
├── page.tsx
├── layout.tsx
├── globals.css
├── chats/
│   └── page.tsx
└── notifications/
    └── page.tsx

components/
├── Header.tsx
├── Header.module.css
├── SocialLists.tsx
└── SocialLists.module.css

data/
└── mockData.ts

tests/
└── social-site.spec.ts
```

## Tech Stack

- Next.js with App Router
- TypeScript
- CSS Modules
- Static export
- Playwright for browser verification

## Running The Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

The static export is generated in:

```text
out/
```

Run end-to-end checks:

```bash
npm run test:e2e
```

## Verification Coverage

The Playwright suite checks that:

- the homepage shows the status box
- the homepage renders exactly 10 posts
- the homepage renders exactly 3 suggested profiles
- the notifications page renders exactly 10 notifications
- the chats page renders exactly 5 chat previews
- header navigation works for chat and notifications
- keyboard navigation can activate the header controls
- the mobile viewport has no horizontal overflow

## Why This Repository Matters

This project is intentionally small, but it demonstrates the discipline of
spec-driven development: product requirements are written first, technical
decisions are documented, tasks are traceable to user stories, and verification
is part of the work rather than an afterthought.
