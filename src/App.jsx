import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/home.jsx";
import Vehicles from "./components/vehicles.jsx";
import Footer from "./components/footer.jsx";
import Available from "./components/Available.jsx";
import Booking from "./components/Booking.jsx";



function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/available" element={<Available />} />
        <Route path="/book" element={<Booking />} />
        
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default App;