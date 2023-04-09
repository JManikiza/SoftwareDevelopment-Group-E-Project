import React from 'react';
import {Table, Link, Heading, Main, 
        SectionBreak, Pagination} from 'govuk-react';

import { useNavigate } from "react-router-dom";


function Profile(){

  const navigate = useNavigate();

  return (
    <div>



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
              Fetched data of Full Name
            </Table.Cell>
            <Table.Cell>
              <Link to="/PatientNameChange" children="Change"/>
            </Table.Cell>
          </Table.Row>


          <Table.Row>
            <Table.CellHeader>
              D.O.B
            </Table.CellHeader>
            <Table.Cell>
              Fetched data of D.O.B
            </Table.Cell>
            <Table.Cell>
              <Link to="#" children="Change"/>
            </Table.Cell>
          </Table.Row>


          <Table.Row>
            <Table.CellHeader>
              Address
            </Table.CellHeader>
            <Table.Cell>
              Fetched data of Address
            </Table.Cell>
            <Table.Cell>
              <Link to="#" children="Change"/>
            </Table.Cell>
          </Table.Row>


          <Table.Row>
            <Table.CellHeader>
              Email
            </Table.CellHeader>
            <Table.Cell>
              Fetched data of Email
            </Table.Cell>
            <Table.Cell>
              <Link to="#" children="Change"/>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.CellHeader>
              Contact No.
            </Table.CellHeader>
            <Table.Cell>
              Fetched data of Contact No.
            </Table.Cell>
            <Table.Cell>
              <Link to="#" children="Change"/>
            </Table.Cell>
          </Table.Row>

         </Table>

      </Main>

    </div>
  );
}

export default Profile;