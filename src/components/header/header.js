import React, { useState } from "react";
import World from "../../images/world.png";
import Brasil from "../../images/brasil-flag.png";
import USA from "../../images/usa-flag.png";
import France from "../../images/france-flag.png";
import Spain from "../../images/spain-flag.png";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguageSlide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="checkbox" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="menu-items">
              <li>
                <a href="#introduction">INÍCIO</a>
              </li>
              <li>
                <a href="#skills">HABILIDADES</a>
              </li>
              <li>
                <a href="#projects">PROJETOS</a>
              </li>
              <li>
                <a href="#contact">CONTATO</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <div className="language-selector">
        <img
          alt="language-icon"
          src={World}
          id="language-icon"
          onClick={toggleLanguageSlide}
        />
        <div className={`language-slide ${isOpen ? "open" : ""}`}>
          <img src={Brasil} alt="Brasil Flag" className="flag" />
          <img src={USA} alt="USA Flag" className="flag" />
          <img src={Spain} alt="Spain Flag" className="flag" />
          <img src={France} alt="France Flag" className="flag" />
        </div>
      </div>
    </header>
  );
}

export default Header;
