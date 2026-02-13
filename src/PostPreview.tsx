interface PostProps {
  json: string;
}

export function PostPreview(props: PostProps) {
  return (
    <div className="post-container">
      <div className="card">
        <h2>{props.json.title}</h2>
        <p>{props.json.preview}</p>
      </div>
    </div>
  )
}