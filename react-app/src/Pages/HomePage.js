// GovUK imports
import {
    TopNav,
    Footer,
    PhaseBanner,
    Breadcrumbs,
    Panel,
    Button,
  } from "govuk-react";
  
  function HomePage() {
    return (
      <div>
        <PhaseBanner level="Alpha">
          <p>
            <strong>Alpha 0.0.1</strong> This is a new service – your{" "}
            <a href="#">feedback</a> will help us to improve it.
          </p>
        </PhaseBanner>
  
        <Breadcrumbs>
          <Breadcrumbs.Link href="#">Breadcrumb A</Breadcrumbs.Link>
          <Breadcrumbs.Link href="#">Breadcrumb B</Breadcrumbs.Link>
          <Breadcrumbs.Link href="#">Breadcrumb C</Breadcrumbs.Link>
        </Breadcrumbs>
  
        <Panel title="Welcome to Group E's GovUK React page">
          <p>This page is built using the GovUK React library.</p>
          <Button>Get started</Button>
        </Panel>
      </div>
    );
  }
  
  export default HomePage;
  