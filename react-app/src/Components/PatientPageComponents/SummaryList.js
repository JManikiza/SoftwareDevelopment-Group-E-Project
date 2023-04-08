import {Table, Link, Heading, Main, 
        SectionBreak, Pagination, BackLink} from 'govuk-react';


import { useNavigate } from "react-router-dom";

function SummaryList() {

  const navigate = useNavigate();

  return (
<div>
{/*   
  <Pagination>
    <Pagination.PaginationAnchor to="" nextPage>
      GP Services  
    </Pagination.PaginationAnchor>
  </Pagination> */}


  <Main>
      <BackLink

  onClick={() => navigate("/Patient")}
>
  Back
</BackLink>
    <SectionBreak level="LARGE" visible={false}/>
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