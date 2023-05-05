import { Button, Heading, Main, Paragraph, SectionBreak } from "govuk-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";

function BookConfirm(props) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    // Perform any action needed on confirmation
    navigate("/Application");
  };

    console.log("Selected Doctor: ", props.selectedDoctor);
  console.log("Selected Date: ", props.selectedDate);
  console.log("Selected Time: ", props.selectedTime);


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
        <Heading>Confirm your booking</Heading>

        <Heading size="MEDIUM">Your booking is:</Heading>

        <SectionBreak></SectionBreak>

        <Paragraph>Doctor: {props.selectedDoctor}</Paragraph>

        <Paragraph>Date: {props.selectedDate}</Paragraph>

        <Paragraph>Time: {props.selectedTime}</Paragraph>

        <Button onClick={handleClick}>Confirm</Button>

        <Button onClick={() => navigate("/GPServices")} buttonColour="GREY">
          Cancel
        </Button>
      </Main>
    </div>
  );
}

export default BookConfirm;
