import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/home.jsx";
import Navbar from "./components/Navbar.jsx";
import Vehicles from "./components/vehicles.jsx";
import Footer from "./components/footer.jsx";
import Available from "./components/Available.jsx";
import Booking from "./components/Booking.jsx";
import Confirm from "./components/Confirm.jsx";
import Schedule from "./components/Schedule.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";



function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/available" element={<Available />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/schedule/:carId" element={<Schedule />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default App;