import { useNavigate } from "react-router-dom";
import { H3,H6,Main,GridCol,GridRow,Button,Breadcrumbs,ButtonArrow } from "govuk-react";
// Create a button variable and add CSS
import Navigation from "../../Components/Navigation";
function DoctorDashBoard(){
    const Navigate=useNavigate();
    return (

        <div>
 <Navigation pageLink1="/" PageName1="Home" pageLink2="/DoctorViewandUpdate" PageName2="Doctor view and update" pageLink3="/DoctorAppointment" PageName3="Doctor List Of Appointments"/>

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
  <GridCol style={{alignContent:"center"}}>
    <div>
    <Button
  icon={<ButtonArrow /> }
  onClick={()=>Navigate("/DoctorAppointment")}
  style={{width:"100%",height:"50px"}}
>
Doctor Appointments
</Button>
  
    </div>
  </GridCol>
  <GridCol>
    <div >
    <Button
  icon={<ButtonArrow />}
  onClick={()=>Navigate("/DoctorViewandUpdate")}
  style={{width:"82%",height:"50px"}}
>
view Patient Records and update it
</Button>
  

    </div>
  </GridCol>

</GridRow>

</Main>

<br/>
<br/>
<br/> <br/>
<br/>
<br/>

        </div>
    );

}
export default DoctorDashBoard;