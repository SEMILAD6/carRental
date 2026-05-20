import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>GODSON CAR RENTAL</h3>
          <p>
            Founded with a passion for excellence, Godson Car Rental has been
            delivering premium driving experiences across Nigeria since 2018.
            We believe luxury should be accessible — every journey deserves a
            vehicle that matches your ambition.
          </p>
        </div>

        {/* Quick Links */}
       <div className="footer-link">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/vehicles">Vehicles</Link></li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>

        {/* Vehicle Types */}
        <div className="footer-links">
          <h4>Vehicle Types</h4>
          <ul>
            <li><Link to="/vehicles">Sedans</Link></li>
            <li><Link to="/vehicles">SUVs</Link></li>
            <li><Link to="/vehicles">Luxury</Link></li>
            <li><Link to="/vehicles">Exotics</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-links">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>14 Admiralty Way, Lekki Phase 1, Lagos</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>+234 801 234 5678</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <span>hello@godsoncarrental.com</span>
          </div>
        </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Godson Car Rental. All rights reserved.</p>
        <div className="footer-socials">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Twitter">X</a>
          <a href="#" aria-label="WhatsApp">WA</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;