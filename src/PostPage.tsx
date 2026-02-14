import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "../posts.json";
import "./PostPage.css";

export default function PostPage() {
  const { id } = useParams();
  const [content, setContent] = useState("");

  const postData = posts.find((p) => p.id === id);

  useEffect(() => {
    if (postData) {
      fetch(`/posts/${postData.contentFile}`)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [id, postData]);

  if (!postData) {
    return <h1>Post Not Found!</h1>;
  }

  return (
    <div>
      <h1>{postData.title}</h1>
      <time>{postData.date}</time>
      <article className="post-reader">
        <div className="post-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
