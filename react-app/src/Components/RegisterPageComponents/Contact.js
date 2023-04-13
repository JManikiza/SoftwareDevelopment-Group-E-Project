/**
* Author(s) of this code: 
*
* Wallyson Alves Da Silva
*/

import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useLocation} from "react-router-dom";
import {
  InputField,
  Heading,
  Main,
  Button,
  Breadcrumbs,
  H1,
} from "govuk-react";



function Contact() {
    //used state to save value of the name
    const [email, setEmail] = useState('');
    const [phoneNumber, setNumber] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const fName = location.state.fName;
    const sName = location.state.sName;
    const gender = location.state.gender;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/Address',{ state:{fName, sName, gender, email, phoneNumber}})
      console.log(fName);
      console.log(sName);
      console.log(gender);
      console.log(email);
      console.log(phoneNumber);
    }

  return (
    <div>
      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/NhsNumber">NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/FirstName">First Name</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/Surname">Surname</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/DateOfBirth">Date of birth</Breadcrumbs.Link>
          <Breadcrumbs.Link href="/Gender">Gender</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
        <H1>Contact details</H1>
        <InputField value={email} onChange={(e) => setEmail(e.target.value)}>Email</InputField>
        <br />
        <InputField value={phoneNumber} onChange={(e) => setNumber(e.target.value)}>Phone Number</InputField>
        <br />
        <Button type="submit" start>
          Save and Continue
        </Button>
        </form>
      </Main>
    </div>
  );
}
export default Contact;
