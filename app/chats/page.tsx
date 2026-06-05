import { ChatPreviewList } from "../../components/SocialLists";
import { chats } from "../../data/mockData";

export default function ChatsPage() {
  return (
    <main className="page-shell narrow" aria-labelledby="chats-title">
      <section className="intro">
        <p className="eyebrow">Messages</p>
        <h1 id="chats-title">Chats</h1>
      </section>

      <ChatPreviewList chats={chats} />
    </main>
  );
}
