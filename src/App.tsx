import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Subscribe from "./SubscribeForm";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import "./App.css";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  return (
    <div className="app-container">
      <NavigationBar></NavigationBar>

      <div className="content">
        <ScrollToTop></ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/posts/drafts/:id" element={<PostPage />} />
          </Routes>
      </div>

      <footer>
        <Subscribe></Subscribe>
      </footer>

    </div>
  );
}
