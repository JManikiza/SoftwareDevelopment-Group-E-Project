/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Button, Heading, Main, Paragraph, SectionBreak, Table } from "govuk-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../../../Navigation";

function AddressChangeConfirmation(){

    const navigate = useNavigate();

    const [data, setData] = useState({});
    const location = useLocation();
    const address = location.state?.address;

    const payload = address;

    useEffect(() => {
        const title = 'Address Change';
        document.title = title;
  })
  
    useEffect(() => {
        fetch('http://localhost:4000/getData.php')
          .then(response => response.json())
          .then(data => {
            setData({
                previousAddress: data[0].Postcode,
            });
          })
          .catch(error => console.error(error));
    }, []);

    console.log("address:", address);

const updatePostcode = () => {
  fetch('http://localhost:4000/updatePostcode.php', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({postcode: payload}),
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
                
                <SectionBreak />
                
                <Table>
                    <Table.Row>
                        <Table.CellHeader>
                            Postcode:
                        </Table.CellHeader>
                        <Table.Cell>
                           {data.previousAddress}
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
