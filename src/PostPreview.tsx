import { Link } from 'react-router-dom';

interface PostProps {
  id: string;
  title: string;
  preview: string;
  contentFile: string;
}

export default function PostPreview(props: PostProps) {
  return (
    <Link to={`/post/${props.id}`} className="post-link">
      <div className="post-container">
        <div className="card">
          <h2>{props.title}</h2>
          <p>{props.preview}</p>
        </div>
      </div>
    </Link>
  )
}