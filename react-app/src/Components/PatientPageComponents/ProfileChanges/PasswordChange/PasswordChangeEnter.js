/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React from "react";
import { InputField, Link, Main, Button, SectionBreak, InsetText } from "govuk-react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function PasswordChangeEnter(){

    const navigate = useNavigate();
    
    return(
        <div>
                        <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

            <Main>

<InsetText>THE PASSWORD CHANGE SECTION IS NOT FINISHED BUT THIS IS A PLACEHOLDER</InsetText>
                <InputField
                    hint="If you have forgotten your password, please use 'Forgotten my password' at the bottom"
                    input={{
                        autoComplete: 'previous password',
                        name: 'password',
                        type: 'password'
                    }}
                >
                    Previous password
                </InputField>

                <SectionBreak level="SMALL" visible={false}/>

                
                <InputField
                    hint="Keep it secret. Keep it safe. We recommend using three random words, some digits and special characters. Example - Cushion1Statue!Mirror4"
                    input={{
                        autoComplete: 'new password',
                        name: 'password',
                        type: 'password'
                    }}
                >
                    New password
                </InputField>

              <Link onClick={() => navigate("/ForgottenPassword")} children="Forgotten My Password!"/>

                 <SectionBreak level="SMALL" visible={false}/>

                
                <Button onClick={() => navigate("/PasswordChangeConfirmation")}>
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

export default PasswordChangeEnter;