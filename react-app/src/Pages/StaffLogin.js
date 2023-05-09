import StaffLoginForm from "../Components/LoginComponents/StaffLoginForm";
import Navigation from "../Components/Navigation";
function Login() {
  return (
    <>
    <Navigation
        pageLink1="/"
        PageName1="Home"
  
      />
      <StaffLoginForm />
    </>
  );
}

export default Login;
