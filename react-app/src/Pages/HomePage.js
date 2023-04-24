// GovUK imports
import {PhaseBanner, Breadcrumbs,Panel, Button, SectionBreak
} from "govuk-react";
import Navigation from "../Components/Navigation";


function HomePage() {
  return (
    <div>
            <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

      <SectionBreak level="XLARGE" visible={false}/>

      <Panel title="Welcome to Group E's GovUK React page">
        <p>
        <Button>Patient</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button>Administrator</Button>
        </p>
      </Panel>


      <SectionBreak level="XLARGE" visible={false}/>
      <SectionBreak level="XLARGE" visible={false}/>
      <SectionBreak level="LARGE" visible={true}/>



      <PhaseBanner level="Alpha">
        <p>
          <strong>Alpha 0.0.1</strong> This is a new service – your{" "}
          <a href="#">feedback</a> will help us to improve it.
        </p>
      </PhaseBanner>

    </div>
  );
}

export default HomePage;
