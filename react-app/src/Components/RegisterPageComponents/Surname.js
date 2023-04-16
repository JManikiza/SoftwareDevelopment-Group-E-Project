/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Heading, Button, Input, Main, Breadcrumbs } from "govuk-react";

function Surname() {
  //used state to save value of the name
  const [sName, setValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const nhsNumber = location.state.nhsNumber;
  const fName = location.state.fName;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/DateOfBirth", { state: { nhsNumber, fName, sName } });
    console.log(nhsNumber);
    console.log(fName);
    console.log(sName);
  };

  return (
    <div>
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
