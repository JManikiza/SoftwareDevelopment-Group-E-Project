// React imports
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout import
import Navigation from "./Components/Navigation";
import FooterNav from "./Components/FooterNav";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";


// Registration page imports
import Registration from "./Pages/Registration";
import FirstName from "./Components/RegisterPageComponents/FirstName";
import Surname from "./Components/RegisterPageComponents/Surname";
import DateOfBirth from "./Components/RegisterPageComponents/DateOfBirth";
import NhsNumber from "./Components/RegisterPageComponents/NhsNumber";
import Gender from "./Components/RegisterPageComponents/Gender";
import Contact from "./Components/RegisterPageComponents/Contact";
import Address from "./Components/RegisterPageComponents/Address";

// Doctor page imports
import DoctorAppointment from "./Pages/DoctorPages/DoctorAppointment";
import DoctorDashBoard from "./Pages/DoctorPages/DoctorDashBoard";
import DoctorViewandUpdate from "./Pages/DoctorPages/DoctorViewandUpdate";


/**
 * Patient page imports 
 * Currently only here until it links to login page or testing purposes
 *  */ 
import Patient from "./Pages/Patient";
import SummaryList from "./Components/PatientPageComponents/SummaryList";

// Custom imports


function App() {
  return (
    <div>
      <Navigation />

      {/* route for the links to different pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/NhsNumber" element={<NhsNumber />} />
        <Route path="/FirstName" element={<FirstName />} />
        <Route path="/Surname" element={<Surname />} />
        <Route path="/DateOfBirth" element={<DateOfBirth />} />
        <Route path="/Gender" element={<Gender />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Address" element={<Address />} />



//----------------------------------------------------------------------------------
        <Route path="/DoctorDashBoard" element={<DoctorDashBoard />} />
        <Route path="/DoctorAppointment" element={<DoctorAppointment />} />
        <Route path="/DoctorViewandUpdate" element={<DoctorViewandUpdate />} />



//-------------------------------------------------------------------
        <Route path="/Patient" element={<Patient />}/>
        <Route path="/Profile" element={<SummaryList />} />

      </Routes>

      <FooterNav />
    </div>
  );
}

export default App;
