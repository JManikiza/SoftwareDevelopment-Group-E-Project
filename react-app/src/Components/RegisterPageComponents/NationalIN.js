import { InputField, Heading, Button, Main } from "govuk-react";
import { useNavigate } from "react-router-dom";
function NationalIN() {
  const navigate = useNavigate();
  return (
    <div>
      <Main>
        <InputField>
          <Heading>National Insurance number</Heading>
        </InputField>
        <br />
        <Button onClick={() => navigate("/Gender")} start>
          Save and Continue
        </Button>
      </Main>
    </div>
  );
}

export default NationalIN;
