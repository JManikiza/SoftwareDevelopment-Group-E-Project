import { Main,Breadcrumbs,H3 } from "govuk-react";

function DoctorViewandUpdate(){
    return(

        <div>
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