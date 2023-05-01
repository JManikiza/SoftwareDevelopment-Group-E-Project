/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DateField, Heading, Button, Main, Breadcrumbs } from "govuk-react";
import Navigation from "../Navigation";
function DateOfBirth() {
  //used state to save value of the name
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const nhsNumber = location.state.nhsNumber;
  const fName = location.state.fName;
  const sName = location.state.sName;

  //seting the state values for the date in different variables
  const handleInputChange = (e, inputName) => {
    const inputValue = e.target.value;

    switch (inputName) {
      case "dayInputName":
        setDay(inputValue);
        break;
      case "monthInputName":
        setMonth(inputValue);
        break;
      case "yearInputName":
        setYear(inputValue);
        break;
      default:
        break;
    }
  };
  // handle the states values and parse to the next page
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Gender", {
      state: { nhsNumber, fName, sName, day, month, year },
    });
    console.log(nhsNumber);
    console.log(fName);
    console.log(sName);
    console.log(day + " " + month + " " + year);
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
          <Breadcrumbs.Link >Date of birth</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <DateField
            input={{
              onBlur: function noRefCheck() {},
              onChange: function noRefCheck() {},
              onFocus: function noRefCheck() {},
            }}
            inputNames={{
              day: "dayInputName",
              month: "monthInputName",
              year: "yearInputName",
            }}
            inputs={{
              day: {
                autoComplete: "bday-day",
                value: day,
                onChange: (e) => handleInputChange(e, "dayInputName"),
              },
              month: {
                autoComplete: "bday-month",
                value: month,
                onChange: (e) => handleInputChange(e, "monthInputName"),
              },
              year: {
                autoComplete: "bday-year",
                value: year,
                onChange: (e) => handleInputChange(e, "yearInputName"),
              },
            }}
          >
            <Heading>What is your date of birth?</Heading>
          </DateField>
          <Button start>Save and Continue</Button>
        </form>
      </Main>
    </div>
  );
}
export default DateOfBirth;
