/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React from "react";
import { InputField, Main, Button, SectionBreak } from "govuk-react";
import { useNavigate } from "react-router-dom";

function EmailChangeEnter(){

    const navigate = useNavigate();
    
    return(
        <div>
            <Main>
                
                <InputField
                    hint="We’ll only use this to contact you"
                    input={{
                        autoComplete: 'email',
                        name: 'group1',
                        type: 'email'
                    }}
                >
                    Email address
                </InputField>

                <Button onClick={() => navigate("/EmailChangeConfirmation")}>
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

export default EmailChangeEnter;