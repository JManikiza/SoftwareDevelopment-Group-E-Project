import {Table, Link, Heading, Main} from 'govuk-react';


import { useNavigate } from "react-router-dom";

function SummaryList() {
  return (
<div>
  <Main>
    <Heading>Profile</Heading>

    <Table caption="Profile">
      

      <Table.Row>
        <Table.CellHeader>
          Name
        </Table.CellHeader>
        <Table.Cell>
          Fetched data of Full Name
        </Table.Cell>
        <Table.Cell>
          <Link to="#" children="Change"/>
        </Table.Cell>
      </Table.Row>


      <Table.Row>
        <Table.CellHeader>D.O.B</Table.CellHeader>
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

export default SummaryList;