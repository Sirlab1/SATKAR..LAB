
import React, { useState } from "react";
import FilterBar from "./components/FilterBar";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "A personal website to showcase my skills and projects.",
      tech: ["React", "CSS"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Student Management System",
      description: "A system for managing student information.",
      tech: ["Node", "CSS"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Weather Application",
      description: "An application that displays weather information.",
      tech: ["React", "CSS"],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Online Shopping Website",
      description: "An online shopping website with product listings.",
      tech: ["React", "Node"],
      github: "#",
      demo: "#"
    }
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tech.includes(activeFilter)
        );

  return (
    <div className="app">
      <header className="header">
        <h1>My Portfolio Gallery</h1>
        <p>
          Welcome to my portfolio! Here are my web development projects.
        </p>
      </header>

      <FilterBar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <ProjectList projects={filteredProjects} />

      {filteredProjects.length === 0 && (
        <p>No projects found.</p>
      )}

      <footer>
        <p>© 2026 My Portfolio | Created with React</p>
      </footer>
    </div>
  );
}

export default App;
