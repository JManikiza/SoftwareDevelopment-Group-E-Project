/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Input,Heading, Button, Main, Breadcrumbs } from "govuk-react";


import Navigation from "../Navigation";

function Password() {
  //used state to save value of the name
  const [userPassword, setValue] = useState("");
  const [shown, setShown] = useState(false);
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
  const address1 = location.state.address1;
  const address2 = location.state.address2;
  const townCity = location.state.townCity;
  const county = location.state.county;
  const postCode = location.state.postCode;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/DetailsSummary", {
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
        userPassword
      },
    });
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
          <Breadcrumbs.Link href="/Address">Address</Breadcrumbs.Link>
          <Breadcrumbs.Link >Password</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <Heading>Account Password</Heading>
          <Input  
                type={shown ? "text":"password"}  
                value={userPassword}
                onChange={(e) => setValue(e.target.value)}
                required
              />
          <br />
          <br />
          <Button type="submit" start>
            Save and Continue
          </Button>
        </form>
      </Main>
    </div>
  );
}

export default Password;
