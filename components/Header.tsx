import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/" aria-label="Go to homepage">
        <span className={styles.brandMark} aria-hidden="true">
          SS
        </span>
        <span>Social Media Website</span>
      </Link>

      <nav className={styles.nav} aria-label="Primary navigation">
        <Link className={styles.navButton} href="/chats">
          Chat
        </Link>
        <Link className={styles.navButton} href="/notifications">
          Notifications
        </Link>
      </nav>
    </header>
  );
}
