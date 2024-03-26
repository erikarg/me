import React from "react";
import Computer from "../../images/computer.gif";
import "./introduction.css";

function Introduction() {
  return (
    <main className="introduction" id="introduction">
      <div className="text-box">
        <h3>Oi!</h3>
        <br />
        <h3>Me chamo</h3>
        <h2>Érika Rocha Gonçalves</h2>
        <h3>E sou desenvolvedora web</h3>
      </div>
      <img src={Computer} className="illustration" alt="Computer screen" />
    </main>
  );
}

export default Introduction;
