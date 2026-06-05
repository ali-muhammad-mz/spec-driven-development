import {
  PostList,
  StatusBox,
  SuggestedProfiles
} from "../components/SocialLists";
import { posts, suggestedProfiles } from "../data/mockData";

export default function HomePage() {
  return (
    <main className="page-shell" aria-labelledby="home-title">
      <section className="intro">
        <p className="eyebrow">Static social demo</p>
        <h1 id="home-title">Your community feed</h1>
      </section>

      <div className="home-grid">
        <section aria-label="Homepage feed">
          <StatusBox />
          <PostList posts={posts} />
        </section>

        <aside aria-labelledby="people-title">
          <SuggestedProfiles profiles={suggestedProfiles} />
        </aside>
      </div>
    </main>
  );
}
