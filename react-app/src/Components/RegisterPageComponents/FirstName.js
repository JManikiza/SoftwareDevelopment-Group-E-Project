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
  const [nameNotempty, setValid] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const nhsNumber = location.state.nhsNumber;

  //handle the event on change while user is inputing the value 
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    // variable with regex pattern to test if the user is inputing a valid name
    // if the name does not contain only letters user it will not be able to go through that page
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(inputValue) || !inputValue.trim()) {
      // If input value is empty or contains only spaces, set name to empty string
      setValid(false);
    } else {
      // Otherwise, update the name state with the input value
      setValid(true);
    }
  };

  // handle the states values and parse to the next page
  const handleSubmit = (path) => (e) => {
    e.preventDefault();
    navigate(path, { state: { nhsNumber, fName } });
    console.log(fName);
    console.log(nhsNumber);
  };

  return (
    <div>
      <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/NhsNumber" onSubmit={handleSubmit} >NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link >First Name</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit("/Surname")}>
          <Heading>
            What is your name?
            </Heading>
            <Input
              type="text"
              value={fName}
              onChange={handleChange}
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

export default InputLabel;
