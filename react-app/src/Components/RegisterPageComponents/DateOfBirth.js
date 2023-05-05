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
  const [valueValid, setValid] = useState("");
  const [inputValid, setInputValid] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const nhsNumber = location.state.nhsNumber;
  const fName = location.state.fName;
  const sName = location.state.sName;

  //seting the state values for the date in different variables
  const handleInputChange = (e, inputName) => {
    const inputValue = e.target.value;

    // Check if input value is in the right range for the day, month and year
    // If input value is invalid, set error message to display for the user
    // Otherwise, update the day state with the input value and clear error message
    switch (inputName) {
      case "dayInputName":
        setDay(inputValue);
        if (isNaN(inputValue) || parseInt(inputValue) < 1 || parseInt(inputValue) > 31) {
          setValid('Day must be a number between 1 and 31.');
          setDay('');
          
        } else {
          setValid('');
          setDay(inputValue);
          
        }
        break;
      case "monthInputName":
        setMonth(inputValue);
        if (isNaN(inputValue) || parseInt(inputValue) < 1 || parseInt(inputValue) > 12) {
          setValid('Month must be a number between 1 and 12.');
          setMonth('');
        } else {
          setValid('');
          setMonth(inputValue);
        }
        break;
      case "yearInputName":
        setYear(inputValue);
        if (isNaN(inputValue) || parseInt(inputValue) < 1900 || parseInt(inputValue) > 2023) {
          setValid('Please enter a year between 1900 and 2023');
        } else {
          setValid('');
          setYear(inputValue);  
        }
        break;
      default:
        break;
    }
    if(!day.trim() || !month.trim() || !year.trim()){
      setInputValid(false)
    }else{
      setInputValid(true);
    }
    
  };



  // handle the states values and parse to the next page
  const handleSubmit = (path) => (e) => {
    e.preventDefault();
    navigate(path, {
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
          <Breadcrumbs.Link >NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link >First Name</Breadcrumbs.Link>
          <Breadcrumbs.Link >Surname</Breadcrumbs.Link>
          <Breadcrumbs.Link >Date of birth</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit("/Gender")}>
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
            {valueValid && <p style={{ color: 'red' }}>{valueValid}</p>}
          </DateField>
          <Button type="submit" disabled={!inputValid} start>Save and Continue</Button>
        </form>
      </Main>
    </div>
  );
}
export default DateOfBirth;
