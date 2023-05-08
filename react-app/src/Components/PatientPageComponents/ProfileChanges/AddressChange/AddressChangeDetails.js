/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Main, Heading, SectionBreak, Breadcrumbs,
     Paragraph, Button, Table } from "govuk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";
import $ from 'jquery'; 

function AddressChangeDetails(){

    const navigate = useNavigate();

    const [data, setData] = useState({});

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

    return (
        <div>
            <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

            <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link>Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link>Profile</Breadcrumbs.Link>
                    <Breadcrumbs.Link>Start</Breadcrumbs.Link>
                </Breadcrumbs>
                
                <Heading>About you</Heading>

<Table>
  <Table.Row>
    <Table.CellHeader>
        NHS number:
    </Table.CellHeader>
    <Table.Cell>
      {response.NHSNumber}
    </Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.CellHeader>
      First name:
    </Table.CellHeader>
    <Table.Cell>
      {response.Forename}
    </Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.CellHeader>
      Last name:
    </Table.CellHeader>
    <Table.Cell>
      {response.Surname}
    </Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.CellHeader>
    Current Address:
        </Table.CellHeader>
    <Table.Cell>
        {response.Postcode}
    </Table.Cell>
  </Table.Row>
</Table>
              



                <Button onClick={() => navigate("/AddressChangeEnter")}>
                    Continue
                </Button>

                 <SectionBreak level="SMALL" visible={false}/>
                
                <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
                    Cancel
                </Button>                


            </Main>
        </div>
    );

}

export default AddressChangeDetails;