
import { Table, Tabs, H2 } from "govuk-react";

function DoctorTab(){

    return(
<div>
  <br/>
    <H2>
      Doctors Available
    </H2>
    <Table head={<Table.Row><Table.CellHeader>Names</Table.CellHeader><Table.CellHeader>Spec</Table.CellHeader><Table.CellHeader>Cases closed</Table.CellHeader></Table.Row>}>
      <Table.Row>
        <Table.Cell>
          David Francis
        </Table.Cell>
        <Table.Cell>
          3
        </Table.Cell>
        <Table.Cell>
          0
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Paul Farmer
        </Table.Cell>
        <Table.Cell>
          1
        </Table.Cell>
        <Table.Cell>
          0
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Rita Patel
        </Table.Cell>
        <Table.Cell>
          2
        </Table.Cell>
        <Table.Cell>
          0
        </Table.Cell>
      </Table.Row>
    </Table>
  </div>
    
    
    )};

export default DoctorTab;