/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React from "react";
import { InputField, Main, Button, SectionBreak } from "govuk-react";
import { useNavigate } from "react-router-dom";
function NameChangeLastName(){
    
    const navigate = useNavigate();
    
    return(
        <div>
            <Main>

                <InputField
                    hint={<>You'll find this on your Deed poll confirmation letter or marriage certificate</>}
                    input={{ name: 'lastName' }}
                    meta={{
                    error: 'Your name must not contain any spaces or special characters',
                    touched: true
                    }}>
                    
                        Your new last name:
                </InputField>


                <Button onClick={() => navigate("/NameChangeLastNameConfirm")}>
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

export default NameChangeLastName;