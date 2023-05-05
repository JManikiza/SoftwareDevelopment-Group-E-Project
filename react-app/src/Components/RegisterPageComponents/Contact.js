/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import { InputField, Main, Button, Breadcrumbs, H1 } from "govuk-react";


function Contact() {
  //used state to save value of the name
  const [email, setEmail] = useState("");
  const [validEmail, setValid] = useState(false);
  const [phoneNumber, setMobileNumber] = useState("");
  const [mobileError, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const nhsNumber = location.state.nhsNumber;
  const fName = location.state.fName;
  const sName = location.state.sName;
  const day = location.state.day;
  const month = location.state.month;
  const year = location.state.year;
  const gender = location.state.gender;

  //this method will update the value for the email and check using email regex pattern if the email is valid
  // if the input is valid it will set the email, on the button we verify is the email state is true or false
  //if true -> is equal to valid so we can procced otherwise the button will stay disable
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValid(emailRegex.test(inputValue));
  };

  const handleMobileChange = (e) => {
    const inputValue = e.target.value;
    setMobileNumber(inputValue);
    const MobileRegex = /^((\+44)|(0))\d{10}$/; // regex pattern for UK phone number

    if (!MobileRegex.test(inputValue)) {
      setError('Please enter a valid UK phone number Example: 07123456789');
    } else {
      setError('');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Address", {
      state: {
        nhsNumber,
        fName,
        sName,
        day,
        month,
        year,
        gender,
        email,
        phoneNumber,
      },
    });
    console.log(nhsNumber);
    console.log(fName);
    console.log(sName);
    console.log(gender);
    console.log(email);
    console.log(phoneNumber);
  };

  return (
    <div>
      <Navigation
        pageLink1="/"
        PageName1="home"
        pageLink2="/login"
        PageName2="Login"
        pageLink3="/NhsNumber"
        PageName3="Register"
      />

      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link >NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link >First Name</Breadcrumbs.Link>
          <Breadcrumbs.Link >Surname</Breadcrumbs.Link>
          <Breadcrumbs.Link >Date of birth</Breadcrumbs.Link>
          <Breadcrumbs.Link >Gender</Breadcrumbs.Link>
          <Breadcrumbs.Link>Conctact Details</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <H1>Contact details</H1>
          <InputField value={email} onChange={handleEmailChange}>
            Email
          </InputField>
          <br />
          {mobileError && <p style={{ color: 'red' }}>{mobileError}</p>}
          <InputField
            value={phoneNumber}
            onChange={handleMobileChange}
          >
            Phone Number
          </InputField>
          <br />
          <Button type="submit" disabled={!validEmail} start>
            Save and Continue
          </Button>
        </form>
      </Main>
    </div>
  );
}
export default Contact;
