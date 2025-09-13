import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import OurFleet from "../pages/OurFleet";
import OurClient from "../pages/OurClient";
import Careers from "../pages/Careers";
import Enquiry from "../pages/Enquiry";
import Contact from "../pages/Contact";

import CarRental from "../pages/CarRental";
import BusRental from "../pages/BusRental";
import BusinessTransport from "../pages/BusinessTransport";
import OnCallTaxi from "../pages/OnCallTaxi";
import EventOrganizer from "../pages/EventOrganizer";

const WebPrivateRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/fleet" element={<OurFleet />} />
      <Route path="/client" element={<OurClient />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/contact" element={<Contact />} />

      {/* Service sub-pages */}
      <Route path="/car-rental" element={<CarRental />} />
      <Route path="/bus-rental" element={<BusRental />} />
      <Route path="/bts" element={<BusinessTransport />} />
      <Route path="/on-call-taxi" element={<OnCallTaxi />} />
      <Route path="/event-organizer" element={<EventOrganizer />} />
    </Routes>
  );
};

export default WebPrivateRoute;
