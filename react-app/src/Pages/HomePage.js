// GovUK imports
import {PhaseBanner, Breadcrumbs,Panel, Button, SectionBreak
} from "govuk-react";



function HomePage() {
  return (
    <div>
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
