import React from 'react';
import { TopNav, Button } from 'govuk-react';

function CustomTopNav(props) {
  const { serviceName, homepageUrl, children } = props;
  return (
    <TopNav serviceName={serviceName} homepageUrl={homepageUrl}>
      {children}
    </TopNav>
  );
}

export default CustomTopNav;