import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { scrollToSection } from "./pages/Home";
import logo from "../images/logo-white.png";

function Navbar(): JSX.Element {
  const [click, setClick] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    closeMobileMenu();
    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      window.location.href = "/#/" ;
      setTimeout(() => scrollToSection(sectionId), 300);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="ANewPower" className="navbar-logo-img" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => handleNavClick("hero")}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <span
              className="nav-links"
              onClick={() => handleNavClick("diensten")}
            >
              Diensten
            </span>
          </li>
          <li className="nav-item">
            <span
              className="nav-links"
              onClick={() => handleNavClick("waarom")}
            >
              Over ons
            </span>
          </li>
          <li className="nav-item">
            <span
              className="nav-links"
              onClick={() => handleNavClick("merken")}
            >
              Merken
            </span>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links nav-links-contact"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
