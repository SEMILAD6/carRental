import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllCars } from "../api/reservations";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  const [reservation, setReservation] = useState({
    location: "",
    pickupDate: "",
    returnDate: "",
    vehicleType: ""
  });

  const [featuredCars, setFeaturedCars] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getAllCars();
        // Just show first 5 as featured
        setFeaturedCars(data.slice(0, 5));
      } catch (err) {
        console.error("Could not load featured cars:", err);
      }
    };
    fetchCars();
  }, []);

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!reservation.pickupDate || !reservation.returnDate) {
      setError("Please select both pickup and return dates.");
      return;
    }

    if (new Date(reservation.returnDate) <= new Date(reservation.pickupDate)) {
      setError("Return date must be after pickup date.");
      return;
    }

    const params = new URLSearchParams({
      pickupDate: reservation.pickupDate,
      returnDate: reservation.returnDate,
      location: reservation.location,
    });

    if (reservation.vehicleType) params.append("type", reservation.vehicleType);

    navigate(`/available?${params}`);
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="home-text">

          <h1>Welcome to Godson Car Rental</h1>
          <h2>Where you can get a little bit of luxury at an affordable price</h2>

          <form className="reservation-box" onSubmit={handleSubmit}>
            <p className="res-label">Reserve Your Vehicle</p>

            {error && <p className="res-error">{error}</p>}

            <div className="res-grid">

              <div className="res-field">
                <label>Pick-up Location</label>
                <select name="location" value={reservation.location} onChange={handleChange}>
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

              <div className="res-field">
                <label>Pick-up Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={reservation.pickupDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={handleChange}
                />
              </div>

              <div className="res-field">
                <label>Return Date</label>
                <input
                  type="date"
                  name="returnDate"
                  value={reservation.returnDate}
                  min={reservation.pickupDate || new Date().toISOString().split("T")[0]}
                  onChange={handleChange}
                />
              </div>

              <div className="res-field">
                <label>Vehicle Type</label>
                <select name="vehicleType" value={reservation.vehicleType} onChange={handleChange}>
                  <option value="">Any Type</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Exotic">Exotic</option>
                </select>
              </div>

            </div>

            <button type="submit" className="res-btn">Select My Car →</button>
          </form>

        </div>
      </section>

      <section className="vehicles-section">
        <div className="vehicles-header">
          <h2>Featured Vehicles</h2>
          <Link to="/vehicles">
            <button className="view-all-btn">View All Vehicles</button>
          </Link>
        </div>

        <div className="vehicle-grid">
          {featuredCars.map((car) => (
            <div key={car._id} className="vehicle-card">
              <img src={`src/assets/${car.image}`} alt={car.name} />
              <div className="vehicle-info">
                <h3>{car.name}</h3>
                <p>{car.type}</p>
                <div className="vehicle-details">
                  <span>{car.seats} Seats</span>
                  <span>₦{car.pricePerDay.toLocaleString()}/day</span>
                </div>
                <button onClick={() => navigate(`/schedule/${car._id}`)}>
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;