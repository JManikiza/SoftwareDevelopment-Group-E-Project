/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Button, Heading, Main, Paragraph, SectionBreak, Table, Breadcrumbs } from "govuk-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../../../Navigation";
import $ from 'jquery';
import Logout from "../../../LoginComponents/Logout";

function AddressChangeConfirmation(){

    const navigate = useNavigate();

    const location = useLocation();
    const address = location.state?.address;

    useEffect(() => {
        const title = 'Address Change';
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

    console.log("address:", address);

const payload = {
    postcode: address,
    nhs_number: nhs_number
};

const updatePostcode = () => {
    $.ajax({
        url: "http://localhost:4000/updatePostcode.php",
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
                    <Breadcrumbs.Link hred="/AddressChangeStart">Start</Breadcrumbs.Link>
                    <Breadcrumbs.Link hred="/AddressChangeDetails">Details</Breadcrumbs.Link>
                    <Breadcrumbs.Link hred="/AddressChangeEnter">Enter</Breadcrumbs.Link>
                </Breadcrumbs>
                
                <Heading>
                    Confirm your changes
                </Heading>

                <Heading size="MEDIUM">Previous details were:</Heading>
                
                <SectionBreak />
                
                <Table>
                    <Table.Row>
                        <Table.CellHeader>
                            Postcode:
                        </Table.CellHeader>
                        <Table.Cell>
                           {response.Postcode}
                        </Table.Cell>
                    </Table.Row>
                </Table>
 
                <Heading size="MEDIUM">New details are:</Heading>

                <Table>
                    <Table.Row>
                        <Table.CellHeader>
                            Postcode:
                        </Table.CellHeader>
                        <Table.Cell>
                            {address}
                        </Table.Cell>
                    </Table.Row>
                </Table>

                <Button onClick={updatePostcode}>Confirm</Button>                                
                <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
                    Cancel
                </Button>       
            </Main>
        </div>
    );
}

export default AddressChangeConfirmation;
