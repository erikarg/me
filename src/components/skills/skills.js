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
import Collaboration from "../../images/collaboration.svg";
import "./skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div class="skills-icons">
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
      <h3 className="title">Habilidades</h3>
      <div className="skills-text">
        <div className="communication">
          <img alt="Communication icon" src={Communication} />
          <h3>Comunicação</h3>
          <p>
            Aqui não é o problema. Sou capaz de me comunicar de forma clara e
            objetiva, expressando minhas ideias de maneira eficaz tanto em
            interações formais quanto informais.
          </p>
        </div>
        <div className="adaptability">
          <img alt="Adaptability icon" src={Adaptability} />
          <h3>Adaptabilidade</h3>
          <p>
            Consigo me adaptar a ambientes novos e dinâmicos, aprendendo novas
            tecnologias, sendo receptiva aos feedbacks e ajustando o restante
            conforme a necessidade do projeto. É a minha parte favorita.
          </p>
        </div>
        <div className="collaboration">
          <img alt="Collaboration icon" src={Collaboration} />
          <h3>Colaboração</h3>
          <p>
            Bate aí! Não tem essa de trabalhar sozinho. Adoro engajar em
            conversas, compartilhar ideias e escutar outros pontos de vista, e é
            por isso que me dou muito bem com os times de UI/UX, QA, entre
            outros.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
