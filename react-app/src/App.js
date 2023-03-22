// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// GovUK imports
import { TopNav , Footer, PhaseBanner, Breadcrumbs, Panel, Button } from 'govuk-react';

// Custom imports

function App() {
  return (
    <div>
<TopNav
  company={<TopNav.Anchor href="https://example.com" target="new"><TopNav.IconTitle>GOV.UK</TopNav.IconTitle></TopNav.Anchor>}
  serviceTitle={<TopNav.NavLink href="https://example.com" target="new">Group E - Web Application</TopNav.NavLink>}
>
  <TopNav.NavLink href="https://example.com?q=catdog">
    Home
  </TopNav.NavLink>
  <TopNav.NavLink href="https://example.com?q=dogcat">
    Login
  </TopNav.NavLink>
    <TopNav.NavLink href="https://example.com?q=dogcat">
    Register
  </TopNav.NavLink>
</TopNav>

      <PhaseBanner level="Alpha">
        <p>
          <strong>Alpha 0.0.1</strong>
          {' '}
          This is a new service – your <a href="#">feedback</a> will help us to improve it.
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

      <Footer>
        <Footer.Link href="#">Terms and conditions&nbsp;</Footer.Link>
        <Footer.Link href="#">Privacy policy&nbsp;</Footer.Link>
        <Footer.Link href="#">Accessibility statement</Footer.Link>
      </Footer>
    </div>
  );
}


export default App;
