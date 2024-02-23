import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { IllustrationsPage } from "./pages/illustrations";
import { ProjectsPage } from "./pages/projects";
import { AboutPage } from "./pages/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="lavrushkinskaya" />}></Route>
      <Route path="lavrushkinskaya" index element={<IllustrationsPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
