import { Button, Heading, Main, Paragraph, SectionBreak } from "govuk-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function NumberChangeConfirmation(){

    const navigate = useNavigate();
    return (
        <div>
            <Main>

                <Heading>
                    Confirm your changes
                </Heading>

                <Heading size="MEDIUM">Previous details were:</Heading>
                
                <SectionBreak></SectionBreak>

                <Paragraph>Number: (Props number here)</Paragraph>

                <Heading size="MEDIUM">New details are:</Heading>

                <Paragraph>Number: (Props number here)</Paragraph>

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

export default NumberChangeConfirmation;