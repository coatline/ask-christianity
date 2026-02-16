import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "../posts.json";
import acLogo from "/logo2.svg";
import "./PostPage.css";

export default function PostPage() {
  const { id } = useParams();
  const [content, setContent] = useState("");

  const postData = posts.find((p) => p.id === id);

  useEffect(() => {
    if (postData) {
      const url = `/posts/${postData.draft ? "drafts/" : ""}${postData.contentFile}`;
      console.log(url);
      fetch(url)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [id, postData]);

  if (!postData) {
    return <h1>Post Not Found!</h1>;
  }

  return (
    <div className="post-container">
      <div>
        <div className="post-header">
          <img src={acLogo} className="logo" alt="AskChristianity Logo" />
          <h1>{postData.title}</h1>
          <time>{postData.date}</time>
        </div>
      </div>
      <article className="post-reader">
        <div className="post-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
