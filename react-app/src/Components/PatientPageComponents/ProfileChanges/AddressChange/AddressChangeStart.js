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


function AddressChangeStart(){

    const navigate = useNavigate();

    useEffect(() => {
        const title = 'Address Change';
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
                    <ListItem>Address has changed</ListItem>
                    <ListItem>Address is currently incorrect</ListItem>
                </UnorderedList>

            <Button onClick={() => navigate("/AddressChangeDetails")}  icon={<ButtonArrow />} start>
                Start now
            </Button>

            <Heading size="SMALL">
                Before you start
            </Heading>

            <InsetText>You will be asked to give:</InsetText>

            <UnorderedList>
                <ListItem>details of any changes to your address, including dates</ListItem>
                <ListItem>you may be asked to upload document(s) as proof, have any ready </ListItem>
                <ListItem>you may be asked for your NHS number, keep it ready</ListItem>
            </UnorderedList>


            </Main>
        </div>

    );
}

export default AddressChangeStart;