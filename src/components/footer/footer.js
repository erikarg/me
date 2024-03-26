import React from "react";
import Email from "../../images/Email.svg";
import GitHub from "../../images/GitHub.svg";
import Linkedin from "../../images/Linkedin.svg";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3>Contato</h3>
      <div className="contact" id="contact">
        <p className="email" type="text">
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
