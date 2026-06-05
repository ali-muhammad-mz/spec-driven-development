# Quickstart: Social Static Site

## Prerequisites

- Node.js 20 or newer
- npm

## Setup

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build Static Output

```bash
npm run build
```

The static export is written to `out/`.

## Run Browser Checks

```bash
npm run test:e2e
```

Expected results:
- Homepage shows a status box, 10 posts, and 3 suggested profiles.
- Notifications navigation opens `/notifications` and shows 10 notifications.
- Chat navigation opens `/chats` and shows 5 chat previews.
- Mobile viewport has no horizontal overflow.
- Header navigation is keyboard reachable.

## Manual Review

Confirm that all social content is mocked and embedded. The site must not require
a database, account, backend route, live feed, or external social media service.
