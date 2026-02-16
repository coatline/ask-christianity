import PostPreview from "./PostPreview";
import posts from "../posts.json";
import "./PostFeed.css";

export function PostFeed() {
  const draftMode = false;

  return (
    <div className="post-container">
      {posts.map((post) => (
        (post.draft !== 'true' || draftMode) && <PostPreview
          id={post.id}
          key={post.id}
          date={post.date}
          title={post.title}
          preview={post.preview}
          contentFile={post.contentFile}
          isDraft={post.draft === 'true'}
          draftMode={draftMode}
        />
      ), draftMode)}
    </div>
  );
}
