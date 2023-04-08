// React imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

// Layout import
import Navigation from "./Components/Navigation";
import FooterNav from "./Components/FooterNav";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
// import Registration from "./Pages/Registration";
=======
=======
>>>>>>> Stashed changes

// Registration page imports
import Registration from "./Pages/Registration";
>>>>>>> Stashed changes
import FirstName from "./Components/RegisterPageComponents/FirstName";
import Surname from "./Components/RegisterPageComponents/Surname";
import DateOfBirth from "./Components/RegisterPageComponents/DateOfBirth";
import NhsNumber from "./Components/RegisterPageComponents/NhsNumber";
import Gender from "./Components/RegisterPageComponents/Gender";
import Contact from "./Components/RegisterPageComponents/Contact";
import Address from "./Components/RegisterPageComponents/Address";
<<<<<<< Updated upstream
import DoctorAppointment from "./Pages/DoctorPages/DoctorAppointment";
import DoctorDashBoard from "./Pages/DoctorPages/DoctorDashBoard";
import DoctorViewandUpdate from "./Pages/DoctorPages/DoctorViewandUpdate";
=======

// Patient page imports
import Patient from "./Pages/Patient";
import SummaryList from "./Components/PatientPageComponents/SummaryList";

<<<<<<< Updated upstream

>>>>>>> Stashed changes
=======
// Patient page imports
import Patient from "./Pages/Patient";
import SummaryList from "./Components/PatientPageComponents/SummaryList";


>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <Route path="/DoctorDashBoard" element={<DoctorDashBoard />} />
        <Route path="/DoctorAppointment" element={<DoctorAppointment />} />
        <Route path="/DoctorViewandUpdate" element={<DoctorViewandUpdate />} />
=======
=======
>>>>>>> Stashed changes

        <Route path="/Patient" element={<Patient />}/>
        <Route path="/SummaryList" element={<SummaryList />} />

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      </Routes>

      <FooterNav />
    </div>
  );
}

export default App;
