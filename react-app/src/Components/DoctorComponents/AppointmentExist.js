import { useNavigate } from "react-router-dom";

import { Main,Table,Button,H3,Breadcrumbs } from "govuk-react";
function AppointmentExist(props) {
    const navigate=useNavigate();
    return(
    <div>
    <Main>
      <Breadcrumbs>

        <Breadcrumbs.Link href="/DoctorAppointment">
          Doctor Appointment
        </Breadcrumbs.Link>
      </Breadcrumbs>
      <br/>  <br/>

            <H3 size="LARGE" style={{ textAlign: "center" }}>
              {"Doctor " +
                props.appointmentData[0].empFName +
                " " +
                props.appointmentData[0].empLName}
            </H3>
            <Table        caption={"List of Appointment"}
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
              {props.appointmentData.map((appointment) => (
                <Table.Row key={appointment.NHSNumber}>
                  <Table.CellHeader style={{ textAlign: "left" }}>
                    {appointment.NHSNumber}
                  </Table.CellHeader>
                  <Table.Cell numeric style={{ textAlign: "left" }}>
                    {appointment.Forename + " " + appointment.Surname}
                  </Table.Cell>
                  <Table.Cell numeric style={{ textAlign: "left" }}>
                    {appointment.appDateAssigned}
                  </Table.Cell>
                  <Table.Cell numeric style={{ textAlign: "left" }}>
                    {appointment.AppTimeAssigned}
                  </Table.Cell>
                  <Table.Cell style={{ textAlign: "left" }}>
                    {appointment.appNotes}
                  </Table.Cell>
                  <Table.Cell numeric style={{ textAlign: "left" }}>
                    <Button
                    buttonColour="#f3f2f1"
                    buttonHoverColour="#ffdd00" 
                    buttonShadowColour="#f47738"
                    buttonTextColour="#0b0c0c"   
                      style={{ margin: "0px 0px 0px 0px" }}
                      onClick={() =>
                        navigate("/DoctorViewandUpdate", {
                          state: {
                            AppointmentNumber:appointment.appID,
                            PatientNHSNumber: appointment.NHSNumber,
                            PatientFName:appointment.Forename,
               PatientSName:appointment.Surname,
               PatientDOB:appointment.PersonDOB,
               PatientMedicalNote:appointment.MedicalRecord
                          },
                        })
                      }
                    >
                      View Record
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table>
          </Main>
    </div>);
}
export  default AppointmentExist;