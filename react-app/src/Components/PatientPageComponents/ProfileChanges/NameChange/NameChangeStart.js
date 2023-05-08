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

function NameChangeStart(){

    const navigate = useNavigate();

    useEffect(() => {
    const title = 'Name Change';
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
                    <ListItem>Name has changed</ListItem>
                    <ListItem>
                        marital or civil partnership 
                        status has changed
                    </ListItem>
                </UnorderedList>

            <Button onClick={() => navigate("/NameChangeDetails")}  icon={<ButtonArrow />} start>
                Start now
            </Button>

            <Heading size="SMALL">
                Before you start
            </Heading>

            <InsetText>You will be asked to give:</InsetText>

            <UnorderedList>
                <ListItem>details of any changes to your name, including dates</ListItem>
                <ListItem>details of any changes to your marital or civil partnership status, including dates</ListItem>
                <ListItem>you may be asked to upload document(s) as proof, have any ready </ListItem>
                <ListItem>you may be asked for your NHS number, keep it ready</ListItem>
            </UnorderedList>


            </Main>
        </div>

    );
}

export default NameChangeStart;