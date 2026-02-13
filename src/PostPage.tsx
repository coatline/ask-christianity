import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './PostPage.css'

export default function PostPage() {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/posts/${id}.md`)
      .then(res => res.text())
      .then(text => setContent(text));
  }, [id]);

  return (
      <article className="post-reader">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
  );
}