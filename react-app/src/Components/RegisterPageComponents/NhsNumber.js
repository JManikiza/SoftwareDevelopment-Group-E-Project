import { InputField, Heading, Button, Main, Breadcrumbs } from "govuk-react";
import { useNavigate } from "react-router-dom";
function NationalIN() {
  const navigate = useNavigate();
  return (
    <div>
      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
        </Breadcrumbs>
        <InputField
          hint={
            <>
              Ten digit number
              <br />
              For example: ‘123 123 44455’.
            </>
          }
        >
          <Heading>NHS number</Heading>
        </InputField>
        <br />
        <Button onClick={() => navigate("/FirstName")} start>
          Save and Continue
        </Button>
      </Main>
    </div>
  );
}

export default NationalIN;
