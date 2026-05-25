import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getAvailableCars } from "../Api/reservations";
import "./Available.css";

function Available() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const pickupDate = searchParams.get("pickupDate");
  const returnDate = searchParams.get("returnDate");
  const location = searchParams.get("location");
  const type = searchParams.get("type");

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const days = Math.ceil(
    (new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24)
  );

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getAvailableCars({ pickupDate, returnDate, type });
        setCars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [pickupDate, returnDate, type]);

  const handleSelect = (car) => {
    navigate("/book", {
      state: { car, pickupDate, returnDate, location, days }
    });
  };

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-NG", {
      weekday: "short", day: "numeric", month: "short", year: "numeric"
    });

  return (
    <div className="available-page">

      <div className="available-header">
        <h1>Available Vehicles</h1>
        <div className="trip-summary">
          <span>📍 {location || "Any location"}</span>
          <span>📅 {formatDate(pickupDate)} → {formatDate(returnDate)}</span>
          <span>🗓 {days} day{days !== 1 ? "s" : ""}</span>
        </div>
      </div>

      {loading && <p className="status-msg">Checking availability...</p>}
      {error && <p className="status-msg error">{error}</p>}

      {!loading && !error && (
        <>
          <p className="results-count">
            {cars.filter(c => c.isAvailable).length} vehicle{cars.filter(c => c.isAvailable).length !== 1 ? "s" : ""} available for your dates
          </p>

          <div className="available-grid">
            {cars.map((car) => (
              <div
                key={car._id}
                className={`vehicle-card ${!car.isAvailable ? "unavailable" : ""}`}
              >
                <div className="card-img-wrapper">
                  <img src={car.image} alt={car.name} />
                  {!car.isAvailable && (
                    <div className="unavailable-overlay">Fully Booked</div>
                  )}
                  {car.isAvailable && (
                    <span className="units-badge">
                      {car.availableUnits} unit{car.availableUnits !== 1 ? "s" : ""} left
                    </span>
                  )}
                </div>

                <div className="vehicle-info">
                  <h3>{car.name}</h3>
                  <p>{car.type}</p>

                  <div className="vehicle-details">
                    <span>{car.seats} Seats</span>
                    <span>₦{car.pricePerDay.toLocaleString()}/day</span>
                  </div>

                  <div className="trip-price">
                    Total: ₦{(car.pricePerDay * days).toLocaleString()}
                  </div>

                  <button
                    onClick={() => handleSelect(car)}
                    disabled={!car.isAvailable}
                    className={!car.isAvailable ? "btn-disabled" : ""}
                  >
                    {car.isAvailable ? "Book Now" : "Unavailable"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Available;