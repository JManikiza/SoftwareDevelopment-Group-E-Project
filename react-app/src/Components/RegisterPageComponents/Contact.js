import {
  InputField,
  Heading,
  Main,
  Button,
  Breadcrumbs,
  H1,
} from "govuk-react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/NhsNumber">NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/FirstName">First Name</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/Surname">Surname</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/DateOfBirth">Date of birth</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/Gender">Gender</Breadcrumbs.Link>
        </Breadcrumbs>
        <H1>Contact details</H1>
        <InputField>Email</InputField>
        <br />
        <InputField>Phone Number</InputField>
        <br />
        <Button onClick={() => navigate("/Address")} start>
          Save and Continue
        </Button>
      </Main>
    </div>
  );
}
export default Contact;
