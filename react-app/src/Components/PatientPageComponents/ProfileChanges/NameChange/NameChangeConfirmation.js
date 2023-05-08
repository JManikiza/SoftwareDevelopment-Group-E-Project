/**
 * Author(s) of this code:
 *
 * Joven Manikiza
 */

import {
  Button,
  Heading,
  Main,
  SectionBreak,
  Table, Breadcrumbs
} from "govuk-react";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../../../Navigation";
import $ from 'jquery';
import Logout from "../../../LoginComponents/Logout";


function NameChangeConfirmation() {
    
  const navigate = useNavigate();
  const location = useLocation();
  const forename = location.state.forename;
  const surname = location.state.surname;

      useEffect(() => {
    const title = 'Name Change';
    document.title = title;
  })

    const [response, setResponse] = useState('');
// use this value to query the db
let nhs_number = localStorage.getItem("nhsNo");

  useEffect(() => {
    $.ajax({
        url: 'http://localhost:4000/getData.php',
        type: 'POST',
        data: {
            nhs_number: nhs_number 
        },
        success: function(response) {
            setResponse(JSON.parse(response));  
          
        },
        error: function(error) {
            console.log(error); 
        }
    });
    
  }, []);

  console.log("forename:", forename);
  console.log("surname:", surname);

const payload = {
    forename: forename,
    surname: surname,
    nhs_number: nhs_number
};

const updateFullName = () => {
    $.ajax({
        url: "http://localhost:4000/updateFullName.php",
        type: "PUT",
        data: JSON.stringify(payload),
        contentType: "application/json",
        xhrFields: {
            withCredentials: true
        },
        success: function (response) {
            navigate("/Application");
        },
        error: function (error) {
            console.error(error);
        }
    });
};

  return (
    <div>
      <Navigation pageLink1="/" PageName1="Home"/><Logout />


      <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link href="/Patient">Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/Profile">Profile</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/NameChangeStart">Start</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/NameChangeDetails">Details</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/NameChangeBothNames">Enter</Breadcrumbs.Link>
                </Breadcrumbs>
        <Heading>Confirm your changes</Heading>

        <Heading size="MEDIUM">Previous details were:</Heading>
        <SectionBreak></SectionBreak>

        <Table>
          <Table.Row>
            <Table.CellHeader>Forename:</Table.CellHeader>
            <Table.Cell>{response.Forename}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Surname:</Table.CellHeader>
            <Table.Cell>{response.Surname}</Table.Cell>
          </Table.Row>
        </Table>

        <Heading size="MEDIUM">New details are:</Heading>

        <Table>
          <Table.Row>
            <Table.CellHeader>Forename:</Table.CellHeader>
            <Table.Cell>{forename}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Surname:</Table.CellHeader>
            <Table.Cell>{surname}</Table.Cell>
          </Table.Row>
        </Table>

                <Button onClick={updateFullName}>
                    Confirm
                </Button>
                                
                <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
                    Cancel
                </Button>       
                
            </Main>
        </div>

    );
}

export default NameChangeConfirmation;
