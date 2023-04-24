//import React, { useState } from "react";
import {
  Main,
  Fieldset,
  InputField,
  Button,
  InsetText,
  Link,
} from "govuk-react";
import Navigation from "../Navigation";
function LoginForm() {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
            <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>
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
    </Main></div>
  );
}

export default LoginForm;
