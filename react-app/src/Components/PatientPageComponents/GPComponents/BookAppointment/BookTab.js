import { useState } from "react";
import React from "react";
import { H2, Button, ButtonArrow, DateField, MultiChoice, Radio, Select } from "govuk-react";
import { useNavigate } from "react-router-dom";
import BookingContext from "./BookContext";

function BookTab() {

  const [selectedDate, setSelectedDate] = useState({});
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [isInputFilled, setIsInputFilled] = useState(false);

  const navigate = useNavigate();

const handleDateChange = (dateValue) => {
  setSelectedDate(dateValue);
  console.log('Selected Date:', dateValue);
  updateIsInputFilled();
};

const handleTimeChange = (event) => {
  setSelectedTime(event.target.value);
  console.log('Selected Time:', event.target.value);
  updateIsInputFilled();
};

const handleDoctorChange = (event) => {
  setSelectedDoctor(event.target.value);
  console.log('Selected Doctor:', event.target.value);
  updateIsInputFilled();
};

  function handleButtonClick() {
    if (selectedDate !== "" && selectedTime !== "" && selectedDoctor !== "") {
      setIsInputFilled(true);
      navigate("/BookConfirm");
    } else {
      setIsInputFilled(false);
      alert("Please fill all the required fields.");
    }
  }

  function updateIsInputFilled() {
    if (selectedDate !== "" && selectedTime !== "" && selectedDoctor !== "") {
      setIsInputFilled(true);
    } else {
      setIsInputFilled(false);
    }
  }

  return (
    <BookingContext.Provider value={{selectedDate,selectedTime,selectedDoctor}}>
    <div>
      <br />
      <H2>Book Appointment</H2>
      <DateField
        input={{ value: selectedDate, name: "date" }}
        onChange={(event) => handleDateChange(event.target.value)}
      >
        What date would you like to book the appointment for?
      </DateField>
      <br />
      <MultiChoice
        label="What time of day works for you?"
        hint="We will try our best to accommodate your needs"
      >
         <Radio value="Morning" checked={selectedTime === "Morning"} onChange={handleTimeChange}>
          Morning
        </Radio>
        <Radio value="Noon" checked={selectedTime === "Noon"} onChange={handleTimeChange}>
          Noon
        </Radio>
        <Radio value="Afternoon" checked={selectedTime === "Afternoon"} onChange={handleTimeChange}>
          Afternoon
        </Radio>
      </MultiChoice>
      <br />
      <Select
        input={{ onChange: handleDoctorChange, value: selectedDoctor, name: "doctor" }}
        label="Which doctor would you prefer?"
      >
        <option value="">Select an option</option>
        <option value="0">GOV.UK elements option 1</option>
        <option value="1">GOV.UK elements option 2</option>
        <option value="2">GOV.UK elements option 3</option>
      </Select>
      <br />
      <Button onClick={() => navigate("/BookConfirm", { selectedDate, selectedTime, selectedDoctor })}
        icon={<ButtonArrow />}
        start
        disabled={!isInputFilled}>
  Book now
</Button>

    </div>
    </BookingContext.Provider>

  );
}

export default BookTab;
