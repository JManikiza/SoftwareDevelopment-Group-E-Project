//import React, { useState } from "react";
import {
  Main,
  Fieldset,
  InputField,
  Button,
  InsetText,
  Link,
} from "govuk-react";

function LoginForm() {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Main>
      <form onSubmit={submitFormHandler}>
        <Fieldset>
          <Fieldset.Legend size="LARGE">Login</Fieldset.Legend>
          <InputField
            padding={3}
            input={{
              autoComplete: "email",
              name: "group1",
              type: "email",
            }}
          >
            Email address
          </InputField>
          <InputField
            padding={3}
            input={{
              autoComplete: "email",
              name: "group1",
              type: "password",
            }}
          >
            Password
          </InputField>
          <Button type="submit" margin={3}>
            Continue
          </Button>
        </Fieldset>
      </form>

      <br />
      <InsetText margin={3}>
        New patient? Register&nbsp;
        <Link href="#">here</Link>
      </InsetText>
      <br />
    </Main>
  );
}

export default LoginForm;
