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
  const [postCodeValid,setValid] = useState(false);
  const [PostCodeError, setError] = useState("");
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


  const handlePostcodeChange = (e) => {
    const inputValue = e.target.value;
    setPostCode(inputValue);

    const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i; // regex pattern for UK postcode
    if (!postcodeRegex.test(inputValue)) {
      setError('Please enter a valid UK postcode');
      setValid(false);
    } else {
      setError('');
      setValid(true);
      setPostCode(inputValue);
    }
  };
  
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
  };

  return (
    <div>
      <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link >NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link >First Name</Breadcrumbs.Link>
          <Breadcrumbs.Link >Surname</Breadcrumbs.Link>
          <Breadcrumbs.Link >Date of birth</Breadcrumbs.Link>
          <Breadcrumbs.Link >Gender</Breadcrumbs.Link>
          <Breadcrumbs.Link >Contact details</Breadcrumbs.Link>
          <Breadcrumbs.Link >Address</Breadcrumbs.Link>
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
          {PostCodeError && <p style={{color: 'red'}}>{PostCodeError}</p>}
          <InputField
            value={postCode}
            onChange={handlePostcodeChange}
          >
            Postcode*
          </InputField>
          <br />
          <Button type="submit" disabled={!postCodeValid} start>
            Submit
          </Button>
        </form>
      </Main>
    </div>
  );
}
export default Address;
