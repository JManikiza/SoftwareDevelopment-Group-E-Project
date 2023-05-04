import { Main,Breadcrumbs,H3,Label,LabelText,InputField } from "govuk-react";
import Navigation from "../../Components/Navigation";
import { useLocation } from "react-router-dom";

function DoctorViewandUpdate(){

    const location = useLocation();
    const NHSNumber = location.state.PatientNHSNumber;
    const FName = location.state.PatientFName;
    const SName = location.state.PatientSName;
    const DOB = location.state.PatientDOB;
    const MedicalRecord = location.state.PatientMedicalNote;

 

 

    return(
        <div>
 <Navigation pageLink1="/" PageName1="Home" pageLink2="/DoctorDashBoard" PageName2="Doctor DashBoard" pageLink3="/DoctorAppointment" PageName3="Doctor List Of Appointments"/>

        <Main>

            <Breadcrumbs>
        <Breadcrumbs.Link to="/">
    HomePage
  </Breadcrumbs.Link>
  <Breadcrumbs.Link href="/DoctorDashBoard">
  Doctor DashBoard</Breadcrumbs.Link>
  <Breadcrumbs.Link href="/DoctorViewandUpdate">
  Doctor View and Update Medical Records</Breadcrumbs.Link>
  </Breadcrumbs>
  
  <br/><br/>
  <H3 size="LARGE" style={{textAlign: "center"}}>
View and Update Medical Records  </H3>
<br/><br/><br/>
{NHSNumber}
{FName} {SName}
{DOB}
{MedicalRecord}
<InputField

  input={{
    name: 'group1'
  }}
>

</InputField>

    
            </Main>    
        </div>
    );
}
export default DoctorViewandUpdate;