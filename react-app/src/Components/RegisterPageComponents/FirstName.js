import { Heading, Button, Input, Main } from "govuk-react";
import { useNavigate } from "react-router-dom";

function InputLabel() {
  const navigate = useNavigate();
  return (
    <div>
      <Main>
        <Heading className="govuk-label govuk-label--1">
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
