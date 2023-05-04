import LoginForm from "../Components/LoginComponents/LoginForm";
import Navigation from "../Components/Navigation";
function Login() {
  return (
    <>
    <Navigation
        pageLink1="/"
        PageName1="home"
        pageLink2="/login"
        PageName2="Login"
        pageLink3="/NhsNumber"
        PageName3="Register"
      />
      <LoginForm />
    </>
  );
}

export default Login;
