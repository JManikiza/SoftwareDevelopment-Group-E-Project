import { Main,Table,Breadcrumbs,H3,Button } from "govuk-react";
import Navigation from "../../Components/Navigation";
import jq from "jquery";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DoctorAppointment() {
  const navigate=useNavigate();
  const [appointmentData, setAppointmentData] = useState([]);

  useEffect(() => {
    getPatientData();
  }, []);

  function getPatientData() {
    var AppointmentData = {
      empID: 1,
    };

    jq.ajax({
      type: "POST",
      url: "http://localhost:4000/DocViewAppointments.php",
      mode: "no-core",
      data: AppointmentData,
      success(data) {
        console.log(data);
        if (data === "no patients") {
          alert("no Appointment has been made")
        } else {
          var json = jq.parseJSON(data);
          setAppointmentData(json);

        }
      },
    });
  }

  return(
    <div>
      <Navigation
       pageLink1="/" PageName1="Home" pageLink2="/DoctorDashBoard"
        PageName2="Doctor DashBoard" pageLink3="/DoctorViewandUpdate"
         PageName3="Doctor View and Update"/>

      <Main>
        <Breadcrumbs>

          <Breadcrumbs.Link href="/DoctorAppointment">
            Doctor Appointment
          </Breadcrumbs.Link>
        </Breadcrumbs>
        <br/>  <br/>
     
        {appointmentData.length > 0 && (
  <H3 size="LARGE" style={{ textAlign: "center" }}>
    {"Doctor " + appointmentData[0].empFName + " " + appointmentData[0].empLName}
  </H3>
)}
          
        <br/><br/><br/>
        <Table  
          caption={"List of Appointment"}
          head={
            <Table.Row>
              <Table.CellHeader>Patient NHS number</Table.CellHeader>
              <Table.CellHeader>Patient Name</Table.CellHeader>
              <Table.CellHeader  setWidth="12%" style={{ textAlign: "left" }}> Date</Table.CellHeader>
              <Table.CellHeader  setWidth="10%" style={{ textAlign: "left" }}> Time</Table.CellHeader>
              <Table.CellHeader setWidth="30%" style={{ textAlign: "left" }}>Appointment Note</Table.CellHeader>
              <Table.CellHeader setWidth="15%" style={{ textAlign: "left" }}>View medical Record</Table.CellHeader>

            </Table.Row>
          }
        >
      


          {appointmentData.map((appointment) => (

            <Table.Row>
              
              <Table.CellHeader style={{ textAlign: "left" }}>
                {appointment.NHSNumber}
              </Table.CellHeader>
              <Table.Cell numeric  style={{ textAlign: "left" }} >
              {appointment.Forename+" "+appointment.Surname}
              </Table.Cell>
              <Table.Cell numeric  style={{ textAlign: "left" }}>
                {appointment.appDateAssigned}
              </Table.Cell>
              <Table.Cell numeric  style={{ textAlign: "left" }}>
                {appointment.AppTimeAssigned}
              </Table.Cell>
              <Table.Cell   style={{ textAlign: "left" }}>
                {appointment.appNotes}
              </Table.Cell>
              <Table.Cell numeric  style={{ textAlign: "left" }}>
                <Button
                   buttonColour="#f3f2f1"
                   buttonHoverColour="#ffdd00"
                   buttonShadowColour="#f47738"
                   buttonTextColour="#0b0c0c"
                   style={{margin:" 0px 0px 0px 0px"}}
                 onClick={() => navigate("/DoctorViewandUpdate", {
                 state: { PatientNHSNumber: appointment.NHSNumber,
                 PatientFName:appointment.Forename,
                 PatientSName:appointment.Surname,
                 PatientDOB:appointment.PersonDOB,
                 PatientMedicalNote:appointment.MedicalRecord }})}>
                  View  Record
                </Button>
              </Table.Cell>
            </Table.Row>
          ) )}
  
</Table>
</Main>
<br/><br/><br/>
        </div>
    );
}
export default DoctorAppointment;