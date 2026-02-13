import PostPreview from './PostPreview'
import posts from '../posts.json'

export function PostFeed() {
  return (
    <div className="post-container">
        {posts.map(post => (
        <PostPreview 
          key={post.id} 
          id={post.id} 
          title={post.title} 
          preview={post.preview} 
          contentFile={post.contentFile} 
        />
      ))}
    </div>
  )
}