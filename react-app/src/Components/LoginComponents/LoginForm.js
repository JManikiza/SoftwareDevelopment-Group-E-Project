import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import jq from "jquery";
import {
  Main,
  Fieldset,
  InputField,
  Button,
  InsetText,
  Link,
} from "govuk-react";

function LoginForm() {
  //const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validEmail, setValidEmail] = useState(false);
  const [validPw, setValidPw] = useState(false);

  const submitFormHandler = (e) => {
    e.preventDefault();
  
    jq.ajax({
      url: "http://localhost:4000/patientlogindata.php",
      type: "POST",
      data: {
          email: email,
          password: password
      },
      dataType: "json",
      success: function(response) {
          if (response === "no patients") {
              console.error("No patients found.");
          } else {
              console.log("Patient name: " + response[0].Forename + " " + response[0].Surname);
              
          }
      },
      error: function(xhr, status, error) {
          console.log(error);
          // handle error here
      }
  });
  
   
  }

  const emailHandler = (e) => {
    const input = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(input)) {
      setEmail(input);
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const pwHandler = (e) => {
    const input = e.target.value;
    setPassword(input);
    if (input.length > 4) {
      setValidPw(true);
    } else {
      setValidPw(false);
    }
  };

  return (
    <div>
      <Main>
        <form onSubmit={submitFormHandler}>
          <Fieldset>
            <Fieldset.Legend size="LARGE">Login</Fieldset.Legend>
            <InputField
              padding={3}
              onChange={emailHandler}
              value={email}
              input={{
                name: "email",
                type: "email",
              }}
            >
              Email address
            </InputField>
            <InputField
              padding={3}
              onChange={pwHandler}
              value={password}
              input={{
                name: "password",
                type: "password",
              }}
            >
              Password
            </InputField>
            <Button type="submit" margin={3} disabled={!validEmail || !validPw}>
              Continue
            </Button>
          </Fieldset>
        </form>

        <br />
        <InsetText margin={3}>
          New patient? Register&nbsp;
          <Link href="/NhsNumber">here</Link>
        </InsetText>
        <InsetText margin={3}>
          Staff login&nbsp;
          <Link href="#">here</Link>
        </InsetText>
        <br />
        <br />
      </Main>
    </div>
  );
}

export default LoginForm;
