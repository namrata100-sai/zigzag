import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiClock,
  FiScissors,
  FiUser,
  FiMessageCircle,
} from "react-icons/fi";
import "./App.css";

const services = [
  {
    icon: <FiScissors />,
    title: "Men's Haircut",
    text: "Clean and stylish haircuts tailored to your look.",
  },
  {
    icon: <FiUser />,
    title: "Beard Trim",
    text: "Keep your beard sharp, neat and well shaped.",
  },
  {
    icon: <FiScissors />,
    title: "Hair Styling",
    text: "Get a fresh style for everyday looks or special occasions.",
  },
  {
    icon: <FiUser />,
    title: "Shaving & Grooming",
    text: "Classic grooming for a clean and confident appearance.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <div className="logo-mark">ZZ</div>

          <div className="logo-text">
            <strong>ZIG ZAG</strong>
            <span>HAIR SALON</span>
          </div>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Book Appointment
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-tag">
            MEN'S HAIR & GROOMING
          </div>

          <h1>
            Look Sharp.
            <br />
            <span>Feel Confident.</span>
          </h1>

          <p>
            Professional men's haircuts, beard grooming
            and styling in a comfortable local salon.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Book Appointment
              <FiArrowRight />
            </a>

            <a href="#services" className="secondary-btn">
              View Services
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>HAIRCUTS</span>
          <span>BEARD</span>
          <span>GROOMING</span>
          <span>STYLE</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section" id="services">
        <div className="section-heading">
          <div>
            <span className="section-number">01</span>
            <span className="section-label">OUR SERVICES</span>
          </div>

          <h2>
            Everything you need
            <br />
            <span>to look your best.</span>
          </h2>

          <p>
            From a clean haircut to a sharp beard,
            we've got your everyday grooming covered.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>

              <span className="service-number-small">
                0{index + 1}
              </span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a href="#contact">
                Enquire Now <FiArrowRight />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85"
            alt="Men's barber haircut"
          />
        </div>

        <div className="about-content">
          <span className="section-label">02 — ABOUT ZIG ZAG</span>

          <h2>
            A good haircut
            <br />
            <span>changes everything.</span>
          </h2>

          <p>
            Zig Zag Hair Salon is a local men's grooming
            destination focused on clean haircuts, beard
            styling and modern men's looks.
          </p>

          <p>
            Whether you want a simple everyday haircut or
            a fresh new style, our goal is to give you a
            comfortable experience and a look you feel good in.
          </p>

          <a href="#contact" className="text-link">
            Visit Us <FiArrowRight />
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery section" id="gallery">
        <div className="gallery-heading">
          <span className="section-label">03 — GALLERY</span>

          <h2>
            Fresh cuts.
            <br />
            <span>Fresh style.</span>
          </h2>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item gallery-large">
            <img
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1100&q=85"
              alt="Men's haircut"
            />
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85"
              alt="Men's grooming"
            />
          </div>

          <div className="gallery-item gallery-dark">
            <div>
              <span>YOUR STYLE</span>
              <strong>YOUR LOOK.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <div className="why-inner">
          <div>
            <span className="section-label">04 — WHY ZIG ZAG</span>

            <h2>
              Simple.
              <br />
              <span>Professional.</span>
              <br />
              Reliable.
            </h2>
          </div>

          <div className="why-list">
            <div className="why-item">
              <span>01</span>
              <div>
                <h3>Men's Grooming</h3>
                <p>
                  Services focused on men's hair and grooming.
                </p>
              </div>
            </div>

            <div className="why-item">
              <span>02</span>
              <div>
                <h3>Modern Styles</h3>
                <p>
                  Clean and contemporary looks for every day.
                </p>
              </div>
            </div>

            <div className="why-item">
              <span>03</span>
              <div>
                <h3>Comfortable Experience</h3>
                <p>
                  A relaxed local salon where you can feel comfortable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section" id="contact">
        <div className="contact-content">
          <span className="section-label">05 — CONTACT</span>

          <h2>
            Ready for a
            <br />
            <span>fresh look?</span>
          </h2>

          <p>
            Get in touch with Zig Zag Hair Salon for your
            next haircut or grooming appointment.
          </p>

          <div className="contact-info">

            <div className="info-item">
              <FiMapPin />
              <div>
                <strong>Location</strong>
                <span>Belagavi, Karnataka</span>
              </div>
            </div>

            <div className="info-item">
              <FiClock />
              <div>
                <strong>Opening Hours</strong>
                <span>Please contact the salon</span>
              </div>
            </div>

            <div className="info-item">
              <FiPhone />
              <div>
                <strong>Appointments</strong>
                <span>Call the salon directly</span>
              </div>
            </div>

          </div>

          <div className="contact-buttons">

            <a href="tel:" className="primary-btn">
              <FiPhone />
              Call Now
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Zig+Zag+Hair+Salon+Belagavi"
              target="_blank"
              rel="noreferrer"
              className="map-btn"
            >
              <FiMapPin />
              Get Directions
            </a>

          </div>
        </div>

        <div className="contact-card">
          <div className="big-logo">ZZ</div>

          <h3>ZIG ZAG</h3>
          <span>MEN'S HAIR SALON</span>

          <div className="contact-divider"></div>

          <p>
            HAIRCUTS
            <br />
            BEARD
            <br />
            GROOMING
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <div className="footer-logo">ZZ</div>

          <div>
            <strong>ZIG ZAG</strong>
            <span>HAIR SALON</span>
          </div>
        </div>

        <p>
          Modern men's haircuts & grooming.
        </p>

        <span className="footer-copy">
          © {new Date().getFullYear()} Zig Zag Hair Salon
        </span>
      </footer>

      {/* MOBILE CTA */}
      <a href="#contact" className="mobile-cta">
        <FiPhone />
        Book Appointment
      </a>

    </div>
  );
}

export default App;