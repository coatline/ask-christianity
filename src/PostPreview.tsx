import { Link } from 'react-router-dom';
import './PostPreview.css'

interface PostProps {
  id: string;
  title: string;
  preview: string;
  contentFile: string;
}

export default function PostPreview(props: PostProps) {
  return (
    <Link to={`/posts/${props.id}`}>
      <div className="post-container">
          <h2>{props.title}</h2>
          <p>{props.preview}</p>
      </div>
    </Link>
  )
}