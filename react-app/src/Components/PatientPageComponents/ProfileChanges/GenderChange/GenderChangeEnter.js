/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React, { useEffect, useState } from "react";
import { MultiChoice, Radio, Main, Button, SectionBreak, Breadcrumbs } from "govuk-react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";
import Logout from "../../../LoginComponents/Logout";


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

          useEffect(() => {
    const title = 'Gender Change';
    document.title = title;
  })

  return (
    <div>
      <Navigation pageLink1="/" PageName1="Home"/><Logout />

      <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link href="/Patient">Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/Profile">Profile</Breadcrumbs.Link>
                    <Breadcrumbs.Link hred="/GenderChangeStart">Start</Breadcrumbs.Link>
                    <Breadcrumbs.Link hred="/GenderChangeDetails">Details</Breadcrumbs.Link>
                </Breadcrumbs>
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
