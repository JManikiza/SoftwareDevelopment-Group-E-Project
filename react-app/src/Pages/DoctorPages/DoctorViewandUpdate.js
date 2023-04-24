import { Main,Breadcrumbs,H3 } from "govuk-react";
import Navigation from "../../Components/Navigation";
function DoctorViewandUpdate(){
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

            </Main>    
        </div>
    );
}
export default DoctorViewandUpdate;