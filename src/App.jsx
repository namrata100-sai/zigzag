import "./App.css";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          Rachana's <span>L'Oréal Salon</span>
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="book-btn">
          Book Appointment
        </button>
      </nav>

      <section className="hero">

        <div className="overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h3>Luxury Hair • Beauty • Makeup</h3>

          <h1>
            Premium Salon <br />
            Experience in Belagavi
          </h1>

          <p>
            Professional Hair Styling, Bridal Makeup,
            Skin Care & Beauty Services.
          </p>

          <div className="buttons">
            <button className="gold-btn">
              Book Now
            </button>

            <button className="outline-btn">
              View Services
            </button>
          </div>

        </motion.div>

        <div className="scroll">
          <FaArrowDown />
        </div>

      </section>
    </>
  );
}

export default App;