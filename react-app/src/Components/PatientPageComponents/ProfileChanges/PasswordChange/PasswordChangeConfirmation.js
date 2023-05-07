/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Button, Heading, Main, Paragraph, SectionBreak } from "govuk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function PasswordChangeConfirmation(){

    const navigate = useNavigate();

        useEffect(() => {
    const title = 'Password Change';
    document.title = title;
  })
    return (
        <div>
                        <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

            <Main>

                <Heading>
                    Confirm your changes
                </Heading>

                <Heading size="MEDIUM">Previous details were:</Heading>
                
                <SectionBreak></SectionBreak>

                <Paragraph>Password: (Props password here (in full after confirmed))</Paragraph>

                <Heading size="MEDIUM">New details are:</Heading>

                <Paragraph>Password: (Props password here (in full after confirmed))</Paragraph>

                <Button onClick={ () => navigate("/Application")}>
                    Confirm
                </Button>
                                
                <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
                    Cancel
                </Button>       
                
            </Main>
        </div>

    );
}

export default PasswordChangeConfirmation;