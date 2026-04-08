import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Footer(): JSX.Element {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>ANewPower</h4>
          <p>Uw partner voor zonnepanelen, batterijen en laadpalen.</p>
          <br />
          <p>BTW 0803187912</p>
        </div>
        <div className="footer-col">
          <h4>Diensten</h4>
          <ul>
            <li><Link to="/zonnepanelen">Zonnepanelen</Link></li>
            <li><Link to="/thuisbatterijen">Thuisbatterijen</Link></li>
            <li><Link to="/laadpalen">Laadpalen</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> Kernenergiestraat 19 B16, 2610 Wilrijk
            </li>
            <li>
              <i className="fas fa-envelope"></i> info@anewpower.be
            </li>
            <li>
              <i className="fas fa-phone"></i> +32 477 21 43 33
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ANewPower. Alle rechten voorbehouden. Developer: <a href="https://gillesvandevyver.com" target="_blank" rel="noopener noreferrer">gillesvandevyver.com</a></p>
      </div>
    </footer>
  );
}

export default Footer;
