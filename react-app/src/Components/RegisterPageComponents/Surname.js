/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Heading, Button, Input, Main, Breadcrumbs } from "govuk-react";
import Navigation from "../Navigation";
function Surname() {
  //used state to save value of the name
  const [sName, setValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const nhsNumber = location.state.nhsNumber;
  const fName = location.state.fName;
  // handle the states values and parse to the next page
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/DateOfBirth", { state: { nhsNumber, fName, sName } });
    console.log(nhsNumber);
    console.log(fName);
    console.log(sName);
  };

  return (
    <div>
      <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/NhsNumber">NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/FirstName">First Name</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <Heading>
            What is your surname?
            <Input
              type="text"
              value={sName}
              onChange={(e) => setValue(e.target.value)}
              required
            />
          </Heading>
          <Button type="submit" start>
            Save and Continue
          </Button>
        </form>
      </Main>
    </div>
  );
}
export default Surname;
