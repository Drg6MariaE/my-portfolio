import React from "react";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.querySelector("#about");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#about");
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <button className="headerbtn">
            <Link to="/">HOME</Link>
          </button>
          <button className="headerbtn">
            <Link to="/projects">PROJECTS</Link>
          </button>
          <button className="headerbtn">
            <Link to="/contact">CONTACT</Link>
          </button>
          <button className="headerbtn" onClick={handleAboutClick}>
            ABOUT
          </button>
        </nav>
      </div>
    </header>
  );
}
