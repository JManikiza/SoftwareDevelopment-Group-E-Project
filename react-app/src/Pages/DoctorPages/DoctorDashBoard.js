import { useNavigate } from "react-router-dom";
import { H3,H6,Main,GridCol,GridRow,Button,Breadcrumbs } from "govuk-react";
// Create a button variable and add CSS

function DoctorDashBoard(){
    const Navigate=useNavigate();
    return (

        <div>
          <Breadcrumbs>
  <Breadcrumbs.Link href="/">
    HomePage
  </Breadcrumbs.Link>
  <Breadcrumbs.Link href="/DoctorDashBoard">
  Doctor DashBoard</Breadcrumbs.Link>
  </Breadcrumbs>
  <br/>  <br/>

          <Main>
            <>
            <H6 size={80} style={{textAlign: "center"}}>
   Doctor + Name
   
    
  </H6>
  <H3 size="LARGE" style={{textAlign: "center"}}>
welcome To the dashboard  </H3>
<br/><br/><br/>
            </>
<GridRow style={{textAlign: "center"}}>
  <GridCol>
    <div>

    <Button buttonColour="#1d70b8" onClick={()=>Navigate("/DoctorAppointment")}>
  Doctor Appointments</Button>
    </div>
  </GridCol>
  <GridCol>
    <div >

    <Button buttonColour="#1d70b8" onClick={()=>Navigate("/DoctorViewandUpdate")}>
  view Patient Records and update it
</Button>
    </div>
  </GridCol>

</GridRow>
</Main>

<br/>
<br/>
<br/>

        </div>
    );

}
export default DoctorDashBoard;