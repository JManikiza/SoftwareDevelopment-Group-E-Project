/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Heading, Button, Input, Main, Breadcrumbs } from "govuk-react";
import Navigation from "../Navigation";
function InputLabel() {
  //used state to save value of the name
  const [fName, setValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const nhsNumber = location.state.nhsNumber;
  // handle the states values and parse to the next page
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Surname", { state: { nhsNumber, fName } });
    console.log(fName);
    console.log(nhsNumber);
  };

  return (
    <div>
      <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/NhsNumber">NHS Number</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <Heading>
            What is your name?
            <Input
              type="text"
              value={fName}
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

export default InputLabel;
