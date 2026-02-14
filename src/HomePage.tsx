import { PostFeed } from "./PostFeed";
import acLogo from "/logo2.svg";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-container">
      <img src={acLogo} className="logo" alt="AskChristianity Logo" />
      <h1>AskChristianity</h1>
      <div className="mission-statement">
        <p>Pursue Truth. Be Transformed.</p>
      </div>
      <PostFeed></PostFeed>
    </div>
  );
}
