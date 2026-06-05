# Data Model: Social Static Site

All entities are mock-only and embedded in the static app. No entity is persisted,
fetched from a backend, or synchronized with an external service.

## Post

- **Fields**: `id`, `author`, `handle`, `time`, `body`, `likes`, `comments`
- **Rules**: Exactly 10 posts are displayed on the homepage.
- **Relationships**: None.

## SuggestedProfile

- **Fields**: `id`, `name`, `handle`, `reason`, `initials`
- **Rules**: Exactly 3 profiles are displayed under the heading
  "people you may add".
- **Relationships**: None.

## Notification

- **Fields**: `id`, `actor`, `message`, `time`, `type`
- **Rules**: Exactly 10 notifications are displayed on the notifications page.
- **Relationships**: None.

## ChatPreview

- **Fields**: `id`, `friend`, `message`, `time`, `unread`, `initials`
- **Rules**: Exactly 5 friend chat previews are displayed on the chats page.
- **Relationships**: None.

## State Transitions

There are no persisted state transitions in this feature. Status posting,
adding friends, and opening individual conversations are visual-only or out of
scope.
