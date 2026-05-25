import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <p className="about-tag">Who We Are</p>
        <h1>Driving Excellence Across Nigeria</h1>
        <p className="about-subtitle">
          Founded in 2018, Godson Car Rental was built on a single belief —
          that luxury should not be a privilege. Every Nigerian deserves to
          travel in comfort, style, and confidence.
        </p>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="stat-card">
          <h2>500+</h2>
          <p>Trips Completed</p>
        </div>
        <div className="stat-card">
          <h2>16+</h2>
          <p>Premium Vehicles</p>
        </div>
        <div className="stat-card">
          <h2>6+</h2>
          <p>Cities Covered</p>
        </div>
        <div className="stat-card">
          <h2>98%</h2>
          <p>Customer Satisfaction</p>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Godson Car Rental started in Lekki, Lagos with just three vehicles
            and a vision. Our founder, frustrated by the lack of reliable and
            affordable premium car hire in Nigeria, decided to build the
            solution himself.
          </p>
          <p>
            Seven years later, we operate across Lagos, Abuja, Port Harcourt,
            Ibadan, and Enugu — with a fleet that includes everything from
            everyday sedans to supercars. We've served corporate executives,
            wedding parties, tourists, and everyday Nigerians who simply want
            to arrive in style.
          </p>
          <p>
            We are not just a car rental company. We are your mobility partner
            — reliable, professional, and always on time.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <div>
              <h3>Excellence</h3>
              <p>Every vehicle in our fleet is maintained to the highest standard before every trip.</p>
            </div>
          </div>

          <div className="value-item">
            <div>
              <h3>Reliability</h3>
              <p>We show up. On time, every time. Your schedule is our priority.</p>
            </div>
          </div>

          <div className="value-item">
            <div>
              <h3>Accessibility</h3>
              <p>Luxury driving experiences at prices that make sense for real people.</p>
            </div>
          </div>

          <div className="value-item">
            <div>
              <h3>Safety</h3>
              <p>All vehicles are fully insured and regularly serviced for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="about-cta">
        <h2>Ready to Experience the Difference?</h2>
        <p>Browse our fleet and make a reservation in minutes.</p>
        <Link to="/vehicles">
          <button className="about-cta-btn">Browse Vehicles</button>
        </Link>
      </section>

    </div>
  );
}

export default About;