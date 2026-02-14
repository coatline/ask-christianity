import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import HomePage from "./HomePage";
import PostPage from "./PostPage";
import "./App.css";

export default function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </>
  );
}
