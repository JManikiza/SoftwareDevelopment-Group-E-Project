/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Button, Heading, InputField, Main, Paragraph, SectionBreak } from "govuk-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function DRConfirm(){

    const navigate = useNavigate();
    return (
        <div>
            <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

            <Main>

                <Heading>
                    Confirm you want to De-Register
                </Heading>

                <SectionBreak></SectionBreak>

                <Paragraph>Once you click confirm, to use this service you must register again. </Paragraph>

                <InputField input={{ name: 'password' }}>
                    Please enter your password
                </InputField>

                <br />

                <Button onClick={ () => navigate("/")}>
                    Confirm
                </Button>
                                
                <Button onClick={() => navigate("/GPServices")} buttonColour="GREY">
                    Cancel
                </Button>       
                
            </Main>
        </div>

    );
}

export default DRConfirm;