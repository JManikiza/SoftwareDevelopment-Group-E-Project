
import { Table, H2, Link } from "govuk-react";
import { useNavigate } from "react-router-dom";

function ViewTab(){

  const navigate = useNavigate();

    return(
      <div>
        <br/>
    <H2>
      View/Cancel Appointment
    </H2>
    <Table head={<Table.Row><Table.CellHeader>Appointment</Table.CellHeader><Table.CellHeader>DD/MM/YY</Table.CellHeader><Table.CellHeader>Time 24H</Table.CellHeader><Table.CellHeader></Table.CellHeader></Table.Row>}>
      <Table.Row>
        <Table.Cell>
          Dr.Francis
        </Table.Cell>
        <Table.Cell>
          09/05/23
        </Table.Cell>
        <Table.Cell>
          11:30
        </Table.Cell>
        <Table.Cell>
          <Link onClick={() => navigate("/CancelConfirm")} children="Cancel"/>
        </Table.Cell>
      </Table.Row>
    </Table>
    </div>
    )};

export default ViewTab;