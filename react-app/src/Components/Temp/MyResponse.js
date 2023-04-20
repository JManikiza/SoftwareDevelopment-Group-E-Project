import { CurrentContext } from "../../Pages/Temp";

function MyResponse(props) {
  const cond = () => {
    if (CurrentContext.nhsNo >= 0) {
      return (
        <h2>
          nhs: {CurrentContext.nhsNo} 
        </h2>
      );
    } else {
      return (
        <h2>Sorry, nhs number of {CurrentContext.nhsNo} was not found!</h2>
      );
    }
  };
  return <>{cond()}</>;
}

export default MyResponse;
