/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React, { useState } from "react";
import { InputField, Main, Button, SectionBreak, InsetText } from "govuk-react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function NumberChangeEnter(){

    const navigate = useNavigate();
    const [number, setNumber] = useState("");
    const location = useLocation();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/NumberChangeConfirmation", { state: { number: number } });
        console.log(number, typeof number);
    };
    
    return(
        <div>
            <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

            <Main>
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
