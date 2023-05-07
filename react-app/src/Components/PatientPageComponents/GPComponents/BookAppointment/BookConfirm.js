/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Button, Heading, Main, Table, SectionBreak } from "govuk-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from "../../../Navigation";
import jq from 'jquery';

function BookConfirm() {

  const navigate = useNavigate();
  const location = useLocation();
  const selectedDoctor = location.state?.selectedDoctor;
  const selectedTime = location.state?.selectedTime;

  console.log("selectedDoctor:", selectedDoctor);
  console.log("selectedTime:", selectedTime);

  const [randomDate, setRandomDate] = useState("");
  const [randomTime, setRandomTime] = useState("");
  const doctorInt = parseInt(selectedDoctor[0]);
console.log(typeof selectedDoctor[0], typeof randomDate,randomDate, typeof randomTime,randomTime)
 console.log('DOCTORINT TYPE:',typeof doctorInt);
const makeAppointment = () => {

          var addNewAppointment = {
        doctor: doctorInt,
        time: randomTime,
        date: randomDate
    };

    jq.ajax({
      type: "POST",
      url: "http://localhost:4000/GPS_Booking_App.php",
      mode: "no-core",
      data: addNewAppointment,
      success(data) {
        console.log(data);
    },
  });
}
  /*  const data = {
      doctor: selectedDoctor[0],
      date: randomDate,
      time: randomTime
    };
    console.log(data.doctor, typeof data.doctor, data.date, typeof data.date, data.time, typeof data.time);

console.log("Selected Doctor: ", selectedDoctor[0]);
   fetch("http://localhost:4000/GPS_Booking_App.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({doctor: selectedDoctor[0]}),
  credentials: "include",
})
.then((response) => {
  if (!response.ok) {
    throw new Error("Failed to make appointment");
  }
  return response.json();
})
.then((data) => {
  if (data.error) {
    throw new Error(data.error);
  }
  navigate("/Application");
})
.catch((error) => console.error(error));
  }
  */
  const handleClick = () => {
    // Perform any action needed on confirmation
    makeAppointment();
    navigate("/Application");
  };


  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 20) + 1;
    const date = new Date();
    date.setDate(date.getDate() + randomNum);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    setRandomDate(formattedDate);
  }, []);

    useEffect(() => {
    let startTime, endTime;
    if (selectedTime === "Morning") {
      startTime = new Date();
      startTime.setHours(7);
      startTime.setMinutes(0);
      endTime = new Date();
      endTime.setHours(11);
      endTime.setMinutes(45);
    } else if (selectedTime === "Noon") {
      startTime = new Date();
      startTime.setHours(12);
      startTime.setMinutes(0);
      endTime = new Date();
      endTime.setHours(14);
      endTime.setMinutes(0);
    } else if (selectedTime === "Afternoon") {
      startTime = new Date();
      startTime.setHours(14);
      startTime.setMinutes(0);
      endTime = new Date();
      endTime.setHours(19);
      endTime.setMinutes(0);
    } else {
      // Invalid selectedTime
      setRandomTime("");
      return;
    }

    const timeOptions = [];
    let currentTime = new Date(startTime.getTime());
    while (currentTime <= endTime) {
      if (currentTime.getMinutes() % 15 === 0) {
        timeOptions.push(currentTime);
      }
      currentTime = new Date(currentTime.getTime() + 15 * 60000);
    }

    const randomIndex = Math.floor(Math.random() * timeOptions.length);
    setRandomTime(timeOptions[randomIndex].toLocaleTimeString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }));
  }, [selectedTime]);


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

        <SectionBreak />

        <Table>
          <Table.Row>
            <Table.CellHeader>Doctor:</Table.CellHeader>
            <Table.Cell>DR.{selectedDoctor[1]} - {selectedDoctor[2]}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Date:</Table.CellHeader>
            <Table.Cell>{randomDate}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Time:</Table.CellHeader>
            <Table.Cell>{randomTime}</Table.Cell>
          </Table.Row>
        </Table>

        <Button onClick={handleClick}>Confirm</Button>

        <Button onClick={() => navigate("/GPServices")} buttonColour="GREY">
          Cancel
        </Button>
      </Main>
    </div>
  );
}

export default BookConfirm;
