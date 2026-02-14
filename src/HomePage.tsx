import acLogo from '/logo2.svg'
import { PostFeed } from './PostFeed'

export default function HomePage() {
  return (
    <>
      <div>
          <img src={acLogo} className="logo" alt="AskChristianity Logo"/>
      </div>
      <h1>AskChristianity</h1>
      <div className="mission-statement">
        <p>
          Pursue Truth. Be Transformed.
        </p>
      </div>
      <PostFeed></PostFeed>
      <p className="subscribe">
        Subscribe
      </p>
    </>
  )
}