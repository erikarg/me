import React, { useState } from "react";
import projects from "./projects.json";
import "./projects.css";

function Projects() {
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = (number) => {
    setActiveSlide(number);
  };

  const project = projects[activeSlide];

  return (
    <section className="projects">
      <h3 className="title" id="projects">
        Principais projetos
      </h3>
      <div className="projects-container" id="projects-container">
        <h5 id="project-title">{project.nome}</h5>
        <p id="project-objective">{project.objetivo}</p>
        <ul id="project-stacks">
          {Object.entries(project.stacks).map(([key, value]) => (
            <li key={key}>
              <strong>{key}</strong>: {value}
            </li>
          ))}
        </ul>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Acesse o projeto aqui
        </a>
      </div>
      <div className="navigation-button">
        {projects.map((project, index) => (
          <span
            key={index}
            className={`dot ${activeSlide === index ? "active" : ""}`}
            onClick={() => changeSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Projects;
