import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Subscribe from "./SubscribeForm";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <NavigationBar></NavigationBar>

      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </div>

      <footer>
        <Subscribe></Subscribe>
      </footer>
    </div>
  );
}
