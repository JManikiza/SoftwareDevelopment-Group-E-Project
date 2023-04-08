import React from "react";
import { Routes, Route } from "react-router-dom";
import {Main, Button, Heading, InsetText, Details,
        ListItem,UnorderedList, Paragraph, ButtonArrow
        } from "govuk-react";


function Patient(){
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
                    <ListItem></ListItem>
                </UnorderedList>
            </Details>

            <Button icon={<ButtonArrow />} start>
                GP Services
            </Button>

            <Button icon={<ButtonArrow />} start>
                Profile
            </Button>

        </Main>
    </div>
);
}

export default Patient;