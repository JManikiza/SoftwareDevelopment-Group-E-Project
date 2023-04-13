/**
* Author(s) of this code: 
*
* Joven Manikiza
* Wallyson Alves Da Silva
* Mohamed Yusef Mohamed
*
* Please add your names if you have
* partaken in coding this page.
* I would also recommend adding your names above
* the pages you have solely created
*/

// React imports
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout import
import Navigation from "./Components/Navigation";
import FooterNav from "./Components/FooterNav";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";


// Registration page imports
import FirstName from "./Components/RegisterPageComponents/FirstName";
import Surname from "./Components/RegisterPageComponents/Surname";
import DateOfBirth from "./Components/RegisterPageComponents/DateOfBirth";
import NhsNumber from "./Components/RegisterPageComponents/NhsNumber";
import Gender from "./Components/RegisterPageComponents/Gender";
import Contact from "./Components/RegisterPageComponents/Contact";
import Address from "./Components/RegisterPageComponents/Address";
import DetailsSummary from "./Components/RegisterPageComponents/DetailsSummary";

// Doctor page imports
import DoctorAppointment from "./Pages/DoctorPages/DoctorAppointment";
import DoctorDashBoard from "./Pages/DoctorPages/DoctorDashBoard";
import DoctorViewandUpdate from "./Pages/DoctorPages/DoctorViewandUpdate";


/**
 * Patient page imports 
 * Currently only here until it links to login page or testing purposes
 *  */ 
import Patient from "./Pages/PatientPages/Patient";
import Profile from "./Pages/PatientPages/Profile";
import GPServices from "./Pages/PatientPages/GPServices";
import NameChangeStart from "./Components/PatientPageComponents/ProfileChanges/NameChange/NameChangeStart";
import NameChangeCircumstances from "./Components/PatientPageComponents/ProfileChanges/NameChange/NameChangeCircumstances";
import NameChangeDetails from "./Components/PatientPageComponents/ProfileChanges/NameChange/NameChangeDetails";
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
        <Route exact path="/DetailsSummary" element={<DetailsSummary />} />



//----------------------------------------------------------------------------------
        <Route path="/DoctorDashBoard" element={<DoctorDashBoard />} />
        <Route path="/DoctorAppointment" element={<DoctorAppointment />} />
        <Route path="/DoctorViewandUpdate" element={<DoctorViewandUpdate />} />



//-------------------------------------------------------------------
        <Route path="/Patient" element={<Patient />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/GPServices" element={<GPServices />} />
        <Route path="/NameChangeStart" element={<NameChangeStart />} />
        <Route path="/NameChangeCircumstances" element={<NameChangeCircumstances />} />
        <Route path="/NameChangeDetails" element={<NameChangeDetails />} />

      </Routes>

      <FooterNav />
    </div>
  );
}

export default App;
