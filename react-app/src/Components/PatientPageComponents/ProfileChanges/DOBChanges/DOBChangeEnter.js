/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React from "react";
import { DateField, Main, Button, SectionBreak } from "govuk-react";
import { useNavigate } from "react-router-dom";

function DOBChangeEnter(){

    const navigate = useNavigate();
    
    return(
        <div>
            <Main>
                
                <DateField
                    errorText="Please use valid dates"
                    hintText="For example, 31 03 1980"
                >
                    What is your date of birth?
                </DateField>

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

export default DOBChangeEnter;