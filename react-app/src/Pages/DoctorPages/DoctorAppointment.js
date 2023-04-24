
import { Main,Table,Breadcrumbs,H3 } from "govuk-react";
import Navigation from "../../Components/Navigation";
function DoctorAppointment() {
    
    return(
        <div>
 <Navigation pageLink1="/" PageName1="Home" pageLink2="/DoctorDashBoard" PageName2="Doctor DashBoard" pageLink3="/DoctorViewandUpdate" PageName3="Doctor View and Update"/>

<Main>

<Breadcrumbs>
  <Breadcrumbs.Link href="/">
    HomePage
  </Breadcrumbs.Link>
  <Breadcrumbs.Link href="/DoctorDashBoard">
  Doctor DashBoard</Breadcrumbs.Link>
  <Breadcrumbs.Link href="/DoctorAppointment">
  Doctor Appointment</Breadcrumbs.Link>
  </Breadcrumbs>
  <br/>  <br/>
  <H3 size="LARGE" style={{textAlign: "center"}}>
Doctor List of Sceduled Appointment </H3>
<br/><br/><br/>
<Table 
  caption="Doctor Name: List Of  Appointments Booked "
  
  head={<Table.Row><Table.CellHeader >Patient NHS number </Table.CellHeader><Table.CellHeader>Patient Name </Table.CellHeader><Table.CellHeader numeric setWidth="12%" style={{ textAlign: "left" }}> Date</Table.CellHeader><Table.CellHeader numeric setWidth="10%" style={{ textAlign: "left" }}> Time</Table.CellHeader> <Table.CellHeader setWidth="30%" style={{ textAlign: "left" }}>Appointment Note</Table.CellHeader></Table.Row>}
>
  <Table.Row>
    <Table.CellHeader style={{ textAlign: "left" }}>
      number
    </Table.CellHeader>
    <Table.Cell numeric  style={{ textAlign: "left" }} >
patient name
    </Table.Cell>
    <Table.Cell numeric  style={{ textAlign: "left" }}>
date 
    </Table.Cell>
    <Table.Cell numeric  style={{ textAlign: "left" }}>
time 
    </Table.Cell>
    <Table.Cell numeric  style={{ textAlign: "left" }}>
Appointments
    </Table.Cell>
  </Table.Row>
  
</Table>
</Main>
<br/><br/><br/>
        </div>
    );
}
export default DoctorAppointment;