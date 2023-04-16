/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField, Heading, Button, Main, Breadcrumbs } from "govuk-react";

function NhsNumber() {
  //used state to save value of the name
  const [nhsNumber, setValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/FirstName", { state: { nhsNumber } });
    console.log(nhsNumber);
  };

  return (
    <div>
      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <InputField
            value={nhsNumber}
            onChange={(e) => setValue(e.target.value)}
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
          <Button type="submit" start>
            Save and Continue
          </Button>
        </form>
      </Main>
    </div>
  );
}

export default NhsNumber;
