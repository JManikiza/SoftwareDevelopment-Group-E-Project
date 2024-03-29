/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField, Heading, Button, Main, Breadcrumbs } from "govuk-react";
import Navigation from "../Navigation";
import jq from "jquery";

function NhsNumber() {
  //used state to save value of the name
  const [nhsNumber, setValue] = useState("");
  const [validNhs, setValid] = useState(false);
  const [dbvalid, setDbValid] = useState("")
  const navigate = useNavigate();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    // Remove any spaces in the input value and count the length of the remaining characters
    const inputLength = inputValue.replace(/\s/g, "").length;

    // Check if the input value has exactly 11 characters (including spaces)
    if (inputLength === 11) {
      setValid(false);
    } else {
      setValid(true);
    }
    
  };
  //handls submit button and moves to the next page transfering the state value of the nhs number inserted by the user
  const handleSubmit = (path) => (e) => {
    e.preventDefault();
    if(dbvalid === "Nhs number not found, Save and Continue"){
      navigate(path, { state: { nhsNumber } });
      console.log(nhsNumber);
    }else{
      console.log("This NHS number is already registered");
    }
  };

  function checkNhsValueDb() {
    var nhsValue = {
      nhsNo: nhsNumber,
    };

    jq.ajax({
      type: "POST",
      url: "http://localhost:4000/checkNhsNumber.php",
      mode: "no-core",
      data: nhsValue,
      success(data) {
        if (data === "Not found") {
          setDbValid("");
        } else {
          var json = jq.parseJSON(data);
          setDbValid(json);
          
        }
      },
    });
  }

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
                11 digit number
                <br />
                For example: ‘123 123 44455’.
              </>
            }
          >
            <Heading>NHS number</Heading>
            {validNhs && (
              <p style={{ color: "red" }}>
                Input must have exactly 11 values (including spaces)
              </p>
            )}
            <br/>
            {dbvalid && <p style={{ color: dbvalid.includes("Nhs number not found, Save and Continue") ? "green" : "red" }}>{dbvalid}</p>}
          </InputField>
          <br />
          <Button
            type="submit"
            disabled={validNhs || nhsNumber.replace(/\s/g, "").length !== 11}
            onClick={checkNhsValueDb}
          >
            Save and Continue
          </Button>
        </form>
      </Main>
    </div>
  );
}

export default NhsNumber;
