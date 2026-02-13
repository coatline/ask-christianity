import { PostPreview } from './PostPreview'
import acLogo from '/logo2.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
          <img src={acLogo} className="logo" alt="AskChristianity Logo" />
      </div>
      <h1>AskChristianity</h1>
      <div className="card">
        <p>
          Pursue Truth. Be Transformed.
        </p>
      </div>
      <PostPreview></PostPreview>
      <p className="read-the-docs">
        Subscribe
      </p>
    </>
  )
}

export default App
