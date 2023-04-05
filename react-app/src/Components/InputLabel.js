import { Label } from "govuk-react";

function InputLabel() {
  return (
    <div>
      <Label className="govuk-label govuk-label--1">
        <h1>
          <LabelText>What is your name?</LabelText>
        </h1>
        <Input />
      </Label>
    </div>
  );
}

export default InputLabel;
