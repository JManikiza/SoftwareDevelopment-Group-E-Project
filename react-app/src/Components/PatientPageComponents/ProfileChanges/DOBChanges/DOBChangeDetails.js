/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Table, Heading, Main, Button, SectionBreak, Breadcrumbs } from "govuk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function NameChangeCircumstances(){

    const navigate = useNavigate();
     const [data, setData] = useState({});

    useEffect(() => {
        const title = 'DOB Change';
        document.title = title;
  })

useEffect(() => {
  fetch('http://localhost:4000/getData.php')
    .then(response => response.json())
    .then(data => {
      setData({
        NHSNo: data[0].NHSNumber,
        forename: data[0].Forename,
        surname: data[0].Surname,
        dob: new Date(data[0].PersonDOB).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' }),      });
    })
    .catch(error => console.error(error));
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
            <Table.CellHeader>NHS number:</Table.CellHeader>
            <Table.Cell>{data.NHSNo}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>First name:</Table.CellHeader>
            <Table.Cell>{data.forename}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Last name:</Table.CellHeader>
            <Table.Cell>{data.surname}</Table.Cell>
          </Table.Row>
                    <Table.Row>
            <Table.CellHeader>Current DOB:</Table.CellHeader>
            <Table.Cell>{data.dob}</Table.Cell>
          </Table.Row>
        </Table>

                <Button onClick={() => navigate("/DOBChangeEnter")}>
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

export default NameChangeCircumstances;