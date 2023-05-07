/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Button, Heading, Main, Table, SectionBreak } from "govuk-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../../../Navigation";

function DOBChangeConfirmation() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const location = useLocation();
  const { day, month, year } = location.state;
  const dob = { day, month, year };

  useEffect(() => {
    console.log("Fetching data...");
    fetch("http://localhost:4000/getData.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData({
          previousDOB: new Date(data[0].PersonDOB).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' }),     

        });
      })
      .catch((error) => console.error(error));
  }, []);

  const updateDOB = () => {
    console.log("Updating DOB...");
    // convert dob to YYYY/MM/DD format
   const dobFormatted = `${location.state.dob.year}/${location.state.dob.month}/${location.state.dob.day}`;
    console.log("DOB formatted:", dobFormatted);

    fetch("http://localhost:4000/updateDOB.php", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dob: dobFormatted}),
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update DOB");
        }
        navigate("/Application");
      })
      .catch((error) => console.error(error));
  };

  console.log("Current state:", location.state);

  return (
    <div>
      <Navigation
        pageLink1="/"
        PageName1="home"
        pageLink2="/login"
        PageName2="Login"
        pageLink3="/NhsNumber"
        PageName3="Register"
      />

      <Main>
        <Heading>Confirm your changes</Heading>

        <Heading size="MEDIUM">Previous details were:</Heading>

        <SectionBreak />

        <Table>
          <Table.Row>
            <Table.CellHeader>Date of birth:</Table.CellHeader>
            <Table.Cell>{data.previousDOB}</Table.Cell>
          </Table.Row>
        </Table>

        <Heading size="MEDIUM">New details are:</Heading>

        <Table>
          <Table.Row>
            <Table.CellHeader>Date of birth:</Table.CellHeader>
            <Table.Cell>{location.state.dob.day}/{location.state.dob.month}/{location.state.dob.year}</Table.Cell>
          </Table.Row>
        </Table>

        <Button onClick={updateDOB}>Confirm</Button>

        <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
          Cancel
        </Button>


      </Main>
    </div>
  );
}

export default DOBChangeConfirmation;
