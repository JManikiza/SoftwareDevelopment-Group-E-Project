import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery"; // Importing jQuery library
import Navigation from "../../Components/Navigation";
import { Main,Table,Button,H3,Breadcrumbs } from "govuk-react";
import AppointmentExist from "../../Components/DoctorComponents/AppointmentExist";


function DoctorAppointment() {
 
  const navigate = useNavigate();
  const [Employeedata,setEmployeedata]=useState([]);
  const [appointmentData, setAppointmentData] = useState([]);

  useEffect(() => {
    getAppointmentData();
  }, []);

  function getAppointmentData() {
    const data = {
      empID: localStorage.getItem("NHSNumber"),
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
        

<AppointmentExist props={appointmentData=appointmentData} />
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