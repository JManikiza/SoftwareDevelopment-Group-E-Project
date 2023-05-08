/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Button, Heading, Main, Table, SectionBreak, Breadcrumbs } from "govuk-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../../../Navigation";
import $ from 'jquery';
import Logout from "../../../LoginComponents/Logout";


function DOBChangeConfirmation() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const location = useLocation();
  const { day, month, year } = location.state;
  const dob = { day, month, year };

      useEffect(() => {
        const title = 'DOB Change';
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


 
   const dobFormatted = `${location.state.dob.year}/${location.state.dob.month}/${location.state.dob.day}`;
    console.log("DOB formatted:", dobFormatted);

    const payload = {
    dob: dobFormatted,
    nhs_number: nhs_number
};

const updateDOB = () => {

    $.ajax({
        url: "http://localhost:4000/updateDOB.php",
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
  console.log("Current state:", location.state);

  return (
    <div>
      <Navigation pageLink1="/" PageName1="Home"/><Logout />


      <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link href="/Patient">Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/Profile">Profile</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/DOBChangeStart">Start</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/DOBChangeDetails">Details</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/DOBChangeEnter">Enter</Breadcrumbs.Link>
                </Breadcrumbs>
        <Heading>Confirm your changes</Heading>

        <Heading size="MEDIUM">Previous details were:</Heading>

        <SectionBreak />

        <Table>
          <Table.Row>
            <Table.CellHeader>Date of birth:</Table.CellHeader>
            <Table.Cell>{response.PersonDOB}</Table.Cell>
          </Table.Row>
        </Table>

        <Heading size="MEDIUM">New details are:</Heading>

        <Table>
          <Table.Row>
            <Table.CellHeader>Date of birth:</Table.CellHeader>
            <Table.Cell>{location.state.dob.day}/{location.state.dob.month}/{location.state.dob.year}</Table.Cell>
          </Table.Row>
        </Table>

        <Button onClick={updateDOB}>Confirm</Button>

        <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
          Cancel
        </Button>


      </Main>
    </div>
  );
}

export default DOBChangeConfirmation;
