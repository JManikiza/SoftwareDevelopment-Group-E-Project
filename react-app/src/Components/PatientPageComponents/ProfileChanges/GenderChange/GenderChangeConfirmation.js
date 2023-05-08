import { Button, Heading, Main, Table} from "govuk-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";
import $ from 'jquery';

function GenderChangeConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const gender = location.state.gender;

  const [data, setData] = useState({});

          useEffect(() => {
    const title = 'Gender Change';
    document.title = title;
  })

    const [response, setResponse] = useState('');
// use this value to query the db
let nhs_number = localStorage.getItem("nhsNo");

  useEffect(() => {
    $.ajax({
        url: 'http://localhost:4000/getData.php',
        type: 'POST',
        data: {
            nhs_number: nhs_number 
        },
        success: function(response) {
            setResponse(JSON.parse(response));  
          
        },
        error: function(error) {
            console.log(error); 
        }
    });
    
  }, []);

    console.log("gender:", gender);

    const payload = {
    gender: gender,
    nhs_number: nhs_number
};

const updateGender = () => {

  $.ajax({
        url: "http://localhost:4000/updateGender.php",
        type: "PUT",
        data: JSON.stringify(payload),
        contentType: "application/json",
        xhrFields: {
            withCredentials: true
        },
        success: function (response) {
            navigate("/Application");
        },
        error: function (error) {
            console.error(error);
        }
    });
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
                           {response.GenderCode}
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
