/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React from "react";
import { InputField,  Main, Button, SectionBreak } from "govuk-react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";
function NumberChangeEnter(){

    const navigate = useNavigate();
    
    return(
        <div>
                                    <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

            <Main>
                
                <InputField
                    hint="We’ll only use this to contact you"
                    input={{
                        autoComplete: 'Contact number',
                        name: 'group1',
                        type: 'number'
                    }}
                >
                    Contact number
                </InputField>

                <Button onClick={() => navigate("/NumberChangeConfirmation")}>
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

export default NumberChangeEnter;