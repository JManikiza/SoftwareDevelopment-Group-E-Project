/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */
//go to contact next
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Select, Heading, Button, Main, Breadcrumbs } from "govuk-react";
import Navigation from "../Navigation";
function Gender() {
  //used state to save value of the name
  const [gender, setValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const nhsNumber = location.state.nhsNumber;
  const fName = location.state.fName;
  const sName = location.state.sName;
  const day = location.state.day;
  const month = location.state.month;
  const year = location.state.year;
  // sets the value choosen in the select drop down option
  const handleSelectChange = (e) => {
    setValue(e.target.value);
  };
  // handle the states values and parse to the next page
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Contact", {
      state: { nhsNumber, fName, sName, day, month, year, gender },
    });
    console.log(nhsNumber);
    console.log(fName);
    console.log(sName);
    console.log(day + " " + month + " " + year);
    console.log(gender);
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
          <Breadcrumbs.Link >Gender</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <Heading>Describe your gender type</Heading>
          <Select
            input={{
              name: "group1",
              onChange: handleSelectChange,
            }}
          >
            <option value="">Please select an option</option>
            <option value={"Female"}>Female</option>
            <option value={"Male"}>Male</option>
            <option value={"Other"}>Other</option>
          </Select>
          <br />
          <Button start>Save and Continue</Button>
        </form>
      </Main>
    </div>
  );
}
export default Gender;
