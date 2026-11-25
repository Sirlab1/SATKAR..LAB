
import React from "react";

function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>

      <p>{description}</p>

      <div className="tech-list">
        {tech.map((item, index) => (
          <span key={index} className="tech">
            {item}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href={demo} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
