/**
 * Author(s) of this code:
 *
 * Joven Manikiza
 */

import {
  Button,
  Heading,
  Main,
  Paragraph,
  SectionBreak,
  Table,
} from "govuk-react";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../../../Navigation";

function NameChangeConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const forename = location.state.forename;
  const surname = location.state.surname;

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/getData.php")
      .then((response) => response.json())
      .then((data) => {
        setData({
          previousForename: data[0].Forename,
          previousSurname: data[0].Surname,
        });
      })
      .catch((error) => console.error(error));
  }, []);

  console.log("forename:", forename);
  console.log("surname:", surname);

  const payload = {
    forename: forename,
    surname: surname,
  };

  const updateFullName = () => {
    fetch("http://localhost:4000/updateFullName.php", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update full name");
        }
        navigate("/Application");
      })
      .catch((error) => console.error(error));
  };

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
        <SectionBreak></SectionBreak>

        <Table>
          <Table.Row>
            <Table.CellHeader>Forename:</Table.CellHeader>
            <Table.Cell>{data.previousForename}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Surname:</Table.CellHeader>
            <Table.Cell>{data.previousSurname}</Table.Cell>
          </Table.Row>
        </Table>

        <Heading size="MEDIUM">New details are:</Heading>

        <Table>
          <Table.Row>
            <Table.CellHeader>Forename:</Table.CellHeader>
            <Table.Cell>{forename}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Surname:</Table.CellHeader>
            <Table.Cell>{surname}</Table.Cell>
          </Table.Row>
        </Table>

                <Button onClick={ () => navigate("/Application")}>
                    Confirm
                </Button>
                                
                <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
                    Cancel
                </Button>       
                
            </Main>
        </div>

    );
}

export default NameChangeConfirmation;