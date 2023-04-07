import { DateField, Heading, Button, Main, Breadcrumbs } from "govuk-react";
import { useNavigate } from "react-router-dom";

function DateOfBirth() {
  const navigate = useNavigate();
  return (
    <div>
      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/NhsNumber">NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/FirstName">First Name</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/Surname">Surname</Breadcrumbs.Link>
        </Breadcrumbs>

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
        <Button onClick={() => navigate("/Gender")} start>
          Save and Continue
        </Button>
      </Main>
    </div>
  );
}
export default DateOfBirth;
