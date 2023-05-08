/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { useEffect, useState } from "react";
import React from "react";
import { H2, Button, ButtonArrow, MultiChoice, Radio, Select } from "govuk-react";
import { useNavigate, useLocation } from "react-router-dom";

function BookTab() {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/GPS_Doc_Avail.php")
      .then((response) => response.json())
      .then((data) => {
        setDoctors(
          data.map((doctor) => ({
            ...doctor,
            specialisation: doctor.Specialisation.toUpperCase(),
            surname: doctor.empLName.toUpperCase(),
            empID: doctor.empID
          }))
        );
      })
      .catch((error) => console.error(error));
  }, []);

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    console.log("Selected Time:", event.target.value);
  };

const handleDoctorChange = (event) => {
  const selectedEmpLName = event.target.value;
  const selectedDoctor = doctors.find((doc) => doc.empLName === selectedEmpLName);
  setSelectedDoctor([selectedDoctor.empID, selectedDoctor.empLName, selectedDoctor.specialisation]);
  console.log("Selected Doctor:", selectedDoctor);
};


  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedTime !== "" && selectedDoctor !== "") {
      navigate("/BookConfirm", { state: { selectedTime, selectedDoctor } });
    } else {
      alert("Please fill in the required fields.");
    }
  };

const doctorOptions = doctors.map((doc) => (
  <option value={doc.empLName} key={doc.empID}>
    {"DR. " + doc.surname + " - " + doc.specialisation}
  </option>
));

  console.log("selectedDoctor2:", selectedDoctor);
  console.log("selectedTime2:", selectedTime);

  return (
    <div>
      <br />
      <H2>Book Appointment</H2>

      <br />

      <form onSubmit={handleSubmit}>
        <MultiChoice
          label="What time of day works for you?"
          hint="We will try our best to accommodate your needs"
        >
          <Radio
            value="Morning"
            checked={selectedTime === "Morning"}
            onChange={handleTimeChange}
          >
            Morning
          </Radio>
          <Radio
            value="Noon"
            checked={selectedTime === "Noon"}
            onChange={handleTimeChange}
          >
            Noon
          </Radio>
          <Radio
            value="Afternoon"
            checked={selectedTime === "Afternoon"}
            onChange={handleTimeChange}
          >
            Afternoon
          </Radio>
        </MultiChoice>
        <br />
        <Select label="Select Doctor" onChange={handleDoctorChange}>
          <option value="">Choose a doctor</option>
          {doctorOptions}
        </Select>
        <br />
        <Button type="submit" icon={ButtonArrow}>
          Book Appointment
        </Button>
      </form>
    </div>
  );
}

export default BookTab;
