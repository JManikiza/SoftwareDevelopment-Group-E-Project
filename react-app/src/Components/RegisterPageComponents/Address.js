import { InputField, Heading, Button, Main, Breadcrumbs } from "govuk-react";
function Address() {
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
          <Breadcrumbs.Link href="/Contact">Contact details</Breadcrumbs.Link>
        </Breadcrumbs>
        <Heading>Address details</Heading>
        <InputField>Address line 1</InputField>
        <InputField>Address line 2(optional)</InputField>
        <InputField>Town or city</InputField>
        <InputField>County(optional)</InputField>
        <InputField>Postcode</InputField>
        <br />
        <Button start>Submit</Button>
      </Main>
    </div>
  );
}
export default Address;
