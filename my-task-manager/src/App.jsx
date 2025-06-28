

import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import TasksPage from "@/pages/Tasks";
import PostsPage from "@/pages/Posts";
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/posts" element={<PostsPage />} />
    </Routes>
  );
}
