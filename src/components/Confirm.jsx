import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Confirm.css";

function Confirm() {
  const { state } = useLocation();
  const { reservation } = state || {};

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-NG", {
      weekday: "short", day: "numeric", month: "short", year: "numeric"
    });

  if (!reservation) return (
    <div className="confirm-page">
      <p>No reservation found. <Link to="/">Go back home</Link></p>
    </div>
  );

  return (
    <div className="confirm-page">
      <div className="confirm-card">

        <div className="confirm-icon">✓</div>
        <h1>Booking Confirmed!</h1>
        <p className="confirm-subtitle">
          Your reservation has been received. We'll contact you shortly to finalize.
        </p>

        <div className="ref-box">
          <span>Reference Number</span>
          <strong>{reservation.referenceNumber}</strong>
        </div>

        <div className="confirm-details">
          <div className="confirm-row">
            <span>Vehicle</span>
            <span>{reservation.car}</span>
          </div>
          <div className="confirm-row">
            <span>Pick-up Location</span>
            <span>{reservation.pickupLocation}</span>
          </div>
          <div className="confirm-row">
            <span>Pick-up Date</span>
            <span>{formatDate(reservation.pickupDate)}</span>
          </div>
          <div className="confirm-row">
            <span>Return Date</span>
            <span>{formatDate(reservation.returnDate)}</span>
          </div>
          <div className="confirm-row">
            <span>Status</span>
            <span className="status-badge">{reservation.status}</span>
          </div>
          <div className="confirm-row total">
            <span>Total Price</span>
            <span>₦{reservation.totalPrice.toLocaleString()}</span>
          </div>
        </div>

        <p className="save-note">
          Save your reference number to track or manage your booking.
        </p>

        <Link to="/">
          <button className="home-btn">Back to Home</button>
        </Link>

      </div>
    </div>
  );
}

export default Confirm;