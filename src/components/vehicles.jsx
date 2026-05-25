import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCars } from "../Api/reservations";
import "./vehicles.css";

function Vehicles() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getAllCars();
        setCars(data);
      } catch (err) {
        console.error("Could not load cars:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  useEffect(() => {
    if (hash && !loading) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [hash, loading]);

  const sections = [
    { id: "sedans", label: "Sedans", filter: "Sedan" },
    { id: "suvs", label: "SUVs", filter: "SUV" },
    { id: "luxury", label: "Luxury", filter: "Luxury" },
    { id: "exotics", label: "Exotics", filter: "Exotic" },
  ];

  if (loading) return (
    <div className="vehicles-page">
      <h1>Available Vehicles</h1>
      <p style={{ textAlign: "center", color: "#aaa" }}>Loading vehicles...</p>
    </div>
  );

  return (
    <div className="vehicles-page">
      <h1>Available Vehicles</h1>

      {sections.map(({ id, label, filter }) => {
        const sectionCars = cars.filter(c => c.type === filter);
        if (sectionCars.length === 0) return null;

        return (
          <section key={id} id={id} className="vehicle-section">
            <div className="section-header">
              <span className="section-badge">{label}</span>
              <h2>{label}</h2>
            </div>
            <div className="vehicle-grid">
              {sectionCars.map((car) => (
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
        );
      })}

    </div>
  );
}

export default Vehicles;