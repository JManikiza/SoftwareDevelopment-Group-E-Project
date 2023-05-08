import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jq from "jquery";
import {
  Main,
  Fieldset,
  InputField,
  Button,
  InsetText,
 
} from "govuk-react";

import AuthContext from "./AuthContext";

function StaffLoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validEmail, setValidEmail] = useState(false);
  const [validPw, setValidPw] = useState(false);

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  let staffType;

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        navigate("/DoctorAppointment");
      }, 1000);
    }
    // Clear localStorage on page unload
    const handlePageUnload = () => {
      localStorage.clear();
      sessionStorage.clear();
    };
    window.addEventListener("beforeunload", handlePageUnload);
    return () => window.removeEventListener("beforeunload", handlePageUnload);
  }, [isLoggedIn, navigate]);

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
          let empId = response.empID;
          let empFName = response.empFName;
          let empLName = response.empLName;
          let empType = response.employeeType;
          let session_token = response.session_token;

          staffType = empType;
         
          localStorage.setItem("empId", empId);
          localStorage.setItem("empFName", empFName);
          localStorage.setItem("empLName", empLName);
          localStorage.setItem("empType", empType);
          localStorage.setItem("userType", empType);
          sessionStorage.setItem("session_token", session_token);

          setIsLoggedIn(true);

          //navigate("/");
          if (staffType === 'Doctor') {
            navigate('/DoctorAppointment');
          } else {
            navigate('/admin');
          }
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

  if (isLoggedIn) {
    return (
      <Main>
        <InsetText margin={3}>Redirecting...</InsetText>
      </Main>
    );
  }

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
