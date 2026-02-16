import { Link } from 'react-router-dom';
import { PostFeed } from "./PostFeed";
import acLogo from "/logo2.svg";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-container">
      <img src={acLogo} className="logo" alt="AskChristianity Logo" />
      <h1>AskChristianity</h1>
      <div className="mission-statement">
        <Link to={`/posts/mission-statement`}>
          <h3>Pursue Truth. Be Transformed.</h3>
        </Link>
      </div>
      <PostFeed></PostFeed>
    </div>
  );
}
