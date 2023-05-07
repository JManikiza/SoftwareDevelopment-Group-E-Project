import React, { useState, useContext, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import jq from "jquery";
import {  Main, Fieldset, InputField, Button, InsetText, Link } from "govuk-react";
import AuthContext from "./AuthContext";

function LoginForm() {
  const navigate = useNavigate();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validEmail, setValidEmail] = useState(false);
  const [validPw, setValidPw] = useState(false);

  const [registered, setRegistered] = useState(false);
  const [pwMatched, setPwMatched] = useState(false);

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  }

  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  
  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        navigate("/Patient");
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
      url: "http://localhost:4000/patientlogindata.php",
      type: "POST",
      data: {
        email: email,
        password: password,
      },
      dataType: "json",
      success: function (response) {
        if (response === "no patients") {
          setRegistered(false);
          console.error("No patients found.");
        } else if (response.email === email) {
          setRegistered(true);
          if (response.passwordMatch === true) {
            setPwMatched(true);
            let patientName = response.patientName;
            let nhsNo = response.nhsNo;
            let session_token = response.session_token;

            localStorage.setItem("patientName", patientName);
            localStorage.setItem("nhsNo", nhsNo);
            sessionStorage.setItem("session_token", session_token); // Store session token in session storage

            console.log("Patient name: " + patientName);
            console.log("NHS no: " + nhsNo);

            setIsLoggedIn(true);
            setButtonClicked(false);

            setTimeout(() => {
              navigate("/Patient");
            }, 2000); // 1.5 second delay
          }
        } else {
          setRegistered(false);
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

  let bool = !registered && buttonClicked;

  // if user already logged in, display redirect message
  if (isLoggedIn) {
    return (
      <Main>
        <InsetText margin={3}>Redirecting...</InsetText>
      </Main>
    );
  }

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
              meta={{
                error: 'Email not found',
                touched: bool,
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
              meta={{
                error: 'Incorrect password',
                touched: registered && !pwMatched && buttonClicked
              }}
            >
              Password
            </InputField>
            <Button type="submit" margin={3} disabled={!validEmail || !validPw} onClick={ handleButtonClick }>
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
          <Link href="/stafflogin">here</Link>
        </InsetText>
        <br />
        <br />
      </Main>
    </div>
  );
}

export default LoginForm;
