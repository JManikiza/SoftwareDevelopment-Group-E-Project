/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */
//go to contact next
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Select, Heading, Button, Main, Breadcrumbs } from "govuk-react";

function Gender() {
  //used state to save value of the name
  const [gender, setValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const nhsNumber = location.state.nhsNumber;
  const fName = location.state.fName;
  const sName = location.state.sName;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Contact", { state: { nhsNumber, fName, sName, gender } });
    console.log(nhsNumber);
    console.log(fName);
    console.log(sName);
    console.log(gender);
  };

  return (
    <div>
      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/NhsNumber">NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/FirstName">First Name</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/Surname">Surname</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/DateOfBirth">Date of birth</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <Heading>Describe your gender type</Heading>
          <Select
            input={{
              name: "group1",
              onChange: function noRefCheck() {},
            }}
          >
            <option value="0"></option>
            <option value={gender} onChange={(e) => setValue("Female")}>
              Female
            </option>
            <option value={gender} onChange={(e) => setValue("Male")}>
              Male
            </option>
            <option value={gender} onChange={(e) => setValue("other")}>
              Other
            </option>
          </Select>
          <br />
          <Button start>Save and Continue</Button>
        </form>
      </Main>
    </div>
  );
}
export default Gender;
