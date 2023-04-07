import { DateField, Heading, Button, Main } from "govuk-react";
import { useNavigate } from "react-router-dom";

function DateOfBirth() {
  const navigate = useNavigate();
  return (
    <div>
      <Main>
        <DateField
          input={{
            onBlur: function noRefCheck() {},
            onChange: function noRefCheck() {},
            onFocus: function noRefCheck() {},
          }}
          inputNames={{
            day: "dayInputName",
          }}
          inputs={{
            day: {
              autoComplete: "bday-day",
            },
            month: {
              autoComplete: "bday-month",
            },
            year: {
              autoComplete: "bday-year",
            },
          }}
        >
          <Heading>What is your date of birth?</Heading>
        </DateField>
        <Button onClick={() => navigate("/NationalIN")} start>
          Save and Continue
        </Button>
      </Main>
    </div>
  );
}
export default DateOfBirth;
