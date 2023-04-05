// GovUK imports
import {
  PhaseBanner,
  Breadcrumbs,
  Panel,
  Button,
} from "govuk-react";

function HomePage() {
  return (
    <div>
      <Breadcrumbs>
        <Breadcrumbs.Link href="#">Breadcrumb A</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Breadcrumb B</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Breadcrumb C</Breadcrumbs.Link>
      </Breadcrumbs>

      <Panel title="Welcome to Group E's GovUK React page">
        <p>
        <Button>Patient</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button>Administrator</Button>
        </p>
      </Panel>

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
