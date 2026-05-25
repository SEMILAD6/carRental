import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCarById, getCarReservations } from "../Api/reservations";
import "./Schedule.css";


function Schedule() {
  const { carId } = useParams();
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locationError, setLocationError] = useState("");
  const [car, setCar] = useState(null);
  const [bookedRanges, setBookedRanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [dateError, setDateError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [carData, reservations] = await Promise.all([
          getCarById(carId),
          getCarReservations(carId),
        ]);
        setCar(carData);
        setBookedRanges(reservations);
      } catch (err) {
        setError("Could not load vehicle details.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [carId]);

  const isDateBooked = (dateStr) => {
    const date = new Date(dateStr);
    return bookedRanges.some((r) => {
      const pickup = new Date(r.pickupDate);
      const ret = new Date(r.returnDate);
      return date >= pickup && date < ret;
    });
  };

  const handlePickupChange = (e) => {
    setPickupDate(e.target.value);
    setReturnDate("");
    setDateError("");
  };

  const handleReturnChange = (e) => {
    setReturnDate(e.target.value);
    setDateError("");
  };

   const handleContinue = () => {
  setDateError("");

  if (!selectedLocation) {
    setDateError("Please select a pickup location.");
    return;
  }

  if (!pickupDate || !returnDate) {
    setDateError("Please select both pickup and return dates.");
    return;
  }

  if (new Date(returnDate) <= new Date(pickupDate)) {
    setDateError("Return date must be after pickup date.");
    return;
  }

  if (isDateBooked(pickupDate) || isDateBooked(returnDate)) {
    setDateError("One or more of your selected dates are already booked. Please choose different dates.");
    return;
  }

  navigate("/book", {
    state: {
      car,
      pickupDate,
      returnDate,
      location: selectedLocation, // ← now passing the real location
      days: Math.ceil(
        (new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24)
      ),
    },
  });
 };

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-NG", {
      day: "numeric", month: "short", year: "numeric"
    });

  if (loading) return (
    <div className="schedule-page">
      <p className="schedule-status">Loading vehicle details...</p>
    </div>
  );

  if (error) return (
    <div className="schedule-page">
      <p className="schedule-status error">{error}</p>
    </div>
  );

  return (
    <div className="schedule-page">

      {/* Car Details */}
      <div className="schedule-hero">
        <img src={`src/assets/${car.image}`} alt={car.name} />
        <div className="schedule-hero-info">
          <p className="car-type-label">{car.type}</p>
          <h1>{car.name}</h1>
          <div className="car-meta">
            <span>{car.seats} Seats</span>
            <span>₦{car.pricePerDay.toLocaleString()}/day</span>
            <span>{car.totalUnits} unit{car.totalUnits !== 1 ? "s" : ""} total</span>
          </div>
        </div>
      </div>

      <div className="schedule-body">

        {/* Booked Periods */}
        <div className="booked-periods">
          <h2>Booked Periods</h2>
          {bookedRanges.length === 0 ? (
            <p className="no-bookings">No bookings yet — this vehicle is fully available.</p>
          ) : (
            <div className="booked-list">
              {bookedRanges.map((r, i) => (
                <div key={i} className="booked-item">
                  <div className="booked-dot" />
                  <div>
                    <p>{formatDate(r.pickupDate)} → {formatDate(r.returnDate)}</p>
                    <span className={`booked-status ${r.status}`}>{r.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Date Picker */}
        <div className="date-picker-box">
          <h2>Select Your Dates</h2>

          {dateError && <p className="date-error">{dateError}</p>}

          <div className="date-fields">
            <div className="date-field">
              <label>Pick-up Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">Select location</option>
                <optgroup label="Lagos">
                  <option value="Lekki Phase 1">Lekki Phase 1</option>
                  <option value="Lekki Phase 2">Lekki Phase 2</option>
                  <option value="Ajah">Ajah</option>
                  <option value="Chevron">Chevron</option>
                  <option value="Victoria Island">Victoria Island</option>
                  <option value="Ikoyi">Ikoyi</option>
                  <option value="Surulere">Surulere</option>
                  <option value="Ikeja">Ikeja</option>
                  <option value="Ikeja GRA">Ikeja GRA</option>
                  <option value="Apapa">Apapa</option>
                </optgroup>
                <optgroup label="Abuja">
                  <option value="Wuse">Wuse</option>
                  <option value="Maitama">Maitama</option>
                  <option value="Garki">Garki</option>
                  <option value="Asokoro">Asokoro</option>
                </optgroup>
                <optgroup label="Other Cities">
                  <option value="Port Harcourt">Port Harcourt</option>
                  <option value="Ibadan">Ibadan</option>
                  <option value="Enugu">Enugu</option>
                </optgroup>
              </select>
            </div>

  
            
            <div className="date-field">
              <label>Pick-up Date</label>
              <input
                type="date"
                value={pickupDate}
                min={today}
                onChange={handlePickupChange}
              />
            </div>

            <div className="date-field">
              <label>Return Date</label>
              <input
                type="date"
                value={returnDate}
                min={pickupDate || today}
                onChange={handleReturnChange}
              />
            </div>
          </div>

          {pickupDate && returnDate && (
            <div className="date-summary">
              <span>
                {Math.ceil(
                  (new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24)
                )} day(s)
              </span>
              <span>
                Total: ₦{(
                  car.pricePerDay *
                  Math.ceil((new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24))
                ).toLocaleString()}
              </span>
            </div>
          )}

          <button className="continue-btn" onClick={handleContinue}>
            Continue to Book →
          </button>
        </div>

      </div>
    </div>
  );
}

export default Schedule;