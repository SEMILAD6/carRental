import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./vehicles.css";

function Vehicles() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [hash]);

  return (
    <div className="vehicles-page">
      <h1>Available Vehicles</h1>

      {/* ── SEDANS ── */}
      <section id="sedans" className="vehicle-section">
        <div className="section-header">
          <span className="section-badge">Sedans</span>
          <h2>Sedans</h2>
        </div>
        <div className="vehicle-grid">

          <div className="vehicle-card">
            <img src="src/assets/toyota-camry.jpg" alt="Toyota Camry" />
            <div className="vehicle-info">
              <h3>Toyota Camry</h3>
              <p>Sedan</p>
              <div className="vehicle-details">
                <span>4 Seats</span>
                <span>₦70,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="vehicle-card">
            <img src="src/assets/nissan-altima.jpg" alt="Nissan Altima" />
            <div className="vehicle-info">
              <h3>Nissan Altima</h3>
              <p>Sedan</p>
              <div className="vehicle-details">
                <span>4 Seats</span>
                <span>₦75,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

        </div>
      </section>

      {/* ── SUVs ── */}
      <section id="suvs" className="vehicle-section">
        <div className="section-header">
          <span className="section-badge">SUVs</span>
          <h2>SUVs</h2>
        </div>
        <div className="vehicle-grid">

          <div className="vehicle-card">
            <img src="src/assets/lexus-gx-460.jpg" alt="Lexus GX 460" />
            <div className="vehicle-info">
              <h3>Lexus GX 460</h3>
              <p>SUV</p>
              <div className="vehicle-details">
                <span>7 Seats</span>
                <span>₦220,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="vehicle-card">
            <img src="src/assets/honda-crv.jpeg" alt="Honda CR-V" />
            <div className="vehicle-info">
              <h3>Honda CR-V</h3>
              <p>SUV</p>
              <div className="vehicle-details">
                <span>7 Seats</span>
                <span>₦90,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="vehicle-card">
            <img src="src/assets/toyota-prado.jpg" alt="Toyota Prado" />
            <div className="vehicle-info">
              <h3>Toyota Prado</h3>
              <p>SUV</p>
              <div className="vehicle-details">
                <span>7 Seats</span>
                <span>₦180,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="vehicle-card">
            <img src="src/assets/hyundai-tucson.jpg" alt="Hyundai Tucson" />
            <div className="vehicle-info">
              <h3>Hyundai Tucson</h3>
              <p>SUV</p>
              <div className="vehicle-details">
                <span>5 Seats</span>
                <span>₦85,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="vehicle-card">
            <img src="src/assets/kia-sportage.jpg" alt="Kia Sportage" />
            <div className="vehicle-info">
              <h3>Kia Sportage</h3>
              <p>SUV</p>
              <div className="vehicle-details">
                <span>5 Seats</span>
                <span>₦80,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

        </div>
      </section>

      {/* ── LUXURY ── */}
      <section id="luxury" className="vehicle-section">
        <div className="section-header">
          <span className="section-badge">Luxury</span>
          <h2>Luxury</h2>
        </div>
        <div className="vehicle-grid">

          <div className="vehicle-card">
            <img src="src/assets/merc-c-class.jpg" alt="Mercedes C-Class" />
            <div className="vehicle-info">
              <h3>Mercedes C-Class</h3>
              <p>Luxury Sedan</p>
              <div className="vehicle-details">
                <span>4 Seats</span>
                <span>₦180,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="vehicle-card">
            <img src="src/assets/bmw-x5.jpg" alt="BMW X5" />
            <div className="vehicle-info">
              <h3>BMW X5</h3>
              <p>Luxury SUV</p>
              <div className="vehicle-details">
                <span>5 Seats</span>
                <span>₦250,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="vehicle-card">
            <img src="src/assets/audi-a6.jpg" alt="Audi A6" />
            <div className="vehicle-info">
              <h3>Audi A6</h3>
              <p>Luxury Sedan</p>
              <div className="vehicle-details">
                <span>4 Seats</span>
                <span>₦210,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="vehicle-card">
            <img src="src/assets/range-rover-sport.jpg" alt="Range Rover Sport" />
            <div className="vehicle-info">
              <h3>Range Rover Sport</h3>
              <p>Luxury SUV</p>
              <div className="vehicle-details">
                <span>5 Seats</span>
                <span>₦300,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="vehicle-card">
            <img src="src/assets/mercedes-gle.jpg" alt="Mercedes GLE" />
            <div className="vehicle-info">
              <h3>Mercedes GLE</h3>
              <p>Luxury SUV</p>
              <div className="vehicle-details">
                <span>5 Seats</span>
                <span>₦280,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="vehicle-card">
            <img src="src/assets/porsche-cayenne.jpg" alt="Porsche Cayenne" />
            <div className="vehicle-info">
              <h3>Porsche Cayenne</h3>
              <p>Luxury SUV</p>
              <div className="vehicle-details">
                <span>5 Seats</span>
                <span>₦450,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

        </div>
      </section>

      {/* ── EXOTICS ── */}
      <section id="exotics" className="vehicle-section">
        <div className="section-header">
          <span className="section-badge">Exotics</span>
          <h2>Exotics</h2>
        </div>
        <div className="vehicle-grid">

          <div className="vehicle-card">
            <img src="src/assets/ferrari-sf90.jpg" alt="Ferrari SF90" />
            <div className="vehicle-info">
              <h3>Ferrari SF90</h3>
              <p>Supercar</p>
              <div className="vehicle-details">
                <span>2 Seats</span>
                <span>₦1,500,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="vehicle-card">
            <img src="src/assets/lamborghini-huracan.jpg" alt="Lamborghini Huracán" />
            <div className="vehicle-info">
              <h3>Lamborghini Huracán</h3>
              <p>Exotic</p>
              <div className="vehicle-details">
                <span>2 Seats</span>
                <span>₦1,700,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

          <div className="vehicle-card">
            <img src="src/assets/rolls-royce-ghost.jpg" alt="Rolls Royce Ghost" />
            <div className="vehicle-info">
              <h3>Rolls Royce Ghost</h3>
              <p>Ultra Luxury</p>
              <div className="vehicle-details">
                <span>4 Seats</span>
                <span>₦2,000,000/day</span>
              </div>
              <button>Rent Now</button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Vehicles;