/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import React, { useEffect, useState } from "react";
import { DateField, Main, Button, Breadcrumbs} from "govuk-react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";
import Logout from "../../../LoginComponents/Logout";


function DOBChangeEnter() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

    useEffect(() => {
        const title = 'DOB Change';
        document.title = title;
  })

const handleSubmit = (e) => {
  e.preventDefault();

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    setValid(false);
    return;
  }

  const parsedDOB = new Date(year, month - 1, day);
  const formattedDOB = `${parsedDOB.getDate()}/${parsedDOB.getMonth() + 1}/${parsedDOB.getFullYear()}`;

  console.log("formattedDOB:", formattedDOB);

  navigate("/DOBChangeConfirmation", {
    state: { dob: { day, month, year } },
  });
};

  return (
    <div>
      <Navigation pageLink1="/" PageName1="Home"/><Logout />


      <Main>

                <Breadcrumbs>
                    <Breadcrumbs.Link href="/Patient">Home Page</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/Profile">Profile</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/DOBChangeStart">Start</Breadcrumbs.Link>
                    <Breadcrumbs.Link href="/DOBChangeDetails">Details</Breadcrumbs.Link>
                </Breadcrumbs>
        <form onSubmit={handleSubmit}>
          <DateField
            inputNames={{
              day: "dayInputName",
              month: "monthInputName",
              year: "yearInputName",
            }}
            inputs={{
              day: {
                autoComplete: "bday-day",
                value: day,
                onChange: (e) =>
                  setDay(e.target.value),
              },
              month: {
                autoComplete: "bday-month",
                value: month,
                onChange: (e) =>
                  setMonth(e.target.value),
              },
              year: {
                autoComplete: "bday-year",
                value: year,
                onChange: (e) =>
                  setYear(e.target.value),
              },
            }}
          >
            What is your date of birth?
          </DateField>

          {!valid && (
            <div style={{ color: "red" }}>
              Please enter a valid date of birth.
            </div>
          )}

          <Button type="submit" disabled={!day || !month || !year}>
            Continue
          </Button>

          <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
            Cancel
          </Button>
        </form>
      </Main>
    </div>
  );
}

export default DOBChangeEnter;
