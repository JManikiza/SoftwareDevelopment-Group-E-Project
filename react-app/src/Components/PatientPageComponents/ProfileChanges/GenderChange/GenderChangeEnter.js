/**
* Author(s) of this code: 
*
* Joven Manikiza
*/
import React, { useState } from "react";
import { MultiChoice, Radio, Main, Button, SectionBreak } from "govuk-react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function GenderChangeEnter() {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/GenderChangeConfirmation", { state: { gender } });
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
        <form onSubmit={handleSubmit}>
          <MultiChoice label="What is your gender?">
            <Radio inline name="gender" value="1" onChange={handleGenderChange}>
              MALE
            </Radio>
            <Radio
              inline
              name="gender"
              value="2"
              onChange={handleGenderChange}
            >
              FEMALE
            </Radio>
          </MultiChoice>
          <Button type="submit">Continue</Button>
        </form>

        <SectionBreak level="SMALL" visible={false} />

        <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
          Cancel
        </Button>
      </Main>
    </div>
  );
}

export default GenderChangeEnter;
