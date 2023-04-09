import React from "react";
import {Main, Button, Heading, InsetText, Details,
        ListItem,UnorderedList, Paragraph, ButtonArrow
        } from "govuk-react";
import { useNavigate } from "react-router-dom";



function Patient(){

const navigate = useNavigate();

return(
    <div>
        <Main>
            <Heading>Hello (Prop name here).</Heading>
            <InsetText>Navigate to your GP services or Profile from this page</InsetText>
            <Details summary="What can I do with GP Services?">
                <Paragraph>You'll be able to do the following:</Paragraph>
                <UnorderedList>
                    <ListItem>Book/arrange appointments with a Doctor</ListItem>
                    <ListItem>View any upcoming appointments you may have</ListItem>
                    <ListItem>Cancel any appointments you may have</ListItem>
                </UnorderedList>
            </Details>
            <Details summary="What can I do with my Profile?">
                <Paragraph>You'll be able to do the following:</Paragraph>
                <UnorderedList>
                    <ListItem>View the current details we have of you</ListItem>
                    <ListItem>Update any details you may need to change</ListItem>
                </UnorderedList>
            </Details>


            <Button onClick={() => navigate("/GPServices")}  icon={<ButtonArrow />} start>
                GP Services
            </Button>

            <Button onClick={() => navigate("/Profile")}  icon={<ButtonArrow />} start>
                Profile
            </Button>

        </Main>
    </div>
);
}

export default Patient;