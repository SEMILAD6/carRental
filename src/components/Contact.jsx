import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <p className="contact-tag">Get In Touch</p>
        <h1>We're Here to Help</h1>
        <p className="contact-subtitle">
          Have a question about a booking, a specific vehicle, or our services?
          Reach out and we'll get back to you as soon as possible.
        </p>
      </section>

      <div className="contact-body">

        {/* CONTACT INFO */}
        <div className="contact-info">

          <div className="info-card">
            <span className="info-icon">📍</span>
            <div>
              <h3>Head Office</h3>
              <p>14 Admiralty Way, Lekki Phase 1, Lagos</p>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">📞</span>
            <div>
              <h3 style={{ marginLeft: "54px" }}>Phone</h3>
              <p style={{ marginLeft: "54px" }}>+234 801 234 5678</p>
              <p style={{ marginLeft: "54px" }}>+234 802 345 6789</p>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>hello@godsoncarrental.com</p>
              <p>bookings@godsoncarrental.com</p>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">🕐</span>
            <div>
              <h3>Working Hours</h3>
              <p>Monday – Friday: 8am – 8pm</p>
              <p>Saturday – Sunday: 9am – 6pm</p>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">📱</span>
            <div>
              <h3 style={{ marginLeft: "50px" }}>WhatsApp</h3>
              <p style={{ marginLeft: "50px" }}>+234 801 234 5678</p>
            </div>
          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="contact-form-box">
          <h2>Send Us a Message</h2>

          {submitted ? (
            <div className="form-success">
              <span>✓</span>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="form-field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label>Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Booking Inquiry">Booking Inquiry</option>
                    <option value="Vehicle Information">Vehicle Information</option>
                    <option value="Existing Reservation">Existing Reservation</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="send-btn">
                Send Message →
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

export default Contact;