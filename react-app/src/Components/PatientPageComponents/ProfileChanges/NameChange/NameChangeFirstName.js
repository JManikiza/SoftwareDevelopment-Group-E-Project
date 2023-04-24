/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React from "react";
import { InputField, Main, Button, SectionBreak } from "govuk-react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function NameChangeFirstName(){
    
    const navigate = useNavigate();
    
    return(
        <div>
                                    <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

            <Main>
                
                <InputField
                    hint={<>You'll find this on your Deed Poll confirmation letter</>}
                    input={{  name: 'firstName' }}
                    meta={{
                    error: 'Your name must not contain any spaces or special characters',
                    touched: true
                    }}>
                        
                        Your new first name:
                </InputField>

                <Button onClick={() => navigate("")}>
                    Continue
                </Button>

                 <SectionBreak level="SMALL" visible={false}/>
                
                <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
                    Cancel
                </Button>

                </Main>
                </div>

    );
}

export default NameChangeFirstName;