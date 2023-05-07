import { useEffect } from "react";
import LoginForm from "../Components/LoginComponents/LoginForm";
import Navigation from "../Components/Navigation";

function Login() {

  useEffect(() => {
    const title = 'Log in';
    document.title = title;
  })

  return (
    <>
    <Navigation
        pageLink1="/"
        PageName1="Home"
      />
      <LoginForm />
    </>
  );
}

export default Login;
