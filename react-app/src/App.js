/**
 * Author(s) of this code:
 *
 * Joven Manikiza
 * Wallyson Alves Da Silva
 * Mohamed Yusef Mohamed
 * Jimmy Le
 *
 * Please add your names if you have
 * partaken in coding this page.
 * I would also recommend adding your names above
 * the pages you have solely created
 */

// React imports
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Layout import
import FooterNav from "./Components/FooterNav";
import HomePage from "./Pages/HomePage";

//Login page imports
import Login from "./Pages/Login";
import StaffLogin from "./Pages/StaffLogin";
import AuthContext from "./Components/LoginComponents/AuthContext";

// Registration page imports
import FirstName from "./Components/RegisterPageComponents/FirstName";
import Surname from "./Components/RegisterPageComponents/Surname";
import DateOfBirth from "./Components/RegisterPageComponents/DateOfBirth";
import NhsNumber from "./Components/RegisterPageComponents/NhsNumber";
import Gender from "./Components/RegisterPageComponents/Gender";
import Contact from "./Components/RegisterPageComponents/Contact";
import Address from "./Components/RegisterPageComponents/Address";
import Password from "./Components/RegisterPageComponents/Password";
import DetailsSummary from "./Components/RegisterPageComponents/DetailsSummary";
import RegistrationComplete from "./Components/RegisterPageComponents/RegistrationComplete";

// Doctor page imports
import DoctorAppointment from "./Pages/DoctorPages/DoctorAppointment";
import DoctorViewandUpdate from "./Pages/DoctorPages/DoctorViewandUpdate";

/**
 * Patient page imports
 * Currently only here until it links to login page or testing purposes
 *  */
import Patient from "./Pages/PatientPages/Patient";
import Profile from "./Pages/PatientPages/Profile";
import GPServices from "./Pages/PatientPages/GPServices";
import Application from "./Components/PatientPageComponents/ProfileChanges/Application";

import NameChangeStart from "./Components/PatientPageComponents/ProfileChanges/NameChange/NameChangeStart";
import NameChangeDetails from "./Components/PatientPageComponents/ProfileChanges/NameChange/NameChangeDetails";
import NameChangeBothNames from "./Components/PatientPageComponents/ProfileChanges/NameChange/NameChangeBothNames";
import NameChangeConfirmation from "./Components/PatientPageComponents/ProfileChanges/NameChange/NameChangeConfirmation";

import AddressChangeStart from "./Components/PatientPageComponents/ProfileChanges/AddressChange/AddressChangeStart";
import AddressChangeDetails from "./Components/PatientPageComponents/ProfileChanges/AddressChange/AddressChangeDetails";
import AddressChangeEnter from "./Components/PatientPageComponents/ProfileChanges/AddressChange/AddressChangeEnter";
import AddressChangeConfirmation from "./Components/PatientPageComponents/ProfileChanges/AddressChange/AddressChangeConfirmation";

import DOBChangeStart from "./Components/PatientPageComponents/ProfileChanges/DOBChanges/DOBChangeStart";
import DOBChangeDetails from "./Components/PatientPageComponents/ProfileChanges/DOBChanges/DOBChangeDetails";
import DOBChangeEnter from "./Components/PatientPageComponents/ProfileChanges/DOBChanges/DOBChangeEnter";
import DOBChangeConfirmation from "./Components/PatientPageComponents/ProfileChanges/DOBChanges/DOBChangeConfirmation";

import EmailChangeStart from "./Components/PatientPageComponents/ProfileChanges/EmailChange/EmailChangeStart";
import EmailChangeDetails from "./Components/PatientPageComponents/ProfileChanges/EmailChange/EmailChangeDetails";
import EmailChangeEnter from "./Components/PatientPageComponents/ProfileChanges/EmailChange/EmailChangeEnter";
import EmailChangeConfirmation from "./Components/PatientPageComponents/ProfileChanges/EmailChange/EmailChangeConfirmation";

import GenderChangeStart from "./Components/PatientPageComponents/ProfileChanges/GenderChange/GenderChangeStart";
import GenderChangeDetails from "./Components/PatientPageComponents/ProfileChanges/GenderChange/GenderChangeDetails";
import GenderChangeEnter from "./Components/PatientPageComponents/ProfileChanges/GenderChange/GenderChangeEnter";
import GenderChangeConfirmation from "./Components/PatientPageComponents/ProfileChanges/GenderChange/GenderChangeConfirmation";

import NumberChangeStart from "./Components/PatientPageComponents/ProfileChanges/NumberChange/NumberChangeStart";
import NumberChangeDetails from "./Components/PatientPageComponents/ProfileChanges/NumberChange/NumberChangeDetails";
import NumberChangeEnter from "./Components/PatientPageComponents/ProfileChanges/NumberChange/NumberChangeEnter";
import NumberChangeConfirmation from "./Components/PatientPageComponents/ProfileChanges/NumberChange/NumberChangeConfirmation";

import PasswordChangeStart from "./Components/PatientPageComponents/ProfileChanges/PasswordChange/PasswordChangeStart";
import PasswordChangeDetails from "./Components/PatientPageComponents/ProfileChanges/PasswordChange/PasswordChangeDetails";
import PasswordChangeEnter from "./Components/PatientPageComponents/ProfileChanges/PasswordChange/PasswordChangeEnter";
import PasswordChangeConfirmation from "./Components/PatientPageComponents/ProfileChanges/PasswordChange/PasswordChangeConfirmation";

import BookConfirm from "./Components/PatientPageComponents/GPComponents/BookAppointment/BookConfirm";

// Custom imports

import Temp from "./Pages/Temp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {/* route for the links to different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stafflogin" element={<StaffLogin />} />
          //----------------------------------------------------------------------------------
          <Route path="/NhsNumber" element={<NhsNumber />} />
          <Route path="/FirstName" element={<FirstName />} />
          <Route path="/Surname" element={<Surname />} />
          <Route path="/DateOfBirth" element={<DateOfBirth />} />
          <Route path="/Gender" element={<Gender />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Address" element={<Address />} />
          <Route path="/Password" element={<Password />} />
          <Route exact path="/DetailsSummary" element={<DetailsSummary />} />
          <Route
            path="/RegistrationComplete"
            element={<RegistrationComplete />}
          />
          //----------------------------------------------------------------------------------
          <Route path="/DoctorAppointment" element={<DoctorAppointment />} />
          <Route
            path="/DoctorViewandUpdate"
            element={<DoctorViewandUpdate />}
          />
          //-------------------------------------------------------------------
          <Route path="/Patient" element={<Patient />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/GPServices/*" element={<GPServices />} />
          <Route path="/Application" element={<Application />} />
          <Route path="/NameChangeStart" element={<NameChangeStart />} />
          <Route path="/NameChangeDetails" element={<NameChangeDetails />} />

          <Route
            path="/NameChangeBothNames"
            element={<NameChangeBothNames />}
          />
          <Route
            path="/NameChangeConfirmation"
            element={<NameChangeConfirmation />}
          />
          <Route path="/AddressChangeStart" element={<AddressChangeStart />} />
          <Route
            path="/AddressChangeDetails"
            element={<AddressChangeDetails />}
          />
          <Route path="/AddressChangeEnter" element={<AddressChangeEnter />} />
          <Route
            path="/AddressChangeConfirmation"
            element={<AddressChangeConfirmation />}
          />
          <Route path="/DOBChangeStart" element={<DOBChangeStart />} />
          <Route path="/DOBChangeDetails" element={<DOBChangeDetails />} />
          <Route path="/DOBChangeEnter" element={<DOBChangeEnter />} />
          <Route
            path="/DOBChangeConfirmation"
            element={<DOBChangeConfirmation />}
          />
          <Route path="/EmailChangeStart" element={<EmailChangeStart />} />
          <Route path="/EmailChangeDetails" element={<EmailChangeDetails />} />
          <Route path="/EmailChangeEnter" element={<EmailChangeEnter />} />
          <Route
            path="/EmailChangeConfirmation"
            element={<EmailChangeConfirmation />}
          />
          <Route path="/GenderChangeStart" element={<GenderChangeStart />} />
          <Route
            path="/GenderChangeDetails"
            element={<GenderChangeDetails />}
          />
          <Route path="/GenderChangeEnter" element={<GenderChangeEnter />} />
          <Route
            path="/GenderChangeConfirmation"
            element={<GenderChangeConfirmation />}
          />
          <Route path="/NumberChangeStart" element={<NumberChangeStart />} />
          <Route
            path="/NumberChangeDetails"
            element={<NumberChangeDetails />}
          />
          <Route path="/NumberChangeEnter" element={<NumberChangeEnter />} />
          <Route
            path="/NumberChangeConfirmation"
            element={<NumberChangeConfirmation />}
          />
          <Route
            path="/PasswordChangeStart"
            element={<PasswordChangeStart />}
          />
          <Route
            path="/PasswordChangeDetails"
            element={<PasswordChangeDetails />}
          />
          <Route
            path="/PasswordChangeEnter"
            element={<PasswordChangeEnter />}
          />
          <Route
            path="/PasswordChangeConfirmation"
            element={<PasswordChangeConfirmation />}
          />
          <Route path="/BookConfirm" element={<BookConfirm/>} />
          //-------------------------------------------------------------------
          <Route path="/temp" element={<Temp />} />
        </Routes>

        <FooterNav />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
