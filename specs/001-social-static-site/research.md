# Research: Social Static Site

## Decision: Next.js Static Export

Use Next.js App Router with static export for the social media demo.

**Rationale**: It satisfies the static-output constitution requirement while
allowing route-based pages for the homepage, notifications, and chats.

**Alternatives considered**: Plain HTML/CSS/JS was simpler but less aligned with
the requested Next.js project direction. A server-rendered Next.js deployment was
rejected because no runtime server is needed.

## Decision: TypeScript App Router

Use TypeScript with the App Router.

**Rationale**: Typed mock data makes the required counts and display shapes
clear, while App Router is the modern Next.js routing model.

**Alternatives considered**: JavaScript App Router was lighter but gives less
structure for mock entities. Pages Router was rejected because there is no need
for legacy routing.

## Decision: CSS Modules

Use CSS Modules for component styles plus a small global stylesheet for document
defaults.

**Rationale**: This keeps dependencies light and scopes styles for reusable UI
components.

**Alternatives considered**: Tailwind CSS adds configuration and dependency
weight. Global-only CSS is simpler but more fragile as components grow.

## Decision: Embedded Mock Data

Store posts, suggested profiles, notifications, and chats in a local TypeScript
module.

**Rationale**: The feature explicitly requires mocked data and no real feed.
Embedded data keeps the app static and repeatable.

**Alternatives considered**: JSON fetches or external APIs were rejected because
they add unnecessary runtime dependencies and failure modes.

## Decision: Playwright Verification

Use Playwright to verify route navigation, required content counts, keyboard
navigation, and mobile viewport behavior.

**Rationale**: The most important behavior is visible in the browser, not in
isolated logic.

**Alternatives considered**: Build-only validation would miss route and layout
regressions. Unit tests alone would not prove navigation and mobile behavior.
