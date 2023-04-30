
import { Table, Tabs, H2 } from "govuk-react";
function DRTab(){

    return(

         <div>
          <br/>
    <H2>
      De-Register from GP
    </H2>
    <Table head={<Table.Row><Table.CellHeader>Case manager</Table.CellHeader><Table.CellHeader>Cases opened</Table.CellHeader><Table.CellHeader>Cases closed</Table.CellHeader></Table.Row>}>
      <Table.Row>
        <Table.Cell>
          David Francis
        </Table.Cell>
        <Table.Cell>
          1380
        </Table.Cell>
        <Table.Cell>
          1472
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Paul Farmer
        </Table.Cell>
        <Table.Cell>
          1129
        </Table.Cell>
        <Table.Cell>
          1083
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Rita Patel
        </Table.Cell>
        <Table.Cell>
          1539
        </Table.Cell>
        <Table.Cell>
          1265
        </Table.Cell>
      </Table.Row>
    </Table>
  </div>
    
    
    )};

export default DRTab;