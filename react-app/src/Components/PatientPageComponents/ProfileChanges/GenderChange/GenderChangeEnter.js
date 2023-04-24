/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React from "react";
import { MultiChoice, Radio, Main, Button, SectionBreak } from "govuk-react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";
function GenderChangeEnter(){

    const navigate = useNavigate();
    
    return(
        <div>
                                    <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

            <Main>
                
                <MultiChoice label="What is your gender?">
                    <Radio inline name="gender">Male</Radio>
                    <Radio inline name="gender">Female</Radio>
                </MultiChoice>

                <Button onClick={() => navigate("/GenderChangeConfirmation")}>
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

export default GenderChangeEnter;