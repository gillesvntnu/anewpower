import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function Zonnepanelen(): JSX.Element {
  React.useEffect(() => {
    document.title = "Zonnepanelen - ANewPower";
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="subpage-hero">
        <div className="hero-content">
          <h1>Zonnepanelen</h1>
          <p>
            Produceer uw eigen groene stroom en verlaag uw energiefactuur met
            hoogwaardige zonnepanelen.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="subpage-section">
        <div className="section-container">
          <div className="subpage-intro">
            <h2>Waarom zonnepanelen?</h2>
            <p>
              Zonnepanelen zijn dé manier om uw energiekosten structureel te
              verlagen. U produceert uw eigen elektriciteit, wordt minder
              afhankelijk van stijgende energieprijzen en draagt bij aan een
              duurzamere toekomst. Dankzij de huidige technologie is een
              zonnepaneelinstallatie al binnen enkele jaren terugverdiend.
            </p>
            <p>
              Bij ANewPower adviseren wij u over het ideale systeem voor uw dak,
              verbruik en budget. Wij verzorgen de volledige installatie — van
              ontwerp en vergunning tot oplevering en inbedrijfstelling.
            </p>
          </div>
        </div>
      </section>

      {/* Merken */}
      <section className="subpage-section subpage-section-alt">
        <div className="section-container">
          <h2>Onze merken</h2>
          <p className="section-subtitle">
            Wij installeren uitsluitend panelen van bewezen topfabrikanten.
          </p>
          <div className="brand-cards">
            <div className="brand-card">
              <h3>Trina Solar</h3>
              <p>
                Eén van 's werelds grootste fabrikanten van zonnepanelen. Trina
                Solar staat bekend om zijn betrouwbaarheid, hoge rendementen en
                uitstekende prijs-kwaliteitverhouding. Ideaal voor zowel
                residentiële als commerciële projecten.
              </p>
            </div>
            <div className="brand-card">
              <h3>Jinko Solar</h3>
              <p>
                Wereldleider in de productie van zonnepanelen met een bewezen
                staat van dienst. Jinko Solar biedt panelen met een hoog
                vermogen en uitstekende prestaties, zelfs bij bewolkt weer of
                diffuus licht.
              </p>
            </div>
            <div className="brand-card">
              <h3>Aiko</h3>
              <p>
                Innovatief merk dat zich richt op de nieuwste generatie
                zonneceltechnologie. Aiko-panelen behalen toprendementen dankzij
                geavanceerde ABC-technologie (All Back Contact), wat zorgt voor
                meer opbrengst per vierkante meter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="subpage-section">
        <div className="section-container">
          <h2>Voordelen van zonnepanelen</h2>
          <div className="voordelen-grid">
            <div className="voordeel-item">
              <i className="fas fa-piggy-bank"></i>
              <h3>Bespaar op uw energiefactuur</h3>
              <p>
                Produceer uw eigen stroom en zie uw maandelijkse kosten dalen.
                Een gemiddeld gezin bespaart jaarlijks honderden euro's.
              </p>
            </div>
            <div className="voordeel-item">
              <i className="fas fa-leaf"></i>
              <h3>100% groene energie</h3>
              <p>
                Zonne-energie is schoon en hernieuwbaar. U verkleint uw
                ecologische voetafdruk zonder in te leveren op comfort.
              </p>
            </div>
            <div className="voordeel-item">
              <i className="fas fa-chart-line"></i>
              <h3>Waardevermeerdering woning</h3>
              <p>
                Een zonnepaneelinstallatie verhoogt de waarde van uw woning en
                maakt deze aantrekkelijker voor kopers.
              </p>
            </div>
            <div className="voordeel-item">
              <i className="fas fa-shield-alt"></i>
              <h3>Lange levensduur</h3>
              <p>
                Moderne zonnepanelen gaan makkelijk 25 tot 30 jaar mee en worden
                geleverd met uitgebreide productgaranties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="section-container">
          <h2>Interesse in zonnepanelen?</h2>
          <p>Contacteer ons voor een vrijblijvend adviesgesprek op maat.</p>
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

export default Zonnepanelen;
