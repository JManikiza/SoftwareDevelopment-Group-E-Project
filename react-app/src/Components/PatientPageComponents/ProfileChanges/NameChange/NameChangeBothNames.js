/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React, { useEffect, useState } from "react";
import { InputField, Main, Button, SectionBreak, Breadcrumbs } from "govuk-react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";
import Logout from "../../../LoginComponents/Logout";


function NameChangeBothNames() {
  const navigate = useNavigate();
  const [forename, setForename] = useState("");
  const [surname, setSurname] = useState("");
  const location = useLocation();

const handleSubmit = (e) => {
  e.preventDefault();

  if (!forename || !surname) {
    alert("Please enter your new first and last name.");
    return;
  }

  if (/\d/.test(forename) || /\d/.test(surname)) {
    alert("Names cannot contain numbers.");
    return;
  }

  navigate("/NameChangeConfirmation", {
    state: {
      forename: forename.toUpperCase(),
      surname: surname.toUpperCase(),
    },
  });
};

      useEffect(() => {
    const title = 'Name Change';
    document.title = title;
  })
  
  return (
    <div>
      <Navigation pageLink1="/" PageName1="Home"/><Logout />
      <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link href="/Patient">Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/Profile">Profile</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/NameChangeStart">Start</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/NameChangeDetails">Details</Breadcrumbs.Link>
                </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <InputField
            hint={<>You'll find this on your Deed Poll confirmation letter</>}
            value={forename}
            onChange={(e) => setForename(e.target.value)}
            input={{ name: "forename" }}
            meta={{ touched: true }}
          >
            Your new first name:
          </InputField>
          <InputField
            hint={<>You'll find this on your Deed poll confirmation letter or marriage certificate</>}
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            input={{ name: "surname" }}
            meta={{ touched: true }}
          >
            Your new last name:
          </InputField>
          <Button type="submit">Continue</Button>
          <SectionBreak level="SMALL" visible={false} />
          <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
            Cancel
          </Button>
        </form>
      </Main>
    </div>
  );
}

export default NameChangeBothNames;
