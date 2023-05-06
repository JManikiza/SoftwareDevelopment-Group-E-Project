/*
author(s)
Name:Mohamed Mohamed
ID:w1830958
*/

//imported function section
import React, { useState, useEffect } from "react";
import $ from "jquery"; // Importing jQuery library
import Navigation from "../../Components/Navigation";
import { Main,Breadcrumbs } from "govuk-react";
import AppointmentExist from "../../Components/DoctorComponents/AppointmentExist";
import Logout from "../../Components/LoginComponents/Logout";


function DoctorAppointment() {
 //2 variables to store data inside a list.
  const [Employeedata,setEmployeedata]=useState([]);
  const [appointmentData, setAppointmentData] = useState([]);
//useEffect to get the data from the database and store it to the appointmentData List
  useEffect(() => {
    getAppointmentData();
  }, []);
//data const storing the data passed from login using the localstorage method to retireve it.
//data will be used to pass employee id to the php to retireve their appointments data.
//the first ajax call is made to retireve the data from the database and stores in appointmentData.
//second ajax call is made to retireve the data from the database and stores in Employeedata.

  function getAppointmentData() {
    const data = {
      empID:localStorage.getItem('empId'),
    };
 
    $.ajax({
      type: "POST",
      url: "http://localhost:4000/DocViewAppointments.php",
      data: {empID:data.empID},
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
      data: {empID:data.empID},
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
  //function to render the appointment data
  //after that comes the apointmentData checking it contains any data and if so it checks 
  //if forename in appointmentData is not null then it will render the appointment data
  //if forename exist i will display the navigation components along with the appointmentExist,.js component
  //else it will display the employeeData content and display the navigation component, breadcrumbs component and logout component
  //and massage stating no appointment has been made.

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
<br/><br/><br/>
<Logout/>
<br/><br/>    

<AppointmentExist appointmentData={appointmentData} />
        </>
      ) : (
   <><Navigation
   pageLink1="/"
   PageName1="Home"
   pageLink2="/DoctorAppointment"
   PageName2="No appointment today"

 />
<br/><br/><br/>
<Logout/>
<br/><br/>
 <Main><br/>
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