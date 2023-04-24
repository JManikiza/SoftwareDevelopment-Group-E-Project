/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React from "react";
import { InputField,  Main, Button, SectionBreak } from "govuk-react";
import { useNavigate } from "react-router-dom";

function NumberChangeEnter(){

    const navigate = useNavigate();
    
    return(
        <div>
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