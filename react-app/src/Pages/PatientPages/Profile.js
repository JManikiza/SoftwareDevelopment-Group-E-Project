/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React, { useState, useEffect } from 'react';
import { Table, Link, Heading, Main, SectionBreak, Pagination } from 'govuk-react';
import { useNavigate } from "react-router-dom";
import Navigation from '../../Components/Navigation';

function Profile() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

useEffect(() => {
    const title = 'Profile';
    document.title = title;
  })
  
useEffect(() => {
  fetch('http://localhost:4000/getData.php')
    .then(response => response.json())
    .then(data => {
      setData({
        fullName: data[0].Forename + ' ' + data[0].Surname,
          dob: new Date(data[0].PersonDOB).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' }),        gender: data[0].GenderCode === '1' ? 'MALE' : 'FEMALE',
        address: data[0].Postcode,
        email: data[0].EmailAddress,
        number: data[0].PhoneNumber.length === 10 ? '0' + data[0].PhoneNumber : data[0].PhoneNumber, 
           });
    })
    .catch(error => console.error(error));
}, []);

  return (
    <div>
      <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

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
              {data.fullName}
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
              {data.dob}
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
              {data.gender}
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
              {data.address}
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
              {data.email}
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
              +44{data.number}
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