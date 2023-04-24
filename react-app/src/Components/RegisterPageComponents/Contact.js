/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import {
  InputField,
  Heading,
  Main,
  Button,
  Breadcrumbs,
  H1,
} from "govuk-react";

function Contact() {
  //used state to save value of the name
  const [email, setEmail] = useState("");
  const [phoneNumber, setNumber] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const nhsNumber = location.state.nhsNumber;
  const fName = location.state.fName;
  const sName = location.state.sName;
  const day = location.state.day;
  const month = location.state.month;
  const year = location.state.year;
  const gender = location.state.gender;

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
                          <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/NhsNumber">NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/FirstName">First Name</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/Surname">Surname</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/DateOfBirth">Date of birth</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/Gender">Gender</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <H1>Contact details</H1>
          <InputField value={email} onChange={(e) => setEmail(e.target.value)}>
            Email
          </InputField>
          <br />
          <InputField
            value={phoneNumber}
            onChange={(e) => setNumber(e.target.value)}
          >
            Phone Number
          </InputField>
          <br />
          <Button type="submit" start>
            Save and Continue
          </Button>
        </form>
      </Main>
    </div>
  );
}
export default Contact;
