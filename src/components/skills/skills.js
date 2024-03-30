import React from "react";
import Adonis from "../../images/AdonisJS.svg";
import Nest from "../../images/Nest.js.svg";
import JavaScript from "../../images/JavaScript.svg";
import TypeScript from "../../images/TypeScript.svg";
import Python from "../../images/Python.png";
import Node from "../../images/Node.js.svg";
import Express from "../../images/Express.svg";
import Docker from "../../images/Docker.svg";
import Sequelize from "../../images/Sequelize.svg";
import MongoDB from "../../images/MongoDB.svg";
import MySQL from "../../images/MySQL.svg";
import PostgreSQL from "../../images/Postgresql.png";
import ReactIcon from "../../images/React.svg";
import Redux from "../../images/Redux.svg";
import Bootstrap from "../../images/Bootstrap.png";
import Mocha from "../../images/Mocha.svg";
import Jest from "../../images/Jest.svg";
import HTML from "../../images/HTML5.svg";
import CSS from "../../images/CSS3.svg";
import Communication from "../../images/communication.svg";
import Adaptability from "../../images/adaptability.svg";
import { useTranslation } from "react-i18next";
import Collaboration from "../../images/collaboration.svg";
import "./skills.css";

function Skills() {
  const { t } = useTranslation();

  return (
    <section className="skills" id="skills">
      <div className="skills-icons">
        <img alt="AdonisJS icon" src={Adonis} />
        <img alt="Nest.js icon" src={Nest} />
        <img alt="JavaScript icon" src={JavaScript} />
        <img alt="TypeScript icon" src={TypeScript} />
        <img alt="Python icon" src={Python} />
        <img alt="Node.js icon" src={Node} />
        <img alt="Express icon" src={Express} />
        <img alt="Docker icon" src={Docker} />
        <img alt="Sequelize icon" src={Sequelize} />
        <img alt="MongoDB icon" src={MongoDB} />
        <img alt="MySQL icon" src={MySQL} />
        <img alt="Postgresql icon" src={PostgreSQL} />
        <img alt="React icon" src={ReactIcon} />
        <img alt="Redux icon" src={Redux} />
        <img alt="Bootstrap icon" src={Bootstrap} />
        <img alt="Mocha icon" src={Mocha} />
        <img alt="Jest icon" src={Jest} />
        <img alt="HTML5 icon" src={HTML} />
        <img alt="CSS3 icon" src={CSS} />
      </div>
      <h3 className="abilities">{t("Habilidades")}</h3>
      <div className="skills-text">
        <div className="communication">
          <img alt="Communication icon" src={Communication} />
          <h3>{t("Comunicação")}</h3>
          <p>{t("frase1")}</p>
        </div>
        <div className="adaptability">
          <img alt="Adaptability icon" src={Adaptability} />
          <h3>{t("Adaptabilidade")}</h3>
          <p>{t("frase2")}</p>
        </div>
        <div className="collaboration">
          <img alt="Collaboration icon" src={Collaboration} />
          <h3>{t("Colaboração")}</h3>
          <p>{t("frase3")}</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
