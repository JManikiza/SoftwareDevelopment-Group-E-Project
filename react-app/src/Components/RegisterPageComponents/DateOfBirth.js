/**
* Author(s) of this code: 
*
* Wallyson Alves Da Silva
*/
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useLocation} from "react-router-dom";
import { DateField, Heading, Button, Main, Breadcrumbs } from "govuk-react";


function DateOfBirth() {
  //used state to save value of the name
  const [date, setValue] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const fName = location.state.fName;
  const sName = location.state.sName;


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Gender',{ state:{fName, sName, date}})
    console.log(fName);
    console.log(sName);
    console.log(date);
  }

  return (
    <div>
      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/NhsNumber">NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/FirstName">First Name</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/Surname">Surname</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
        <DateField value={date} onChange={(e) => setValue(e.target.value)}
          input={{
            onBlur: function noRefCheck() {},
            onChange: function noRefCheck() {},
            onFocus: function noRefCheck() {},
          }}
          inputNames={{
            day: "dayInputName",
          }}
          inputs={{
            day: {
              autoComplete: "bday-day",
            },
            month: {
              autoComplete: "bday-month",
            },
            year: {
              autoComplete: "bday-year",
            },
          }}
        >
          <Heading>What is your date of birth?</Heading>
        </DateField>
        <Button start>
          Save and Continue
        </Button>
        </form>
      </Main>
    </div>
  );
}
export default DateOfBirth;
