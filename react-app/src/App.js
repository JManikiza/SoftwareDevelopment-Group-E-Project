// React imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import FooterNav from "./Components/FooterNav";
import HomePage from "./Pages/HomePage";
import Registration from "./Pages/Registration";
import FirstName from "./Components/RegisterPageComponents/FirstName";
import Surname from "./Components/RegisterPageComponents/Surname";
import DateOfBirth from "./Components/RegisterPageComponents/DateOfBirth";
import NationalIN from "./Components/RegisterPageComponents/NationalIN";
import Gender from "./Components/RegisterPageComponents/Gender";
import Contact from "./Components/RegisterPageComponents/Contact";
import Address from "./Components/RegisterPageComponents/Address";

// Custom imports

function App() {
  return (
    <div>
      <Navigation />

      {/* route for the links to different pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FirstName" element={<FirstName />} />
        <Route path="/Surname" element={<Surname />} />
        <Route path="/DateOfBirth" element={<DateOfBirth />} />
        <Route path="/NationalIN" element={<NationalIN />} />
        <Route path="/Gender" element={<Gender />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Address" element={<Address />} />
      </Routes>

      <FooterNav />
    </div>
  );
}

export default App;
