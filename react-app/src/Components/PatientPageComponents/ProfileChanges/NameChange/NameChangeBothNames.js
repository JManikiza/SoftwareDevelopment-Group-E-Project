import React, { useState } from "react";
import { InputField, Main, Button, SectionBreak } from "govuk-react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function NameChangeBothNames() {
  const navigate = useNavigate();
  const [forename, setForename] = useState("");
  const [surname, setSurname] = useState("");
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the next page
    navigate("/NameChangeConfirmation", { 
      state: { 
        forename: forename.toUpperCase(), 
        surname: surname.toUpperCase()
      } 
    });
  };
  
  return (
    <div>
      <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register" />
      <Main>
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
