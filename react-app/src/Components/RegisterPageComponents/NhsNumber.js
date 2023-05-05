/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField, Heading, Button, Main, Breadcrumbs } from "govuk-react";
import Navigation from "../Navigation";
function NhsNumber() {
  //used state to save value of the name
  const [nhsNumber, setValue] = useState("");
  const [validNhs, setValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    // Remove any spaces in the input value and count the length of the remaining characters
    const inputLength = inputValue.replace(/\s/g, "").length;

    // Check if the input value has exactly 10 characters (including spaces)
    if (inputLength === 10) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  //handls submit button and moves to the next page transfering the state value of the nhs number inserted by the user
  const handleSubmit = (path) => (e) => {
    e.preventDefault();
    navigate(path, { state: { nhsNumber } });
    console.log(nhsNumber);
  };

  return (
    <div>
      <Navigation
        pageLink1="/"
        PageName1="home"
        pageLink2="/login"
        PageName2="Login"
        pageLink3="/NhsNumber"
        PageName3="Register"
      />

      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link>NHS Number</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit("/FirstName")}>
          <InputField
            value={nhsNumber}
            onChange={handleChange}
            hint={
              <>
                Ten digit number
                <br />
                For example: ‘123 123 4445’.
              </>
            }
          >
            <Heading>NHS number</Heading>
            {validNhs && (
              <p style={{ color: "red" }}>
                Input must have exactly 10 values (including spaces)
              </p>
            )}
          </InputField>
          <br />
          <Button
            type="submit"
            disabled={validNhs || nhsNumber.replace(/\s/g, "").length !== 10}
            start
          >
            Save and Continue
          </Button>
        </form>
      </Main>
    </div>
  );
}

export default NhsNumber;
