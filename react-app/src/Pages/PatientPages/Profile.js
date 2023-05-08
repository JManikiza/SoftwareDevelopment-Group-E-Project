/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React, { useState, useEffect } from 'react';
import { Table, Link, Heading, Main, SectionBreak, Pagination } from 'govuk-react';
import { useNavigate } from "react-router-dom";
import Navigation from '../../Components/Navigation';
import $ from "jquery";
import Logout from '../../Components/LoginComponents/Logout';

function Profile() {
  
  const navigate = useNavigate();

useEffect(() => {
    const title = 'Profile';
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
  
  let fullName = response.Forename + ' ' + response.Surname;

  return (
    <div>
      <Navigation pageLink1="/" PageName1="Home"/>
      <Logout />

      <Main>
 
        <Pagination>
          <Pagination.Anchor onClick={() => navigate("/Patient")} previousPage>
            Back to start
          </Pagination.Anchor>
          <Pagination.Anchor onClick={() => navigate("/GPServices")} nextPage>
            GP Services
          </Pagination.Anchor>
        </Pagination>

        <Heading>Profile</Heading>

        <SectionBreak level="SMALL" visible={false}/>

        <Table>

          <SectionBreak level="SMALL" visible={true}/>

          <Table.Row>
            <Table.CellHeader>
              Name
            </Table.CellHeader>
            <Table.Cell>
              {fullName}
            </Table.Cell>
            <Table.Cell>
              <Link onClick={() => navigate("/NameChangeStart")} children="Change"/>
            </Table.Cell>
          </Table.Row>


          <Table.Row>
            <Table.CellHeader>
              D.O.B
            </Table.CellHeader>
            <Table.Cell>
              {response.PersonDOB}
            </Table.Cell>
            <Table.Cell>
              <Link onClick={() => navigate("/DOBChangeStart")} children="Change"/>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.CellHeader>
              Gender
            </Table.CellHeader>
            <Table.Cell>
              {response.GenderCode}
            </Table.Cell>
            <Table.Cell>
              <Link onClick={() => navigate("/GenderChangeStart")} children="Change"/>
            </Table.Cell>
          </Table.Row>


          <Table.Row>
            <Table.CellHeader>
              Address
            </Table.CellHeader>
            <Table.Cell>
              {response.Postcode}
            </Table.Cell>
            <Table.Cell>
              <Link onClick={() => navigate("/AddressChangeStart")} children="Change"/>
            </Table.Cell>
          </Table.Row>


          <Table.Row>
            <Table.CellHeader>
              Email
            </Table.CellHeader>
            <Table.Cell>
              {response.EmailAddress}
            </Table.Cell>
            <Table.Cell>
              <Link onClick={() => navigate("/EmailChangeStart")} children="Change"/>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.CellHeader>
              Contact No.
            </Table.CellHeader>
            <Table.Cell>
              {response.PhoneNumber}
            </Table.Cell>
            <Table.Cell>
              <Link onClick={() => navigate("/NumberChangeStart")} children="Change"/>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.CellHeader>
              Password
            </Table.CellHeader>
            <Table.Cell>
              *************
            </Table.Cell>
            <Table.Cell>
              <Link onClick={() => navigate("/PasswordChangeStart")} children="Change"/>
            </Table.Cell>
          </Table.Row>

         </Table>

      </Main>

    </div>
  );
}

export default Profile;