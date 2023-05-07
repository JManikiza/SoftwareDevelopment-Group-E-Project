/**

    Author(s) of this code:
    Joven Manikiza
    */

import { Button, Heading, Main,Table, SectionBreak } from "govuk-react";
import React, {useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../../../Navigation";

function NumberChangeConfirmation(){

const navigate = useNavigate();

const [data, setData] = useState({});
const location = useLocation();
const number = location.state?.number;

console.log("Location:", location);
console.log("Number:", number);


console.log("Number before fetch:", number);

useEffect(() => {
    fetch('http://localhost:4000/getData.php')
      .then(response => response.json())
      .then(data => {
        console.log("Response:", data);
        setData({
            previousNumber: data[0].PhoneNumber.length === 10 ? '0' + data[0].PhoneNumber : data[0].PhoneNumber,

        });
      })
      .catch(error => console.error(error));
}, []);

console.log("Number from DB:", data.previousNumber);

console.log("Number before PUT:", number);

const updateNumber = () => {
  const numberInt = parseInt(number);
  console.log("Payload:", numberInt, typeof numberInt);

  fetch('http://localhost:4000/updateNumber.php', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phone_number: numberInt }),
    credentials: 'include',
  })
  .then(response => {
    console.log("Response status:", response.status);
    if (!response.ok) {
      throw new Error('Failed to update number');
    }
    navigate('/Application');
  })
  .catch(error => console.error(error));
};
return (
    <div>
        <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

        <Main>

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
                       +44{data.previousNumber}
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