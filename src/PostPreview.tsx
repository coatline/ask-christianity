import { Link } from 'react-router-dom';
import './PostPreview.css'

interface PostProps {
  id: string;
  date: string;
  title: string;
  preview: string;
  contentFile: string;
}

export default function PostPreview(props: PostProps) {
  return (
    <Link to={`/posts/${props.id}`}>
      <div className="post-preview">
          <h2>{props.title}</h2>
          <p>{props.date}</p>
          <p>{props.preview}</p>
      </div>
    </Link>
  )
}