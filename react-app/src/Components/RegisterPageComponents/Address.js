/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { InputField, Heading, Button, Main, Breadcrumbs } from "govuk-react";
import Navigation from "../Navigation";
function Address() {
  //used state to save value of the name
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [townCity, setLocation] = useState("");
  const [county, setCounty] = useState("");
  const [postCode, setPostCode] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const nhsNumber = location.state.nhsNumber;
  const fName = location.state.fName;
  const sName = location.state.sName;
  const day = location.state.day;
  const month = location.state.month;
  const year = location.state.year;
  const gender = location.state.gender;
  const email = location.state.email;
  const phoneNumber = location.state.phoneNumber;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Password", {
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
        address1,
        address2,
        townCity,
        county,
        postCode,
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
          <Breadcrumbs.Link href="/Contact">Contact details</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <Heading>Address details</Heading>
          <InputField
            value={address1}
            onChange={(e) => setaddress1(e.target.value)}
          >
            Address line 1
          </InputField>
          <InputField
            value={address2}
            onChange={(e) => setaddress2(e.target.value)}
          >
            Address line 2(optional)
          </InputField>
          <InputField
            value={townCity}
            onChange={(e) => setLocation(e.target.value)}
          >
            Town or city
          </InputField>
          <InputField
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          >
            County(optional)
          </InputField>
          <InputField
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          >
            Postcode
          </InputField>
          <br />
          <Button type="submit" start>
            Submit
          </Button>
        </form>
      </Main>
    </div>
  );
}
export default Address;
