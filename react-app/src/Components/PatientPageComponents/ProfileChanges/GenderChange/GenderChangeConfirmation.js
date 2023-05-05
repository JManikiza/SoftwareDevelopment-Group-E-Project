import { Button, Heading, Main, Table} from "govuk-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function GenderChangeConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const gender = location.state.gender;

  const payload = gender;
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/getData.php")
      .then((response) => response.json())
      .then((data) => {
        setData({
          previousGender: data[0].GenderCode,
        });
      })
      .catch((error) => console.error(error));
  }, []);

    console.log("gender:", gender);

const updateGender = () => {
  fetch('http://localhost:4000/updateGender.php', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({gender: payload}),
    credentials: 'include',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to update postcode');
    }
    navigate('/Application');
  })
  .catch(error => console.error(error));
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
        
                <Table>
                    <Table.Row>
                        <Table.CellHeader>
                            Gender:
                        </Table.CellHeader>
                        <Table.Cell>
                           {data.previousGender === "1" ? "MALE" : "FEMALE"}
                        </Table.Cell>
                    </Table.Row>
                </Table>
 
                <Heading size="MEDIUM">New details are:</Heading>

                <Table>
                    <Table.Row>
                        <Table.CellHeader>
                            Gender:
                        </Table.CellHeader>
                        <Table.Cell>
                            {gender === "1" ? "MALE" : "FEMALE"}
                        </Table.Cell>
                    </Table.Row>
                </Table>

        <Button onClick={updateGender}>Confirm</Button>

        <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
          Cancel
        </Button>
      </Main>
    </div>
  );
}

export default GenderChangeConfirmation;
