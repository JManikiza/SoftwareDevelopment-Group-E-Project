/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Button, Heading, Main,Table, SectionBreak } from "govuk-react";
import React, {useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../../../Navigation";

function EmailChangeConfirmation(){

    const navigate = useNavigate();

     const [data, setData] = useState({});
    const location = useLocation();
    const email = location.state?.email;

    const payload = email;

    useEffect(() => {
        fetch('http://localhost:4000/getData.php')
          .then(response => response.json())
          .then(data => {
            setData({
                previousEmail: data[0].EmailAddress,
            });
          })
          .catch(error => console.error(error));
    }, []);

    console.log("emailAddress:", email);

const updateEmail = () => {
  fetch('http://localhost:4000/updateEmail.php', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: payload}),
    credentials: 'include',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to update postcode');
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
                            Email:
                        </Table.CellHeader>
                        <Table.Cell>
                           {data.previousEmail}
                        </Table.Cell>
                    </Table.Row>
                </Table>
 
                <Heading size="MEDIUM">New details are:</Heading>

                <Table>
                    <Table.Row>
                        <Table.CellHeader>
                            Email:
                        </Table.CellHeader>
                        <Table.Cell>
                            {email}
                        </Table.Cell>
                    </Table.Row>
                </Table>

                <Button onClick={updateEmail}>
                    Confirm
                </Button>
                                
                <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
                    Cancel
                </Button>       
                
            </Main>
        </div>

    );
}

export default EmailChangeConfirmation;