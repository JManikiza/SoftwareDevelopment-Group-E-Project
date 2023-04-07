import { Select, Heading, Button, Main, Breadcrumbs } from "govuk-react";
import { useNavigate } from "react-router-dom";
function Gender() {
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
        </Breadcrumbs>
        <Heading>Describe your gender type</Heading>
        <Select
          input={{
            name: "group1",
            onChange: function noRefCheck() {},
          }}
        >
          <option value="0"></option>
          <option value="1">Female</option>
          <option value="2">Male</option>
          <option value="3">Other</option>
        </Select>
        <br />
        <Button onClick={() => navigate("/Contact")} start>
          Save and Continue
        </Button>
      </Main>
    </div>
  );
}
export default Gender;
