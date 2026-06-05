# UI Contract: Social Static Site

This feature exposes user-facing routes only. There are no API contracts.

## Route: `/`

- Displays the persistent header.
- Header includes `Chat` and `Notifications` navigation controls.
- Displays one visible post status box.
- Displays exactly 10 mocked posts.
- Displays a section headed `people you may add`.
- Displays exactly 3 mocked suggested profiles.

## Route: `/notifications`

- Displays the persistent header.
- Header includes `Chat` and `Notifications` navigation controls.
- Displays exactly 10 mocked notifications.

## Route: `/chats`

- Displays the persistent header.
- Header includes `Chat` and `Notifications` navigation controls.
- Displays exactly 5 mocked friend chat previews.

## Accessibility Contract

- Header navigation controls are keyboard reachable.
- Pages use semantic landmarks for header, main content, sections, lists, and list items.
- Meaningful avatar-like visuals include text initials or labels.
- Mobile layout remains readable without horizontal scrolling.
