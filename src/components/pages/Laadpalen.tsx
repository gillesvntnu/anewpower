import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";

function Laadpalen(): JSX.Element {
  React.useEffect(() => {
    document.title = "Laadpalen - ANewPower";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="subpage-hero">
        <div className="hero-content">
          <h1>Laadpalen</h1>
          <p>
            Laad uw elektrische wagen thuis of op het werk met een slimme en
            veilige laadoplossing.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="subpage-section">
        <div className="section-container">
          <div className="subpage-intro">
            <h2>Waarom een laadpaal?</h2>
            <p>
              Elektrisch rijden wordt steeds populairder, en een eigen laadpaal
              maakt het bijzonder comfortabel. U laadt uw wagen op wanneer het u
              uitkomt — 's nachts, overdag, of tijdens werkuren. In combinatie
              met zonnepanelen rijdt u zelfs gratis op zonne-energie.
            </p>
            <p>
              ANewPower installeert laadpalen voor particulieren en bedrijven.
              Wij adviseren u over het juiste type laadpaal, de benodigde
              capaciteit en de optimale plaatsing. Alles wordt conform de
              geldende normen geïnstalleerd.
            </p>
          </div>
        </div>
      </section>

      {/* Merk */}
      <section className="subpage-section subpage-section-alt">
        <div className="section-container">
          <h2>Ons merk: Alfen</h2>
          <p className="section-subtitle">
            Voor laadoplossingen werken wij uitsluitend met Alfen.
          </p>
          <div className="brand-cards brand-cards-single">
            <div className="brand-card brand-card-featured">
              <h3>Alfen</h3>
              <p>
                Alfen is een toonaangevend Nederlands bedrijf gespecialiseerd in
                slimme energie-oplossingen en laadinfrastructuur. Met duizenden
                laadpunten in heel Europa is Alfen een bewezen en betrouwbare
                keuze voor zowel thuisladen als semi-publiek laden op
                bedrijfsterreinen.
              </p>
              <div className="brand-features">
                <div className="brand-feature">
                  <i className="fas fa-tachometer-alt"></i>
                  <span>Tot 22 kW laadvermogen</span>
                </div>
                <div className="brand-feature">
                  <i className="fas fa-lock"></i>
                  <span>Veilig &amp; gecertificeerd</span>
                </div>
                <div className="brand-feature">
                  <i className="fas fa-solar-panel"></i>
                  <span>Integratie met zonnepanelen</span>
                </div>
                <div className="brand-feature">
                  <i className="fas fa-network-wired"></i>
                  <span>Load balancing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="subpage-section">
        <div className="section-container">
          <h2>Voordelen van een eigen laadpaal</h2>
          <div className="voordelen-grid">
            <div className="voordeel-item">
              <i className="fas fa-home"></i>
              <h3>Laden aan huis</h3>
              <p>
                Geen omweg meer langs een publiek laadpunt. Uw wagen staat
                's ochtends altijd opgeladen klaar.
              </p>
            </div>
            <div className="voordeel-item">
              <i className="fas fa-sun"></i>
              <h3>Laden op zonne-energie</h3>
              <p>
                Koppel uw laadpaal aan uw zonnepanelen en rij vrijwel gratis op
                groene stroom.
              </p>
            </div>
            <div className="voordeel-item">
              <i className="fas fa-euro-sign"></i>
              <h3>Goedkoper dan publiek laden</h3>
              <p>
                Thuis laden is tot 3 keer goedkoper dan aan een publieke
                snellader. Uw portemonnee zal u dankbaar zijn.
              </p>
            </div>
            <div className="voordeel-item">
              <i className="fas fa-building"></i>
              <h3>Ook voor bedrijven</h3>
              <p>
                Bied uw werknemers en klanten een laadoplossing aan.
                Wij installeren ook op bedrijfsterreinen en parkings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Klaar om elektrisch te laden?</h2>
          <p>Neem contact op en wij regelen uw laadpaal van A tot Z.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Neem contact op
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Laadpalen;
