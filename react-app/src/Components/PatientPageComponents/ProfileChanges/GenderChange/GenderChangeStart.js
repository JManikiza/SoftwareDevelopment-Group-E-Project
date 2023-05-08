/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React, { useEffect } from "react";
import {Main, Heading, InsetText, UnorderedList, ListItem, Button, ButtonArrow, Breadcrumbs} from "govuk-react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";
import Logout from "../../../LoginComponents/Logout";

function GenderChangeStart(){

    const navigate = useNavigate();

        useEffect(() => {
    const title = 'Gender Change';
    document.title = title;
  })
    return (

        <div>
      <Navigation pageLink1="/" PageName1="Home"/><Logout />

            <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link href="/Patient">Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/Profile">Profile</Breadcrumbs.Link>
                </Breadcrumbs>

                <Heading>
                    Notification of a change
                    in personal details
                </Heading>

                <InsetText>
                    Use this form to tell the NHS 
                    about a change in your personal 
                    details if your:
                </InsetText>

                <UnorderedList>
                    <ListItem>Gender has changed</ListItem>
                    <ListItem>Gender in system is incorrect</ListItem>

                </UnorderedList>

            <Button onClick={() => navigate("/GenderChangeDetails")}  icon={<ButtonArrow />} start>
                Start now
            </Button>

            <Heading size="SMALL">
                Before you start
            </Heading>

            <InsetText>You will be asked to give:</InsetText>

            <UnorderedList>
                <ListItem>details of any changes to your gender</ListItem>
                <ListItem>you may be asked for your NHS number, keep it ready</ListItem>
            </UnorderedList>


            </Main>
        </div>

    );
}

export default GenderChangeStart;