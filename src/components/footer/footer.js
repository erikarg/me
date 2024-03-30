import React from "react";
import Email from "../../images/Email.svg";
import GitHub from "../../images/GitHub.svg";
import Linkedin from "../../images/Linkedin.svg";
import "./footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const copyEmailToClipboard = () => {
    const email = "erikatrue@gmail.com";
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <footer className="footer">
      <h3>{t("Contato")}</h3>
      <div className="contact" id="contact">
        <p className="email" type="text" onClick={copyEmailToClipboard}>
          <img alt="email icon" src={Email} className="email" id="email-icon" />
        </p>
        <a
          href="https://github.com/erikarg"
          target="_blank"
          rel="noopener noreferrer"
          id="github"
        >
          <img alt="github icon" src={GitHub} className="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/erg1101/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <img alt="linkedin icon" src={Linkedin} className="linkedin" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
