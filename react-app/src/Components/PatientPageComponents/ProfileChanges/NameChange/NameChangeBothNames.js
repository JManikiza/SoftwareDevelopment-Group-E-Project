/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React from "react";
import { InputField,  Main, Button, SectionBreak } from "govuk-react";
import { useNavigate } from "react-router-dom";

function NameChangeBothNames(){

    const navigate = useNavigate();
    
    return(
        <div>
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

                <InputField
                    hint={<>You'll find this on your Deed poll confirmation letter or marriage certificate</>}
                    input={{ name: 'lastName' }}
                    meta={{
                    error: 'Your name must not contain any spaces or special characters',
                    touched: true
                    }}>
                    
                        Your new last name:
                </InputField>

                <Button onClick={() => navigate("/NameChangeConfirmation")}>
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

export default NameChangeBothNames;