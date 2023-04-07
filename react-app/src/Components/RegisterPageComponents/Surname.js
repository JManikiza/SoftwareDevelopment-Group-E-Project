import { Heading, Button, Input, Main, Breadcrumbs } from "govuk-react";
import { useNavigate } from "react-router-dom";
function Surname() {
  const navigate = useNavigate();
  return (
    <div>
      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/NhsNumber">NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/FirstName">First Name</Breadcrumbs.Link>
        </Breadcrumbs>
        <Heading>
          What is your surname?
          <Input />
        </Heading>
        <Button onClick={() => navigate("/DateOfBirth")} start>
          Save and Continue
        </Button>
      </Main>
    </div>
  );
}
export default Surname;
