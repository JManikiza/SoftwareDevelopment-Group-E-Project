import React, { useState } from "react";
import { InputField, Main, Button, SectionBreak } from "govuk-react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function AddressChangeEnter() {

  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const location = useLocation();
  
  console.log(location.state);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postcodeRegex = /^(?:(?:[A-Za-z][A-Ha-hJ-Yj-y]?\d[A-Za-z\d]? ?\d[A-Za-z]{2})|(?:GIR ?0A{2}))$/;
    if (postcodeRegex.test(address)) {
      navigate("/AddressChangeConfirmation", { state: { address: address.toUpperCase() } });
      console.log(address);
    } else {
      alert("Please enter a valid UK postcode in the format LN NLL or LLN NLL, where L is a letter and N is a number.");
    }
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
          <InputField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            hint={<>You'll find this on the last line on your address</>}
            input={{ name: "newAddress" }}
            meta={{
              touched: true,
            }}
          >
            Your new postcode:
          </InputField>

          <Button>
            Continue
          </Button>

          <SectionBreak level="SMALL" visible={false} />

          <Button
            onClick={() => navigate("/Profile")}
            buttonColour="GREY"
          >
            Cancel
          </Button>
        </form>
      </Main>
    </div>
  );
}

export default AddressChangeEnter;
