import PostPreview from "./PostPreview";
import posts from "../posts.json";
import "./PostFeed.css";

export function PostFeed() {
  return (
    <div className="post-container">
      {posts.map((post) => (
        <PostPreview
          id={post.id}
          key={post.id}
          date={post.date}
          title={post.title}
          preview={post.preview}
          contentFile={post.contentFile}
        />
      ))}
    </div>
  );
}
