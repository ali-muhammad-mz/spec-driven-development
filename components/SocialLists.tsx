import type {
  ChatPreview,
  NotificationItem,
  Post,
  SuggestedProfile
} from "../data/mockData";
import styles from "./SocialLists.module.css";

export function StatusBox() {
  return (
    <section className={styles.statusBox} aria-labelledby="status-title">
      <div>
        <h2 id="status-title">Post status</h2>
        <p>Share a thought with your circle.</p>
      </div>
      <label className={styles.statusLabel} htmlFor="status-draft">
        Status draft
      </label>
      <textarea
        id="status-draft"
        aria-describedby="status-help"
        placeholder="What are you thinking about?"
        rows={3}
      />
      <p id="status-help" className={styles.helpText}>
        Demo only. New posts are not submitted or saved.
      </p>
    </section>
  );
}

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <section className={styles.stack} aria-labelledby="feed-title">
      <h2 id="feed-title">Latest posts</h2>
      <ul className={styles.list} data-testid="post-list">
        {posts.map((post) => (
          <li className={styles.card} data-testid="post-card" key={post.id}>
            <article>
              <div className={styles.cardHeader}>
                <div>
                  <h3>{post.author}</h3>
                  <p>
                    {post.handle} · {post.time}
                  </p>
                </div>
              </div>
              <p className={styles.bodyText}>{post.body}</p>
              <footer className={styles.metrics}>
                <span>{post.likes} likes</span>
                <span>{post.comments} comments</span>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SuggestedProfiles({
  profiles
}: {
  profiles: SuggestedProfile[];
}) {
  return (
    <section className={styles.sidebarPanel} aria-labelledby="people-title">
      <h2 id="people-title">people you may add</h2>
      <ul className={styles.list} data-testid="profile-list">
        {profiles.map((profile) => (
          <li className={styles.profileCard} data-testid="profile-card" key={profile.id}>
            <span className={styles.avatar} aria-label={`${profile.name} avatar`}>
              {profile.initials}
            </span>
            <div>
              <h3>{profile.name}</h3>
              <p>{profile.reason}</p>
              <button type="button">Add friend</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function NotificationList({
  notifications
}: {
  notifications: NotificationItem[];
}) {
  return (
    <section className={styles.stack} aria-labelledby="notification-list-title">
      <h2 id="notification-list-title">Recent activity</h2>
      <ul className={styles.list} data-testid="notification-list">
        {notifications.map((notification) => (
          <li
            className={styles.card}
            data-testid="notification-card"
            key={notification.id}
          >
            <article>
              <div className={styles.cardHeader}>
                <div>
                  <h3>{notification.actor}</h3>
                  <p>
                    {notification.type} · {notification.time}
                  </p>
                </div>
              </div>
              <p className={styles.bodyText}>{notification.message}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ChatPreviewList({ chats }: { chats: ChatPreview[] }) {
  return (
    <section className={styles.stack} aria-labelledby="chat-list-title">
      <h2 id="chat-list-title">Friend chats</h2>
      <ul className={styles.list} data-testid="chat-list">
        {chats.map((chat) => (
          <li className={styles.profileCard} data-testid="chat-card" key={chat.id}>
            <span className={styles.avatar} aria-label={`${chat.friend} avatar`}>
              {chat.initials}
            </span>
            <div className={styles.chatContent}>
              <h3>{chat.friend}</h3>
              <p>{chat.message}</p>
              <span>
                {chat.time}
                {chat.unread ? " · unread" : ""}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
