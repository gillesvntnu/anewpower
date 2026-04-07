import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export const getScrollPosition = (sectionId: string): number => {
  const currentSection = document.getElementById(sectionId);
  if (currentSection) {
    const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
    const sectionOffsetTop = currentSection.offsetTop;
    return sectionOffsetTop - navbarHeight;
  }
  return 0;
};

export const scrollToSection = (sectionId: string): void => {
  const sectionOffsetTop = getScrollPosition(sectionId);
  window.scrollTo({
    top: sectionOffsetTop,
    behavior: "smooth",
  });
};

function Home(): JSX.Element {
  React.useEffect(() => {
    document.title = "ANewPower - Zonnepanelen, Batterijen & Laadpalen";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Duurzame energie voor uw woning en bedrijf</h1>
          <p>
            ANewPower is uw partner voor zonnepanelen, batterijopslag en
            laadpalen. Wij zorgen voor een zorgeloze installatie van A tot Z.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("diensten")}
            >
              Onze diensten
            </button>
            <Link to="/contact" className="btn btn-outline">
              Contacteer ons
            </Link>
          </div>
        </div>
      </section>

      {/* Diensten Section */}
      <section id="diensten" className="diensten-section">
        <div className="section-container">
          <h2>Onze Diensten</h2>
          <p className="section-subtitle">
            Van advies tot installatie en onderhoud — wij bieden een totaaloplossing voor uw energiebehoeften.
          </p>
          <div className="diensten-grid">
            <Link to="/zonnepanelen" className="dienst-card">
              <div className="dienst-icon">
                <i className="fas fa-solar-panel"></i>
              </div>
              <h3>Zonnepanelen</h3>
              <p>
                Hoogwaardige zonnepanelen van topmerken zoals <strong>Trina Solar</strong>,{" "}
                <strong>Jinko Solar</strong> en <strong>Aiko</strong>. Optimaal rendement voor
                elk type dak.
              </p>
              <span className="dienst-link">Meer info &rarr;</span>
            </Link>
            <Link to="/thuisbatterijen" className="dienst-card">
              <div className="dienst-icon">
                <i className="fas fa-battery-full"></i>
              </div>
              <h3>Batterijen &amp; Omvormers</h3>
              <p>
                Sla uw zonne-energie op met betrouwbare <strong>Growatt</strong> batterijsystemen
                en omvormers. Gebruik uw eigen energie, ook 's nachts.
              </p>
              <span className="dienst-link">Meer info &rarr;</span>
            </Link>
            <Link to="/laadpalen" className="dienst-card">
              <div className="dienst-icon">
                <i className="fas fa-charging-station"></i>
              </div>
              <h3>Laadpalen</h3>
              <p>
                Rij elektrisch met een slimme <strong>Alfen</strong> laadpaal. Thuis of op het
                werk, wij installeren uw laadoplossing vakkundig.
              </p>
              <span className="dienst-link">Meer info &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Waarom Section */}
      <section id="waarom" className="waarom-section">
        <div className="section-container">
          <h2>Waarom ANewPower?</h2>
          <div className="waarom-grid">
            <div className="waarom-item">
              <i className="fas fa-handshake"></i>
              <h3>Persoonlijk advies</h3>
              <p>Elke installatie begint met een grondige analyse van uw situatie en wensen.</p>
            </div>
            <div className="waarom-item">
              <i className="fas fa-certificate"></i>
              <h3>Kwaliteitsmerken</h3>
              <p>Wij werken uitsluitend met bewezen merken: Growatt, Alfen, Trina Solar, Jinko Solar en Aiko.</p>
            </div>
            <div className="waarom-item">
              <i className="fas fa-tools"></i>
              <h3>Vakkundige installatie</h3>
              <p>Van ontwerp tot oplevering — alles wordt professioneel en netjes uitgevoerd.</p>
            </div>
            <div className="waarom-item">
              <i className="fas fa-headset"></i>
              <h3>Service na verkoop</h3>
              <p>Ook na de installatie staan wij voor u klaar met onderhoud en ondersteuning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Merken Section */}
      <section id="merken" className="merken-section">
        <div className="section-container">
          <h2>Onze Merken</h2>
          <p className="section-subtitle">
            Wij werken samen met toonaangevende fabrikanten in de sector.
          </p>
          <div className="merken-grid">
            <div className="merk-item">
              <div className="merk-logo-placeholder">
                <span>Growatt</span>
              </div>
              <p>Omvormers &amp; Batterijen</p>
            </div>
            <div className="merk-item">
              <div className="merk-logo-placeholder">
                <span>Alfen</span>
              </div>
              <p>Laadpalen</p>
            </div>
            <div className="merk-item">
              <div className="merk-logo-placeholder">
                <span>Trina Solar</span>
              </div>
              <p>Zonnepanelen</p>
            </div>
            <div className="merk-item">
              <div className="merk-logo-placeholder">
                <span>Jinko Solar</span>
              </div>
              <p>Zonnepanelen</p>
            </div>
            <div className="merk-item">
              <div className="merk-logo-placeholder">
                <span>Aiko</span>
              </div>
              <p>Zonnepanelen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Klaar om over te schakelen op duurzame energie?</h2>
          <p>Neem vrijblijvend contact met ons op voor een persoonlijk adviesgesprek.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Neem contact op
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-col">
            <h4>ANewPower</h4>
            <p>Uw partner voor zonnepanelen, batterijen en laadpalen.</p>
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
    </>
  );
}

export default Home;
