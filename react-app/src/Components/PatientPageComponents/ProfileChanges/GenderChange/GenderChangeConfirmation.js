import { Button, Heading, Main, Paragraph, SectionBreak } from "govuk-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function GenderChangeConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const gender = location.state.gender;

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

  const updateGender = async (newGender) => {
    try {
      const response = await fetch("http://localhost:4000/updateGender.php", {
        method: "POST",
          headers: {
    'Content-Type': 'application/json'
  },
        body: JSON.stringify({ 'gender': newGender }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirm = () => {
    updateGender(gender);
    navigate("/Application");
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

        <Paragraph>Gender:</Paragraph>
        <p>{data.previousGender === "1" ? "MALE" : "FEMALE"}</p>

        <Heading size="MEDIUM">New details are:</Heading>

        <Paragraph>Gender:</Paragraph>
        <p>{gender === "1" ? "MALE" : "FEMALE"}</p>

        <Button onClick={handleConfirm}>Confirm</Button>

        <Button onClick={() => navigate("/Profile")} buttonColour="GREY">
          Cancel
        </Button>
      </Main>
    </div>
  );
}

export default GenderChangeConfirmation;
