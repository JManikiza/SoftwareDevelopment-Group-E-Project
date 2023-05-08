/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React, { useEffect, useState } from "react";
import { InputField, Main, Button, SectionBreak, InsetText, Breadcrumbs } from "govuk-react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";
import Logout from "../../../LoginComponents/Logout";


function NumberChangeEnter(){

    const navigate = useNavigate();
    const [number, setNumber] = useState("");
    const location = useLocation();

            useEffect(() => {
    const title = 'Number Change';
    document.title = title;
  })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/NumberChangeConfirmation", { state: { number: number } });
        console.log(number, typeof number);
    };
    
    return(
        <div>
      <Navigation pageLink1="/" PageName1="Home"/><Logout />

            <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link href="/Patient">Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/Profile">Profile</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/NumberChangeStart">Start</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/NumberChangeDetails">Details</Breadcrumbs.Link>
                </Breadcrumbs>

                <InsetText>Unfortunately we're only accepting UK numbers</InsetText>
                <form onSubmit={handleSubmit}>
                    <InputField
                        hint="We’ll only use this to contact you"
                        value={number}
                        onChange={(e) => setNumber(e.target.value.replace(/[^0-9]/g, "").substring(0, 11))}
                        input={{ name: "newNumber", type: "tel", pattern: "[0-9]{11}" }}
                        meta={{
                          touched: true,
                        }}
                    >
                        Contact number
                    </InputField>

                    <Button>
                        Continue
                    </Button>

                    <SectionBreak level="SMALL" visible={false}/>

                    <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
                        Cancel
                    </Button>
                </form>
            </Main>
        </div>
    );
}

export default NumberChangeEnter;
