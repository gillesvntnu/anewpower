import React from "react";

import "../../App.css";

function Contact(): JSX.Element {
  React.useEffect(() => {
    document.title = "Contact - ANewPower";
  }, []);

  return (
    <>
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contacteer Ons</h1>
          <p>
            Heeft u vragen of wilt u een vrijblijvend adviesgesprek? Neem gerust
            contact met ons op.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Bel ons</h3>
              <p>
                <a href="tel:+32XXXXXXXXX">+32 XXX XX XX XX</a>
              </p>
              <p className="contact-detail">Ma - Vr: 8:00 - 18:00</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>E-mail</h3>
              <p>
                <a href="mailto:info@anewpower.be">info@anewpower.be</a>
              </p>
              <p className="contact-detail">Wij antwoorden binnen 24 uur</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Adres</h3>
              <p>België</p>
              <p className="contact-detail">Op afspraak</p>
            </div>
          </div>

          <div className="contact-cta">
            <h2>Interesse in een vrijblijvend adviesgesprek?</h2>
            <p>
              Stuur ons een e-mail of bel ons. Wij bespreken graag uw
              mogelijkheden voor zonnepanelen, batterijopslag of een laadpaal.
            </p>
            <a href="mailto:info@anewpower.be" className="btn btn-primary btn-lg">
              <i className="fas fa-envelope"></i>&nbsp; Stuur een e-mail
            </a>
          </div>
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
              <li>Zonnepanelen</li>
              <li>Batterijen &amp; Omvormers</li>
              <li>Laadpalen</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <i className="fas fa-envelope"></i> info@anewpower.be
              </li>
              <li>
                <i className="fas fa-phone"></i> +32 XXX XX XX XX
              </li>
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

export default Contact;
