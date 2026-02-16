import { Link } from 'react-router-dom';
import './PostPreview.css'

interface PostProps {
  id: string;
  date: string;
  title: string;
  preview: string;
  contentFile: string;
  isDraft: boolean;
  draftMode?: boolean;
}

export default function PostPreview(props: PostProps) {
  const url = `/posts/${props.draftMode && props.isDraft ? "drafts/" : ""}${props.id}`;
  
  return (
    <Link to={url}>
      <div className="post-preview">
        <h2>{props.title}</h2>
        {props.isDraft && <h3>*Draft*</h3>}
        <p className="date">{props.date}</p>
        {props.preview !== "" ? <p className="preview">{props.preview}</p> : null}
      </div>
    </Link>
  )
}
