import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiPhone,
  FiStar,
  FiInstagram,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState } from "react";
import "./App.css";

const services = [
  {
    title: "Hair Styling",
    text: "Modern cuts, styling and treatments tailored to your look.",
    price: "From ₹299",
  },
  {
    title: "Hair Colour",
    text: "Beautiful colour, highlights and professional hair treatments.",
    price: "From ₹999",
  },
  {
    title: "Facial & Skin Care",
    text: "Relaxing beauty treatments designed to refresh your skin.",
    price: "From ₹499",
  },
  {
    title: "Bridal & Makeup",
    text: "Elegant makeup and styling for your special occasions.",
    price: "From ₹1,499",
  },
];

const reviews = [
  {
    name: "Happy Client",
    text: "Amazing service and very professional staff. Loved the experience!",
  },
  {
    name: "Happy Client",
    text: "The salon has a beautiful atmosphere and the service was excellent.",
  },
  {
    name: "Happy Client",
    text: "Very friendly staff and great attention to detail.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          <span>B</span>
          <div>
            <strong>BLOSSOM</strong>
            <small>UNISEX SALON</small>
          </div>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#reviews" onClick={closeMenu}>Reviews</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Book Visit
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            BEAUTY • STYLE • CONFIDENCE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Your Style.
            <br />
            <em>Your Confidence.</em>
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            A modern unisex salon experience designed to bring out
            the best version of you.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <a href="#services" className="primary-btn">
              Explore Services <FiArrowRight />
            </a>

            <a href="#contact" className="outline-btn">
              Book Your Visit
            </a>
          </motion.div>
        </div>

        <div className="hero-bottom">
          <div>
            <FiStar />
            <strong>4.8</strong>
            <span>Customer Rating</span>
          </div>

          <div>
            <FiClock />
            <strong>8:30 AM – 8 PM</strong>
            <span>Salon Hours</span>
          </div>

          <div>
            <FiMapPin />
            <strong>Tilakwadi</strong>
            <span>Belagavi</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section" id="about">
        <div className="about-image">
          <div className="image-card">
            <div className="image-placeholder">BLOSSOM</div>
          </div>

          <div className="experience-card">
            <strong>BEAUTY</strong>
            <span>MEETS STYLE</span>
          </div>
        </div>

        <div className="about-content">
          <p className="section-label">ABOUT BLOSSOM</p>

          <h2>
            Where beauty
            <br />
            <em>blooms.</em>
          </h2>

          <p>
            Blossom Unisex Salon brings together modern styling,
            professional beauty services and a relaxing salon
            experience in the heart of Belagavi.
          </p>

          <p>
            Whether you're looking for a fresh new hairstyle,
            a beautiful colour, skincare or occasion makeup,
            our goal is to help you leave feeling confident.
          </p>

          <a href="#services" className="text-link">
            Discover our services <FiArrowRight />
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section" id="services">
        <div className="section-heading">
          <div>
            <p className="section-label">WHAT WE OFFER</p>
            <h2>Our <em>Services</em></h2>
          </div>

          <p>
            Professional beauty and styling services
            created around you.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="service-number">
                0{index + 1}
              </span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <div className="service-bottom">
                <span>{service.price}</span>
                <FiArrowRight />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE */}
      <section className="feature">
        <div className="feature-content">
          <p className="section-label">THE BLOSSOM EXPERIENCE</p>

          <h2>
            Look good.
            <br />
            <em>Feel amazing.</em>
          </h2>

          <p>
            From your first consultation to your final look,
            every detail is designed to make your salon visit
            comfortable and memorable.
          </p>

          <a href="#contact" className="primary-btn">
            Plan Your Visit <FiArrowRight />
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery section" id="gallery">
        <div className="section-heading centered">
          <p className="section-label">OUR WORK</p>
          <h2>Style <em>Gallery</em></h2>
          <p>
            A glimpse of the beauty and creativity at Blossom.
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-box large">HAIR</div>
          <div className="gallery-box">STYLE</div>
          <div className="gallery-box">BEAUTY</div>
          <div className="gallery-box">GLOW</div>
          <div className="gallery-box large">BLOSSOM</div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews section" id="reviews">
        <div className="section-heading centered">
          <p className="section-label">CLIENT LOVE</p>
          <h2>What Our Clients <em>Say</em></h2>
        </div>

        <div className="review-grid">
          {reviews.map((review, index) => (
            <motion.div
              className="review-card"
              key={index}
              whileHover={{ y: -8 }}
            >
              <div className="stars">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>

              <p>"{review.text}"</p>

              <strong>{review.name}</strong>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section" id="contact">
        <div className="contact-info">
          <p className="section-label">VISIT BLOSSOM</p>

          <h2>
            Ready for your
            <br />
            <em>next look?</em>
          </h2>

          <p>
            Visit us at Tilakwadi, Belagavi or get in touch
            to plan your next salon visit.
          </p>

          <div className="contact-details">
            <div>
              <FiMapPin />
              <span>
                Tulips Building, Mandoli Road,
                <br />
                Tilakwadi, Belagavi
              </span>
            </div>

            <div>
              <FiPhone />
              <span>+91 95353 54636</span>
            </div>

            <div>
              <FiClock />
              <span>8:30 AM – 8:00 PM</span>
            </div>
          </div>

          <div className="contact-buttons">
            <a href="tel:+919535354636" className="primary-btn">
              Call Salon <FiPhone />
            </a>

            <a
              href="https://wa.me/919535354636"
              className="whatsapp-btn"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="map-card">
          <div className="map-inner">
            <FiMapPin />
            <h3>Blossom Unisex Salon</h3>
            <p>Tilakwadi, Belagavi</p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Blossom+Unisex+Salon+Belagavi"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <span>B</span>
          <div>
            <strong>BLOSSOM</strong>
            <small>UNISEX SALON</small>
          </div>
        </div>

        <p>Beauty that makes you bloom.</p>

        <a href="#home" className="instagram">
          <FiInstagram />
        </a>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919535354636"
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
      >
        WhatsApp
      </a>
    </div>
  );
}

export default App;