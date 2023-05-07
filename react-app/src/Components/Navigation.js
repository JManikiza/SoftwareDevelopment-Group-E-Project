/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */

import Crown from "@govuk-react/icon-crown";
import { TopNav } from "govuk-react";
import { Link } from "react-router-dom";
import React from "react";

function Navigation(props) {
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
            Group E - GP Surgery
          </TopNav.NavLink>
        }
      >
        <Link to={props.pageLink1}>
          <TopNav.NavLink>{props.PageName1}</TopNav.NavLink>
        </Link>
        <Link to={props.pageLink2}>
          <TopNav.NavLink>{props.PageName2}</TopNav.NavLink>
        </Link>
        <Link to={props.pageLink3}>
          <TopNav.NavLink>{props.PageName3}</TopNav.NavLink>
        </Link>
      </TopNav>
    </div>
  );
}

export default Navigation;
