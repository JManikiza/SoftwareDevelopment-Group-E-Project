import React from 'react';
import { TopNav, Button } from 'govuk-react';

function CustomTopNav(props) {
  const { serviceName, homepageUrl, navigation } = props;
  return (
    <TopNav serviceName={serviceName} homepageUrl={homepageUrl}>
      {navigation}
    </TopNav>
  );
}

export default CustomTopNav;