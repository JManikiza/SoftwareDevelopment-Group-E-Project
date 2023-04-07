import { InputField, Heading, Button, Main } from "govuk-react";
function Address() {
  return (
    <div>
      <Main>
        <Heading>What is your address</Heading>
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
