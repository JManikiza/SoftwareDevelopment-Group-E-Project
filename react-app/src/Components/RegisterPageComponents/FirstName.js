import { Heading, Button, Input, Main, Breadcrumbs } from "govuk-react";
import { useNavigate } from "react-router-dom";

function InputLabel() {
  const navigate = useNavigate();
  return (
    <div>
      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/NhsNumber">NHS Number</Breadcrumbs.Link>
        </Breadcrumbs>

        <Heading>
          What is your name?
          <Input />
        </Heading>
        <Button onClick={() => navigate("/Surname")} start>
          Save and Continue
        </Button>
      </Main>
    </div>
  );
}

export default InputLabel;
