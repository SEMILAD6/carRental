import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          GODSON <span>CAR RENTAL</span>
        </Link>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/vehicles" onClick={() => setMenuOpen(false)}>Vehicles</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <button
            className="navbar-cta"
            onClick={() => handleNavigate("/vehicles")}
          >
            Book Now
          </button>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;