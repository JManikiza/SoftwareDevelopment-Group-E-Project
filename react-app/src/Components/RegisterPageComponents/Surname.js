import { Heading, Button, Input, Main } from "govuk-react";
import { useNavigate } from "react-router-dom";
function Surname() {
  const navigate = useNavigate();
  return (
    <div>
      <Main>
        <Heading className="govuk-label govuk-label--1">
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
