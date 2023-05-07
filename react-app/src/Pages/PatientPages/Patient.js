/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React, { useEffect, useState } from "react";
import {Main, Button, Heading, InsetText, Details,
        ListItem,UnorderedList, Paragraph, ButtonArrow, Breadcrumbs
        } from "govuk-react";
        import Navigation from "../../Components/Navigation";
import { useNavigate } from "react-router-dom";
import Logout from "../../Components/LoginComponents/Logout";
import $ from "jquery";

function Patient(){
 const [response, setResponse] = useState('');
let name = localStorage.getItem("patientName");

// use this value to query the db
let nhsNo = localStorage.getItem("nhsNo");

const navigate = useNavigate();

  useEffect(() => {
    $.ajax({
        url: 'http://localhost:4000/getData.php',
        type: 'POST',
        data: {
            nhsNo: nhsNo 
        },
        success: function(response) {
            setResponse(JSON.parse(response));  
          
        },
        error: function(error) {
            console.log(error); 
        }
    });
    
  }, []);

  //SET VARIABLES
  let postcode = response.Postcode;

return(
    <div>
        <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>
        <Logout />
        <Main>
            <Breadcrumbs>
                <Breadcrumbs.Link>Home Page</Breadcrumbs.Link>
            </Breadcrumbs>

            <Heading>Hello {response.Forename + ' ' + response.Surname + ' ' + postcode}.</Heading>
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