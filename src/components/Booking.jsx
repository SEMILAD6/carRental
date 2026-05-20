import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createReservation } from "../api/reservations";
import "./Booking.css";

function Booking() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { car, pickupDate, returnDate, location, days } = state || {};

  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await createReservation({
        carId: car._id,
        customerName: form.customerName,
        customerEmail: form.customerEmail,
        customerPhone: form.customerPhone,
        pickupLocation: location,
        pickupDate,
        returnDate,
      });

      navigate("/confirmation", { state: { reservation: result.reservation } });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-NG", {
      weekday: "short", day: "numeric", month: "short", year: "numeric"
    });

  if (!car) return (
    <div className="booking-page">
      <p>No car selected. <a href="/">Go back home</a></p>
    </div>
  );

  return (
    <div className="booking-page">
      <div className="booking-container">

        <div className="booking-summary">
          <h2>Your Selection</h2>
          <img src={`src/assets/${car.image}`} alt={car.name} />
          <h3>{car.name}</h3>
          <p>{car.type} · {car.seats} Seats</p>

          <div className="summary-details">
            <div className="summary-row">
              <span>Pick-up</span>
              <span>{formatDate(pickupDate)}</span>
            </div>
            <div className="summary-row">
              <span>Return</span>
              <span>{formatDate(returnDate)}</span>
            </div>
            <div className="summary-row">
              <span>Location</span>
              <span>{location}</span>
            </div>
            <div className="summary-row">
              <span>Duration</span>
              <span>{days} day{days !== 1 ? "s" : ""}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₦{(car.pricePerDay * days).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="booking-form-side">
          <h2>Your Details</h2>

          {error && <p className="form-error">{error}</p>}

          <form onSubmit={handleSubmit}>

            <div className="form-field">
              <label>Full Name</label>
              <input
                type="text"
                name="customerName"
                placeholder="e.g. Godson Chukwu"
                value={form.customerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Email Address</label>
              <input
                type="email"
                name="customerEmail"
                placeholder="e.g. godson@email.com"
                value={form.customerEmail}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Phone Number</label>
              <input
                type="tel"
                name="customerPhone"
                placeholder="e.g. 08012345678"
                value={form.customerPhone}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="confirm-btn" disabled={loading}>
              {loading ? "Processing..." : "Confirm Reservation →"}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Booking;