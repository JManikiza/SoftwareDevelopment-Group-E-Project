import { InputField, Heading, Main, Button } from "govuk-react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <Main>
        <InputField>
          <Heading>Email</Heading>
        </InputField>
        <InputField>
          <Heading>Phone Number</Heading>
        </InputField>
        <br />
        <Button onClick={() => navigate("/Address")} start>
          Save and Continue
        </Button>
      </Main>
    </div>
  );
}
export default Contact;
