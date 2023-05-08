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


function AddressChangeEnter() {

  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const location = useLocation();
  
  console.log(location.state);

    useEffect(() => {
        const title = 'Address Change';
        document.title = title;
  })
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
      <Navigation pageLink1="/" PageName1="Home"/><Logout />


      <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link href="/Patient">Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/Profile">Profile</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/AddressChangeStart">Start</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/AddressChangeDetails">Details</Breadcrumbs.Link>
                </Breadcrumbs>
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
