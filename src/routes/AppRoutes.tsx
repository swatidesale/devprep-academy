import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Subjects from "../pages/Subjects";
import TopicDetails from "../pages/TopicDetails"; 

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/topics/:id" element={<TopicDetails />} />
    </Routes>
  )
}

export default AppRoutes;