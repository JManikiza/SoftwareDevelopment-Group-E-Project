/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React from "react";
import { InputField, Main, Button, SectionBreak } from "govuk-react";
import { useNavigate } from "react-router-dom";

function AddressChangeEnter(){

    const navigate = useNavigate();
    
    return(
        <div>
            <Main>
                
                <InputField
                    hint={<>You'll find this on the last line on your address</>}
                    input={{  name: 'Postcode' }}
                    meta={{
                    error: 'Your postcode must not contain special characters',
                    touched: true
                    }}>
                        
                        Your new postcode:
                </InputField>

                <Button onClick={() => navigate("/AddressChangeConfirmation")}>
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

export default AddressChangeEnter;