/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React, { useEffect, useState } from "react";
import { InputField, Main, Button, SectionBreak } from "govuk-react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function EmailChangeEnter(){

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const location = useLocation();

    useEffect(() => {
        const title = 'Email Change';
        document.title = title;
  })
    console.log(location.state);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Regular expression to check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        navigate("/EmailChangeConfirmation", { state: { email: email.toUpperCase() } });
        console.log(email);
    };

    
    return(
        <div>
            <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

            <Main>
                
                <form onSubmit={handleSubmit}>
                    <InputField
                        hint="We’ll only use this to contact you"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        input={{ name: "newEmail" }}
                        meta={{
                          touched: true,
                        }}
                    >
                        Email address
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

export default EmailChangeEnter;
