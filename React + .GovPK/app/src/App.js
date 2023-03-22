// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// GovUK imports
import { TopNav , Footer, PhaseBanner, Breadcrumbs, Panel, Button } from 'govuk-react';


function App() {
  return (
    <div>
      <TopNav
        serviceName="My GovUK React Page"
        homepageUrl="#"
        navigation={
          <div>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Contact</Button>
          </div>
        }
      />

      <PhaseBanner level="Alpha">
        <p>
          <strong>Alpha</strong>
          {' '}
          This is a new service – your <a href="#">feedback</a> will help us to improve it.
        </p>
      </PhaseBanner>

      <Breadcrumbs>
        <Breadcrumbs.Link href="#">Home</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">About</Breadcrumbs.Link>
        <Breadcrumbs.Link href="#">Contact</Breadcrumbs.Link>
      </Breadcrumbs>

      <Panel title="Welcome to Group E's GovUK React page">
        <p>This page is built using the GovUK React library.</p>
        <Button>Get started</Button>
      </Panel>

      <Footer>
        <Footer.Link href="#">Terms and conditions</Footer.Link>
        <Footer.Link href="#">Privacy policy</Footer.Link>
        <Footer.Link href="#">Accessibility statement</Footer.Link>
      </Footer>
    </div>
  );
}


export default App;