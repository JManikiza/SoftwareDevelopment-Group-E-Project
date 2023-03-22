// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// GovUK imports
import { TopNav , Footer, PhaseBanner, Breadcrumbs, Panel, Button } from 'govuk-react';

// Custom imports
import CustomTopNav from './components/CustomTopNav';
import TimeStatus from './components/TimeStatus';

function App() {
  return (
    <div>
<TopNav
  company={<TopNav.Anchor href="https://example.com" target="new"><TopNav.IconTitle>GOV.UK</TopNav.IconTitle></TopNav.Anchor>}
  serviceTitle={<TopNav.NavLink href="https://example.com" target="new">Service Title</TopNav.NavLink>}
>
  <TopNav.NavLink href="https://example.com?q=catdog">
    Navigation item #1
  </TopNav.NavLink>
  <TopNav.NavLink href="https://example.com?q=dogcat">
    Navigation item #2
  </TopNav.NavLink>
</TopNav>

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
        <Footer.Link href="#">Terms and conditions&nbsp;</Footer.Link>
        <Footer.Link href="#">Privacy policy&nbsp;</Footer.Link>
        <Footer.Link href="#">Accessibility statement</Footer.Link>
        <TimeStatus/>
      </Footer>
    </div>
  );
}


export default App;