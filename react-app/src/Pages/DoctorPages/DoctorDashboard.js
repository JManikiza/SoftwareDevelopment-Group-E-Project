import React from "react";
import { useNavigate } from "react-router-dom";
import { Main, Button, Heading, InsetText, ButtonArrow } from "govuk-react";
import Navigation from "../../Components/Navigation";
import Logout from "../../Components/LoginComponents/Logout";

function DoctorDashboard() {
  const navigate = useNavigate();

  let surname = localStorage.getItem("empLName");

  return (
    <div>
      <Navigation
        pageLink1="/DoctorDashboard"
        PageName1="Dashboard"
      />
      <Main>
        <Logout />
        <Heading>Hello Dr. {surname}</Heading>

        <InsetText>Navigate to your services from this page</InsetText>
          <br />
          <br />
        <Button
          onClick={() => navigate("/DoctorAppointment")}
          icon={<ButtonArrow />}
          start
        >
          Your Appointments
        </Button>
        <br /> <br />
        <Button
          onClick={() => navigate("/DoctorViewandUpdate")}
          icon={<ButtonArrow />}
          start
        >
          View and Update records
        </Button>
      </Main>
    </div>
  );
}

export default DoctorDashboard;
