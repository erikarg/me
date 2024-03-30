import React, { useState } from "react";
import projects from "./projects.json";
import "./projects.css";
import { useTranslation } from "react-i18next";

function Projects() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useTranslation();

  const changeSlide = (number) => {
    setActiveSlide(number);
  };

  const project = projects[activeSlide];

  return (
    <section className="projects">
      <h3 className="title" id="projects">
        {t("Principais projetos")}
      </h3>
      <div className="projects-container" id="projects-container">
        <h5 id="project-title">{project.nome}</h5>
        <p id="project-objective">{t(project.objetivo)}</p>
        <ul id="project-stacks">
          {Object.entries(project.stacks).map(([key, value]) => (
            <li key={key}>
              <strong>{t(key)}</strong>: {t(value)}
            </li>
          ))}
        </ul>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          {t("Acesse o projeto aqui")}
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
