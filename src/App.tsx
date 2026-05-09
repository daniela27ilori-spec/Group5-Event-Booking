import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import EventDetails from "./pages/EventDetails";
import EventsListing from "./pages/EventsListing";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/events" element={<EventsListing />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
