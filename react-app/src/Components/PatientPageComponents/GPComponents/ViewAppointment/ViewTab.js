
import { Table, H2, Tabs } from "govuk-react";

function ViewTab(){

    return(
      <div>
        <br/>
    <H2>
      View or Cancel an appointment
    </H2>
    <Table head={<Table.Row><Table.CellHeader>Case manager</Table.CellHeader><Table.CellHeader>Cases opened</Table.CellHeader><Table.CellHeader>Cases closed</Table.CellHeader></Table.Row>}>
      <Table.Row>
        <Table.Cell>
          David Francis
        </Table.Cell>
        <Table.Cell>
          98
        </Table.Cell>
        <Table.Cell>
          95
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Paul Farmer
        </Table.Cell>
        <Table.Cell>
          122
        </Table.Cell>
        <Table.Cell>
          133
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Rita Patel
        </Table.Cell>
        <Table.Cell>
          126
        </Table.Cell>
        <Table.Cell>
          142
        </Table.Cell>
      </Table.Row>
    </Table>
    </div>
    )};

export default ViewTab;