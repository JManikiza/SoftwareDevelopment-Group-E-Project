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
  const [nameNotempty, setValid] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const nhsNumber = location.state.nhsNumber;
  const fName = location.state.fName;

  //handle the event on change while user is inputing the value 
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    // variable with regex pattern to test if the user is inputing a valid name
    // if the name does not contain only letters user it will not be able to go through that page
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(inputValue) || !inputValue.trim()) {
      // If input value is empty or contains only spaces
      setValid(false);
    } else {
      // Otherwise, update the name state with the input value
      setValid(true);
    }
  };
  // handle the states values and parse to the next page
  const handleSubmit = (path) => (e) => {
    e.preventDefault();
    navigate(path, { state: { nhsNumber, fName, sName } });
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
          <Breadcrumbs.Link >NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link >First Name</Breadcrumbs.Link>
          <Breadcrumbs.Link >Surname</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit("/DateOfBirth")}>
          <Heading>
            What is your surname?
            </Heading>
            <Input
              type="text"
              value={sName}
              onChange={handleChange}
              required
            />
          <br/>
          <br/>
          <Button type="submit" disabled={!nameNotempty} start>
            Save and Continue
          </Button>
        </form>
      </Main>
    </div>
  );
}
export default Surname;
