import React from "react";
import Computer from "../../images/computer.gif";
import "./introduction.css";
import { useTranslation } from "react-i18next";

function Introduction() {
  const { t } = useTranslation();

  return (
    <main className="introduction" id="introduction">
      <div className="text-box">
        <h3>{t("Oi!")}</h3>
        <br />
        <h3>{t("Me chamo")}</h3>
        <h2>Érika Rocha</h2>
        <h3>{t("E sou desenvolvedora web")}</h3>
      </div>
      <img src={Computer} className="illustration" alt="Computer screen" />
    </main>
  );
}

export default Introduction;
