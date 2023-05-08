/**

    Author(s) of this code:
    Joven Manikiza
    */

import { Button, Heading, Main,Table, SectionBreak, Breadcrumbs } from "govuk-react";
import React, {useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../../../Navigation";
import $ from 'jquery';
import Logout from "../../../LoginComponents/Logout";


function NumberChangeConfirmation(){

const navigate = useNavigate();

const [data, setData] = useState({});
const location = useLocation();
const number = location.state?.number;


console.log("Location:", location);
console.log("Number:", number);

    useEffect(() => {
    const title = 'Number Change';
    document.title = title;
  })

console.log("Number before fetch:", number);

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

console.log("Number from DB:", data.previousNumber);

console.log("Number before PUT:", number);

  const numberInt = parseInt(number);
  console.log("Payload:", numberInt, typeof numberInt);
  
    const payload = {
    phone_number: numberInt,
    nhs_number: nhs_number
};

const updateNumber = () => {

    $.ajax({
        url: "http://localhost:4000/updateNumber.php",
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
                    <Breadcrumbs.Link hred="/NumberChangeStart">Start</Breadcrumbs.Link>
                    <Breadcrumbs.Link hred="/NumberChangeDetails">Details</Breadcrumbs.Link>
                    <Breadcrumbs.Link hred="/NumberChangeEnter">Enter</Breadcrumbs.Link>
                </Breadcrumbs>
            <Heading>
                Confirm your changes
            </Heading>

            <Heading size="MEDIUM">Previous details were:</Heading>
            
            <SectionBreak></SectionBreak>

            <Table>
                <Table.Row>
                    <Table.CellHeader>
                        Number:
                    </Table.CellHeader>
                    <Table.Cell>
                       {response.PhoneNumber}
                    </Table.Cell>
                </Table.Row>
            </Table>

            <Heading size="MEDIUM">New details are:</Heading>

            <Table>
                <Table.Row>
                    <Table.CellHeader>
                        Number:
                    </Table.CellHeader>
                    <Table.Cell>
                          {console.log("Payload above user visual:", number)}

                        {number}
                    </Table.Cell>
                </Table.Row>
            </Table>

  {console.log("Payload before confirm:", number)}

            <Button onClick={updateNumber}>
                Confirm
            </Button>
                            
            <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
                Cancel
            </Button>       
            
        </Main>
    </div>

);

}

export default NumberChangeConfirmation;