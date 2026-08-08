import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiArrowRight,
  FiPhone,
  FiMapPin,
  FiClock,
  FiStar,
  FiInstagram,
} from "react-icons/fi";
import "./App.css";

const services = [
  {
    title: "Hair Cut & Styling",
    description:
      "Modern cuts and professional styling designed to suit your personality.",
    price: "Starting from ₹299",
  },
  {
    title: "Hair Colour",
    description:
      "Refresh your look with beautiful colours, highlights and modern techniques.",
    price: "Starting from ₹799",
  },
  {
    title: "Hair Treatment",
    description:
      "Professional treatments to help your hair look healthier, smoother and more vibrant.",
    price: "Starting from ₹599",
  },
  {
    title: "Bridal & Occasion",
    description:
      "Elegant styling and grooming for weddings, celebrations and special occasions.",
    price: "Consult for pricing",
  },
];

const reviews = [
  {
    name: "Happy Client",
    text: "Great service and a friendly atmosphere. Loved the overall experience.",
  },
  {
    name: "Happy Client",
    text: "Professional service and a very comfortable salon experience.",
  },
  {
    name: "Happy Client",
    text: "Really liked the styling and attention to detail. Would definitely visit again.",
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
          <div className="logo-icon">Z</div>

          <div className="logo-text">
            <strong>ZIG ZAG</strong>
            <span>HAIR SALON</span>
          </div>
        </a>

        <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Book Now
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">WELCOME TO ZIG ZAG</p>

            <h1>
              Look good.
              <br />
              <span>Feel confident.</span>
            </h1>

            <p className="hero-description">
              Modern hair styling and grooming for men and women.
              Discover a salon experience created around your style.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="gold-button">
                Explore Services
                <FiArrowRight />
              </a>

              <a href="#contact" className="outline-button">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>

        <div className="hero-bottom">
          <span>HAIR</span>
          <span>STYLE</span>
          <span>BEAUTY</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="section-label">01 — ABOUT US</div>

        <div className="about-grid">
          <div>
            <p className="gold-label">YOUR STYLE, YOUR WAY</p>

            <h2>
              More than a haircut.
              <br />
              <em>It's your look.</em>
            </h2>
          </div>

          <div className="about-text">
            <p>
              Zig Zag Hair Salon is a modern destination for
              professional hair styling and grooming in Belagavi.
            </p>

            <p>
              Whether you are looking for a fresh haircut,
              a new hair colour or getting ready for a special
              occasion, our focus is to make you look and feel
              your best.
            </p>

            <a href="#contact" className="text-link">
              Visit Zig Zag <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section" id="services">
        <div className="section-top">
          <div>
            <div className="section-label">02 — SERVICES</div>

            <h2>
              What we <em>offer</em>
            </h2>
          </div>

          <p>
            Professional services designed to keep your
            hair looking fresh, healthy and stylish.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="service-number">
                0{index + 1}
              </span>

              <div className="service-icon">✦</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="service-price">
                {service.price}
              </span>

              <a href="#contact">
                Book Service <FiArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="why-inner">
          <div>
            <p className="gold-label">WHY ZIG ZAG?</p>

            <h2>
              Your confidence
              <br />
              <em>comes first.</em>
            </h2>

            <p className="why-text">
              We believe a great salon experience should be
              comfortable, professional and personalized.
            </p>
          </div>

          <div className="why-list">
            <div>
              <span>01</span>
              <div>
                <h3>Professional Service</h3>
                <p>Attention to detail in every service.</p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <h3>Modern Styles</h3>
                <p>Fresh looks that match today's trends.</p>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <h3>Personal Attention</h3>
                <p>Your style and comfort always matter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery section" id="gallery">
        <div className="section-top">
          <div>
            <div className="section-label">03 — GALLERY</div>

            <h2>
              Style <em>inspired.</em>
            </h2>
          </div>

          <p>
            A glimpse into the modern salon experience.
          </p>
        </div>

        <div className="gallery-grid">

          <div className="gallery-large">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
              alt="Salon interior"
            />
          </div>

          <div className="gallery-small">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=85"
              alt="Hair styling"
            />

            <div className="gallery-caption">
              <span>STYLE</span>
              <strong>Made for you.</strong>
            </div>
          </div>

          <div className="gallery-wide">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85"
              alt="Hair salon styling"
            />
          </div>

        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews section">
        <div className="reviews-heading">
          <div className="section-label">04 — REVIEWS</div>

          <h2>
            What our clients
            <br />
            <em>say.</em>
          </h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="stars">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>

              <p>"{review.text}"</p>

              <strong>{review.name}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">

        <div className="contact-content">
          <p className="gold-label">05 — CONTACT</p>

          <h2>
            Ready for a
            <br />
            <em>new look?</em>
          </h2>

          <p className="contact-description">
            Visit Zig Zag Hair Salon and let us help you
            create a style that feels completely yours.
          </p>

          <div className="contact-details">

            <div>
              <FiMapPin />
              <div>
                <strong>Location</strong>
                <span>Belagavi, Karnataka</span>
              </div>
            </div>

            <div>
              <FiClock />
              <div>
                <strong>Opening Hours</strong>
                <span>Contact salon for current timings</span>
              </div>
            </div>

            <div>
              <FiPhone />
              <div>
                <strong>Appointments</strong>
                <span>Contact the salon directly</span>
              </div>
            </div>

          </div>

          <div className="contact-buttons">
            <a href="tel:" className="gold-button">
              Call Salon <FiPhone />
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Zig+Zag+Hair+Salon+Belagavi"
              target="_blank"
              rel="noreferrer"
              className="outline-button"
            >
              <FiMapPin />
              Get Directions
            </a>
          </div>
        </div>

        <div className="contact-box">
          <div className="contact-logo">Z</div>

          <h3>ZIG ZAG</h3>
          <span>HAIR SALON</span>

          <div className="contact-line"></div>

          <p>
            STYLE
            <br />
            CONFIDENCE
            <br />
            BEAUTY
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <div className="logo-icon">Z</div>

          <div>
            <strong>ZIG ZAG</strong>
            <span>HAIR SALON</span>
          </div>
        </div>

        <p>Modern style. Confident you.</p>

        <div className="social">
          <FiInstagram />
        </div>
      </footer>

      {/* MOBILE BOOK BUTTON */}
      <a href="#contact" className="mobile-book">
        <FiPhone />
        Book Appointment
      </a>

    </div>
  );
}

export default App;