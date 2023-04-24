/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React from "react";
import Navigation from "../../../Navigation";
import {Main, Heading, InsetText, UnorderedList, ListItem, Button, ButtonArrow, Breadcrumbs} from "govuk-react";
import { useNavigate } from "react-router-dom";

function PasswordChangeStart(){

    const navigate = useNavigate();
    return (

        <div>
                        <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

            <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link>Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link>Profile</Breadcrumbs.Link>
                </Breadcrumbs>

                <Heading>
                    Change Your Password
                </Heading>

                <InsetText>
                    Use this form to change your password if:
                </InsetText>

                <UnorderedList>
                    <ListItem>you are worried your password has been discovered</ListItem>
                    <ListItem>you have used the same password elsewhere</ListItem>
                    <ListItem>you would like to change your password</ListItem>
                </UnorderedList>

            <Button onClick={() => navigate("/PasswordChangeDetails")}  icon={<ButtonArrow />} start>
                Start now
            </Button>

            <Heading size="SMALL">
                Before you start
            </Heading>

            <InsetText>You will be asked to give:</InsetText>

            <UnorderedList>
                <ListItem>your current password</ListItem>
                <ListItem>you may be asked for your NHS number, keep it ready</ListItem>
            </UnorderedList>


            </Main>
        </div>

    );
}

export default PasswordChangeStart;