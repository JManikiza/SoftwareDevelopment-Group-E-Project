import Crown from "@govuk-react/icon-crown";
import { TopNav } from "govuk-react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <TopNav
        company={
          <TopNav.Anchor href="https://example.com" target="new">
            <TopNav.IconTitle icon={<Crown height="32" width="36" />}>
              GOV.UK
            </TopNav.IconTitle>
          </TopNav.Anchor>
        }
        serviceTitle={
          <TopNav.NavLink href="https://example.com" target="new">
            Group E - Web Application
          </TopNav.NavLink>
        }
      >
        <TopNav.NavLink href="">
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
        </TopNav.NavLink>
        <TopNav.NavLink href="https://example.com?q=dogcat">
          Login
        </TopNav.NavLink>
        <TopNav.NavLink href="">
          <Link to="/Registration" style={{ color: "white" }}>
            Register
          </Link>
        </TopNav.NavLink>
      </TopNav>
    </div>
  );
}

export default Navigation;
