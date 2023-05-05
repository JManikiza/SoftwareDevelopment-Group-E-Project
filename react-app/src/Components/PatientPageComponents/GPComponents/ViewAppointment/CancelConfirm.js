/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Button, Heading, Main, Paragraph, SectionBreak } from "govuk-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function CancelConfirm(){

    const navigate = useNavigate();
    return (
        <div>
            <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

            <Main>

                <Heading>
                    Confirm your cancellation
                </Heading>

                <Heading size="MEDIUM">Your booking is:</Heading>
                
                <SectionBreak></SectionBreak>

                <Paragraph>Doctor: (Props doctor here)</Paragraph>

                <Paragraph>Date: (Props date here)</Paragraph>

                <Paragraph>Time: (Props time here)</Paragraph>

                <Heading size="SMALL">Are you sure you want to cancel?</Heading>
                <Button onClick={ () => navigate("/Application")}>
                    Confirm
                </Button>
                                
                <Button onClick={() => navigate("/GPServices")} buttonColour="GREY">
                    Cancel
                </Button>       
                
            </Main>
        </div>

    );
}

export default CancelConfirm;