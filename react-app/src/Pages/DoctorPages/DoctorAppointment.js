import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery"; // Importing jQuery library
import Navigation from "../../Components/Navigation";
import { Main,Table,Button,H3,Breadcrumbs } from "govuk-react";


function DoctorAppointment() {
 
  const navigate = useNavigate();
  const [Employeedata,setEmployeedata]=useState([]);
  const [appointmentData, setAppointmentData] = useState([]);

  useEffect(() => {
    getAppointmentData();
  }, []);

  function getAppointmentData() {
    const data = {
      empID: 1,
    };
 
    $.ajax({
      type: "POST",
      url: "http://localhost:4000/DocViewAppointments.php",
      data: data,
      dataType: "json",
      success: function (appoint) {
        console.log(appoint);
        if (appoint === "no patients") {
          alert("No appointments have been made");
        } else {
          setAppointmentData(appoint);
        }
      },
  
    });
    $.ajax({
      type: "POST",
      url: "http://localhost:4000/docData.php",
      data: data,
      dataType: "json",
      success: function (emp) {
        if (emp === "no patients") {
          alert("No appointments have been made");
        } else {
      
          setEmployeedata(emp);
        }
      },
  
    });
  }

  return (
    <div>
      {appointmentData.length > 0 && appointmentData[0].Forename != null ? (
        <>
          <Navigation
            pageLink1="/"
            PageName1="Home"
            pageLink2="/DoctorAppointment"
            PageName2="Doctor Appointment"
           
          />
            <Main>
      <Breadcrumbs>

        <Breadcrumbs.Link href="/DoctorAppointment">
          Doctor Appointment
        </Breadcrumbs.Link>
      </Breadcrumbs>
      <br/>  <br/>

            <H3 size="LARGE" style={{ textAlign: "center" }}>
              {"Doctor " +
                appointmentData[0].empFName +
                " " +
                appointmentData[0].empLName}
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
              {appointmentData.map((appointment) => (
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


        </>
      ) : (
   <><Navigation
   pageLink1="/"
   PageName1="Home"
   pageLink2="/DoctorAppointment"
   PageName2="No appointment today"

 /><Main><br/>
    <Breadcrumbs>

<Breadcrumbs.Link href="/DoctorAppointment">
  Doctor Appointment
</Breadcrumbs.Link>
</Breadcrumbs>
<br/><br/><br/><br/>
      

<h1  style={{textAlign:"center",fontSize:"50px"}}>
  {Employeedata.length > 0 && Employeedata[0].empFName !== null
    ? "Doctor "+Employeedata[0].empFName + " " + Employeedata[0].empLName
    : "No doctor found"}
</h1>
     <br/>    <br/>    
  <h3 style={{textAlign:"center",fontSize:"30px"}}>no appointment has been made yet.  </h3>
  </Main>
 
 </>

      )}
    </div>
  );
}

export default DoctorAppointment;