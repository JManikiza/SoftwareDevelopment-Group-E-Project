/**
* Author(s) of this code: 
*
* Joven Manikiza
*/
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/footer.css"

// GovUK imports
import { PhaseBanner, Panel, Button, SectionBreak } from "govuk-react";
import Navigation from "../Components/Navigation";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const title = "Log in";
    document.title = title;
  });

  return (
    <div>
      <Navigation
        pageLink1="/"
        PageName1="Home"
        pageLink2="/NhsNumber"
        PageName2="Register"
      />

      <SectionBreak level="XLARGE" visible={false} />

      <Panel title="Welcome to Group E's GovUK GP Surgery">
        <p>
          <Button
            onClick={() => {
              navigate("/login");
            }}
          >
            Patient
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            onClick={() => {
              navigate("/stafflogin");
            }}
          >
            Staff
          </Button>
        </p>
      </Panel>

      <SectionBreak level="XLARGE" visible={false} />
      <SectionBreak level="XLARGE" visible={false} />
      <SectionBreak level="LARGE" visible={true} />

      <PhaseBanner level="Alpha">
        <p className="banner">
          <strong>Beta 2.2.1</strong> This is a new service – your{" "}
          <a href="#">feedback</a> will help us to improve it.
        </p>
      </PhaseBanner>
    </div>
  );
}

export default HomePage;
