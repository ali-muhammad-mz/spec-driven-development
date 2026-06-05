export type Post = {
  id: string;
  author: string;
  handle: string;
  time: string;
  body: string;
  likes: number;
  comments: number;
};

export type SuggestedProfile = {
  id: string;
  name: string;
  handle: string;
  reason: string;
  initials: string;
};

export type NotificationItem = {
  id: string;
  actor: string;
  message: string;
  time: string;
  type: string;
};

export type ChatPreview = {
  id: string;
  friend: string;
  message: string;
  time: string;
  unread: boolean;
  initials: string;
};

export const posts: Post[] = [
  {
    id: "post-1",
    author: "Maya Stone",
    handle: "@maya",
    time: "12 min",
    body: "Finished a tiny sketchbook challenge and somehow the last page became my favorite.",
    likes: 42,
    comments: 8
  },
  {
    id: "post-2",
    author: "Nolan Price",
    handle: "@nolan",
    time: "28 min",
    body: "Coffee, code, and a playlist that understands the assignment.",
    likes: 31,
    comments: 5
  },
  {
    id: "post-3",
    author: "Iris Chen",
    handle: "@iris",
    time: "41 min",
    body: "Shared a few garden photos today. The balcony tomatoes are officially dramatic.",
    likes: 64,
    comments: 12
  },
  {
    id: "post-4",
    author: "Owen Patel",
    handle: "@owen",
    time: "1 hr",
    body: "Trying a no-meetings afternoon and the focus feels almost suspicious.",
    likes: 18,
    comments: 3
  },
  {
    id: "post-5",
    author: "Lena Brooks",
    handle: "@lena",
    time: "2 hr",
    body: "New recipe test: lemon rice bowls with roasted chickpeas. Very repeatable.",
    likes: 77,
    comments: 16
  },
  {
    id: "post-6",
    author: "Sam Rivera",
    handle: "@sam",
    time: "2 hr",
    body: "The local book swap had three copies of the same mystery novel. A sign, probably.",
    likes: 25,
    comments: 6
  },
  {
    id: "post-7",
    author: "Ava Morgan",
    handle: "@ava",
    time: "3 hr",
    body: "Morning run done. Still pretending hills are character development.",
    likes: 53,
    comments: 9
  },
  {
    id: "post-8",
    author: "Theo Grant",
    handle: "@theo",
    time: "4 hr",
    body: "Found a calmer way to organize my notes. Future me owes present me a snack.",
    likes: 39,
    comments: 4
  },
  {
    id: "post-9",
    author: "June Ellis",
    handle: "@june",
    time: "5 hr",
    body: "Studio light was perfect today, so every plant got an accidental portrait.",
    likes: 88,
    comments: 14
  },
  {
    id: "post-10",
    author: "Kai Bennett",
    handle: "@kai",
    time: "6 hr",
    body: "Weekend plan: finish one thing, start nothing new, and see if that counts as wisdom.",
    likes: 46,
    comments: 7
  }
];

export const suggestedProfiles: SuggestedProfile[] = [
  {
    id: "profile-1",
    name: "Rae Carter",
    handle: "@rae",
    reason: "Shares your design circle",
    initials: "RC"
  },
  {
    id: "profile-2",
    name: "Miles Green",
    handle: "@miles",
    reason: "Also follows Maya Stone",
    initials: "MG"
  },
  {
    id: "profile-3",
    name: "Tessa Wright",
    handle: "@tessa",
    reason: "Active in local events",
    initials: "TW"
  }
];

export const notifications: NotificationItem[] = [
  { id: "notification-1", actor: "Maya Stone", message: "liked your latest update.", time: "5 min", type: "Like" },
  { id: "notification-2", actor: "Iris Chen", message: "commented on your garden photo.", time: "12 min", type: "Comment" },
  { id: "notification-3", actor: "Nolan Price", message: "sent you a friend request.", time: "25 min", type: "Request" },
  { id: "notification-4", actor: "Lena Brooks", message: "mentioned you in a recipe thread.", time: "48 min", type: "Mention" },
  { id: "notification-5", actor: "Sam Rivera", message: "shared your post with their friends.", time: "1 hr", type: "Share" },
  { id: "notification-6", actor: "Ava Morgan", message: "reacted to your morning note.", time: "2 hr", type: "Reaction" },
  { id: "notification-7", actor: "Theo Grant", message: "started following you.", time: "3 hr", type: "Follow" },
  { id: "notification-8", actor: "June Ellis", message: "invited you to a photo walk.", time: "4 hr", type: "Invite" },
  { id: "notification-9", actor: "Kai Bennett", message: "replied to your weekend plan.", time: "5 hr", type: "Reply" },
  { id: "notification-10", actor: "Rae Carter", message: "accepted your friend request.", time: "6 hr", type: "Accepted" }
];

export const chats: ChatPreview[] = [
  {
    id: "chat-1",
    friend: "Maya Stone",
    message: "That layout idea worked beautifully.",
    time: "Now",
    unread: true,
    initials: "MS"
  },
  {
    id: "chat-2",
    friend: "Nolan Price",
    message: "Sending the playlist in a second.",
    time: "14 min",
    unread: true,
    initials: "NP"
  },
  {
    id: "chat-3",
    friend: "Iris Chen",
    message: "The tomatoes survived the wind.",
    time: "1 hr",
    unread: false,
    initials: "IC"
  },
  {
    id: "chat-4",
    friend: "Lena Brooks",
    message: "I saved you the lemon bowl recipe.",
    time: "2 hr",
    unread: false,
    initials: "LB"
  },
  {
    id: "chat-5",
    friend: "Theo Grant",
    message: "Notes template is ready to try.",
    time: "Yesterday",
    unread: false,
    initials: "TG"
  }
];
