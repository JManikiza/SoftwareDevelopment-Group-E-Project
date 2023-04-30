
import { Table, Tabs, H2 } from "govuk-react";

function DoctorTab(){

    return(
<div>
  <br/>
    <H2>
      Doctors Available
    </H2>
    <Table head={<Table.Row><Table.CellHeader>Name</Table.CellHeader><Table.CellHeader>Specialisation</Table.CellHeader><Table.CellHeader>Email</Table.CellHeader><Table.CellHeader>Contact No.</Table.CellHeader></Table.Row>}>
      <Table.Row>
        <Table.Cell>
          Dr.Francis
        </Table.Cell>
        <Table.Cell>
          Haematologist
        </Table.Cell>
        <Table.Cell>
          JFrancis@GP.co.uk
        </Table.Cell>
        <Table.Cell>
          0123456789
        </Table.Cell>
      </Table.Row>
      
    </Table>
  </div>
    
    
    )};

export default DoctorTab;