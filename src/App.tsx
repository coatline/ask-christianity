import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import PostPage from './PostPage'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostPage />} />
    </Routes>
  )
}