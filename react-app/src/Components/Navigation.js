import Crown from "@govuk-react/icon-crown";
import { TopNav } from "govuk-react";
import { Link } from "react-router-dom";
import React from "react";

function Navigation() {
  return (
    <div>
      <TopNav
        company={
          <TopNav.Anchor target="new">
            <TopNav.IconTitle icon={<Crown height="32" width="36" />}>
              GOV.UK
            </TopNav.IconTitle>
          </TopNav.Anchor>
        }
        serviceTitle={
          <TopNav.NavLink target="new">
            Group E - Web Application
          </TopNav.NavLink>
        }
      >
        <Link to="/">
          <TopNav.NavLink>Home</TopNav.NavLink>
        </Link>
        <Link to="/login">
          <TopNav.NavLink>Login</TopNav.NavLink>
        </Link>
        <Link to="/NhsNumber">
          <TopNav.NavLink href="">Register</TopNav.NavLink>
        </Link>
      </TopNav>
    </div>
  );
}

export default Navigation;
