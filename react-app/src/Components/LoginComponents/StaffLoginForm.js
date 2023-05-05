import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import jq from "jquery";
import { Main, Fieldset, InputField, Button } from "govuk-react";

function StaffLoginForm() {
  //const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validEmail, setValidEmail] = useState(false);
  const [validPw, setValidPw] = useState(false);

  const submitFormHandler = (e) => {
    e.preventDefault();

    //Retrieve data from db
    jq.ajax({
      url: "http://localhost:4000/stafflogindata.php",
      type: "POST",
      data: {
        email: email,
        password: password,
      },
      dataType: "json",
      success: function (response) {
        if (response === "no users") {
          console.error("No users found.");
        } else {
          let empId = response[0].empID;
          let empName = response[0].empFName + " " + response[0].empLName;
          let empType = response[0].employeeType;
          console.log(empId);
          console.log(empName);
          console.log(empType);
          localStorage.setItem("empId", empId);
          localStorage.setItem("empType", empType);
          //navigate("/");
        }
      },
      error: function (error) {
        console.log(error);
        // handle error here
      },
    });
  };

   //Input validation
   const emailHandler = (e) => {
    let input = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(input)) {
      setEmail(input);
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  //Input validation
  const pwHandler = (e) => {
    let input = e.target.value;
    setPassword(input);
    if (input.length > 4) {
      setValidPw(true);
    } else {
      setValidPw(false);
    }
  };


  return (
    <Main>
      <form  onSubmit={submitFormHandler}>
        <Fieldset>
          <Fieldset.Legend size="LARGE">Staff Login</Fieldset.Legend>
          <InputField
            padding={3}
            onChange={emailHandler}
            value={email}
            input={{
              name: "email",
              type: "email",
            }}
          >
            Username
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
    </Main>
  );
}

export default StaffLoginForm;
