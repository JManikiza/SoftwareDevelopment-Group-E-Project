
import { Table, Tabs, H2 } from "govuk-react";
import { useParams } from "react-router-dom";

function BookTab(){

    return(

          <div>
            <br />
    <H2>
      Book Appointment
    </H2>
    <Table head={<Table.Row><Table.CellHeader>Case manager</Table.CellHeader><Table.CellHeader>Cases opened</Table.CellHeader><Table.CellHeader>Cases closed</Table.CellHeader></Table.Row>}>
      <Table.Row>
        <Table.Cell>
          David Francis
        </Table.Cell>
        <Table.Cell>
          24
        </Table.Cell>
        <Table.Cell>
          18
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Paul Farmer
        </Table.Cell>
        <Table.Cell>
          16
        </Table.Cell>
        <Table.Cell>
          20
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Rita Patel
        </Table.Cell>
        <Table.Cell>
          24
        </Table.Cell>
        <Table.Cell>
          27
        </Table.Cell>
      </Table.Row>
    </Table>
  </div>
    
    )};

export default BookTab;