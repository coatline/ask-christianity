import { PostPreview } from './PostPreview'
import posts from '../posts.json'

export function PostFeed() {
  return (
    <div className="post-container">
        {posts.map(post => (
        <PostPreview json={post} />
      ))}
    </div>
  )
}