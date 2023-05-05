/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */

import { WHITE } from "govuk-colours";
import Navigation from "../Navigation";
import { Link } from "govuk-react";
import { Main, Panel, InsetText, H1 } from "govuk-react";

function RegistrationComplete() {
  return (
    <div>
      <Navigation
        pageLink1="/"
        PageName1="home"
        pageLink2="/login"
        PageName2="Login"
        pageLink3="/NhsNumber"
        PageName3="Register"
      />
      <Main>
        <Panel>
          <div>
            <br />
            <H1 style={{ color: WHITE }}>Registration Complete</H1>
            <br />
            <br />
          </div>
        </Panel>
        <InsetText margin={3}>
          Login Now&nbsp;
          <Link href="/Login">here</Link>
        </InsetText>
        <br />
      </Main>
    </div>
  );
}

export default RegistrationComplete;
