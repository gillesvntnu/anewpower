import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Thuisbatterijen(): JSX.Element {
  React.useEffect(() => {
    document.title = "Thuisbatterijen & Omvormers - ANewPower";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="subpage-hero">
        <div className="hero-content">
          <h1>Thuisbatterijen &amp; Omvormers</h1>
          <p>
            Sla uw zonne-energie op en gebruik ze wanneer u het nodig heeft —
            ook 's avonds en 's nachts.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="subpage-section">
        <div className="section-container">
          <div className="subpage-intro">
            <h2>Waarom een thuisbatterij?</h2>
            <p>
              Met een thuisbatterij slaat u de overtollige energie van uw
              zonnepanelen op in plaats van ze terug te leveren aan het net.
              Zo verbruikt u meer van uw eigen geproduceerde stroom en bent u
              minder afhankelijk van het energienet. Zeker met het wegvallen
              van de terugdraaiende teller is een batterij een slimme
              investering.
            </p>
            <p>
              De omvormer is het hart van uw zonne-installatie: hij zet de
              gelijkstroom van uw panelen om naar wisselstroom die u in huis
              gebruikt. Een goede omvormer maximaliseert het rendement van uw
              volledige installatie.
            </p>
          </div>
        </div>
      </section>

      {/* Merk */}
      <section className="subpage-section subpage-section-alt">
        <div className="section-container">
          <h2>Ons merk: Growatt</h2>
          <p className="section-subtitle">
            Wij vertrouwen op Growatt voor al onze omvormers en batterijsystemen.
          </p>
          <div className="brand-cards brand-cards-single">
            <div className="brand-card brand-card-featured">
              <h3>Growatt</h3>
              <p>
                Growatt is een wereldwijd gerenommeerde fabrikant van omvormers
                en energieopslagsystemen. Met meer dan 10 jaar ervaring en
                installaties in meer dan 150 landen biedt Growatt betrouwbare,
                efficiënte en betaalbare oplossingen voor thuisgebruik.
              </p>
              <div className="brand-features">
                <div className="brand-feature">
                  <i className="fas fa-bolt"></i>
                  <span>Hybride omvormers</span>
                </div>
                <div className="brand-feature">
                  <i className="fas fa-battery-full"></i>
                  <span>Modulaire batterijen</span>
                </div>
                <div className="brand-feature">
                  <i className="fas fa-wifi"></i>
                  <span>Slimme monitoring via app</span>
                </div>
                <div className="brand-feature">
                  <i className="fas fa-expand-arrows-alt"></i>
                  <span>Schaalbaar systeem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="subpage-section">
        <div className="section-container">
          <h2>Voordelen van een thuisbatterij</h2>
          <div className="voordelen-grid">
            <div className="voordeel-item">
              <i className="fas fa-moon"></i>
              <h3>Energie 's nachts</h3>
              <p>
                Gebruik overdag opgeslagen zonne-energie in de avond en nacht,
                wanneer uw panelen niet produceren.
              </p>
            </div>
            <div className="voordeel-item">
              <i className="fas fa-hand-holding-usd"></i>
              <h3>Maximaal eigenverbruik</h3>
              <p>
                Verhoog uw zelfconsumptie tot 70-80% en haal het maximale uit
                uw zonnepanelen.
              </p>
            </div>
            <div className="voordeel-item">
              <i className="fas fa-plug"></i>
              <h3>Noodstroom</h3>
              <p>
                Bij een stroomstoring kunt u rekenen op uw batterij als
                noodstroomvoorziening voor essentiële apparaten.
              </p>
            </div>
            <div className="voordeel-item">
              <i className="fas fa-mobile-alt"></i>
              <h3>Slim beheer</h3>
              <p>
                Via de Growatt-app monitort u realtime uw energieproductie,
                verbruik en batterijstatus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Interesse in een thuisbatterij?</h2>
          <p>Wij adviseren u graag over de beste oplossing voor uw situatie.</p>
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
              <li><i className="fas fa-envelope"></i> info@anewpower.be</li>
              <li><i className="fas fa-phone"></i> +32 477 21 43 33</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ANewPower. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </>
  );
}

export default Thuisbatterijen;
