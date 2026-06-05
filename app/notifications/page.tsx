import { NotificationList } from "../../components/SocialLists";
import { notifications } from "../../data/mockData";

export default function NotificationsPage() {
  return (
    <main className="page-shell narrow" aria-labelledby="notifications-title">
      <section className="intro">
        <p className="eyebrow">Updates</p>
        <h1 id="notifications-title">Notifications</h1>
      </section>

      <NotificationList notifications={notifications} />
    </main>
  );
}
