import Input from "@govuk-react/input";
import Label from "@govuk-react/label";
import InputField from "@govuk-react/input-field";
import DateField from "@govuk-react/date-field";
import LabelText from "@govuk-react/label-text";
import Select from "@govuk-react/select";
import { Main } from "govuk-react";
function Registration() {
  return (
    <div className="govuk-form-group">
      <Main>
        <Label className="govuk-label govuk-label--1">
          <h1>
            <LabelText>What is your name?</LabelText>
          </h1>
          <Input />
        </Label>
        <Label>
          <h1>
            <LabelText>What is your surname?</LabelText>
          </h1>
          <Input />
        </Label>

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
          What is your date of birth?
        </DateField>

        <InputField>National Insurance number</InputField>

        <Select
          input={{
            name: "group1",
            onChange: function noRefCheck() {},
          }}
          label="Gender"
        >
          <option value="0">option 1</option>
          <option value="1">option 2</option>
          <option value="2">option 3</option>
        </Select>

        <InputField>Email</InputField>
        <InputField>Phone number</InputField>

        <h1>What is your address</h1>
        <InputField>Address line 1</InputField>
        <InputField>Address line 2(optional)</InputField>
        <InputField>Town or city</InputField>
        <InputField>County(optional)</InputField>
        <InputField>Postcode</InputField>
      </Main>
    </div>
  );
}

export default Registration;
