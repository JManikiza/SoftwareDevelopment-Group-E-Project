/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Input,Heading, Button, Main, Breadcrumbs, Label } from "govuk-react";


import Navigation from "../Navigation";

function Password() {
  //used state to save value of the name
  const [userPassword1, setValue1] = useState("");
  const [userPassword2, setValue2] = useState("");
  const [pwMatch, setPwMatch] = useState(true);
  const [pwMatchMsg, setPwMatchMsg] = useState("");
  const [shown, setShown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const nhsNumber = location.state.nhsNumber;
  const fName = location.state.fName;
  const sName = location.state.sName;
  const day = location.state.day;
  const month = location.state.month;
  const year = location.state.year;
  const gender = location.state.gender;
  const email = location.state.email;
  const phoneNumber = location.state.phoneNumber;
  const address1 = location.state.address1;
  const address2 = location.state.address2;
  const townCity = location.state.townCity;
  const county = location.state.county;
  const postCode = location.state.postCode;

  const handleConfirmPassword = () => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(userPassword1) && userPassword1 === userPassword2){
      setPwMatch(true);
      setPwMatchMsg("");
    } else{
      setPwMatch(false);
      setPwMatchMsg("Password does not match or is invalid");
    }
    
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!pwMatch){
      setValue2("");
    }else{
      navigate("/DetailsSummary", {
        state: {
          nhsNumber,
          fName,
          sName,
          day,
          month,
          year,
          gender,
          email,
          phoneNumber,
          address1,
          address2,
          townCity,
          county,
          postCode,
          userPassword1
        },
      });
    }


  };

  return (
    <div>
      <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

      <Main>
      <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link >NHS Number</Breadcrumbs.Link>
          <Breadcrumbs.Link >First Name</Breadcrumbs.Link>
          <Breadcrumbs.Link >Surname</Breadcrumbs.Link>
          <Breadcrumbs.Link >Date of birth</Breadcrumbs.Link>
          <Breadcrumbs.Link >Gender</Breadcrumbs.Link>
          <Breadcrumbs.Link >Contact details</Breadcrumbs.Link>
          <Breadcrumbs.Link >Address</Breadcrumbs.Link>
          <Breadcrumbs.Link >Password</Breadcrumbs.Link>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <Heading>Account Password</Heading>
            <Label>Password must include:</Label>
            <Label>An upper character*</Label>
            <Label>An lower character*</Label>
            <Label>A number*</Label>
            <br />
          {pwMatchMsg  && <p  style={{ color: 'red' }}>{pwMatchMsg}</p>}
          <Label>Create password</Label>
          <Input  
                type={shown ? "text":"password"}  
                value={userPassword1}
                onChange={(e) => setValue1(e.target.value)}
                required
              />
          <br/>
          <br/>
          <Label>Confirm password</Label>
          <Input  
                type={shown ? "text":"password"}  
                value={userPassword2}
                onChange={(e) => setValue2(e.target.value)}
                onBlur={handleConfirmPassword}
                required
              />
          <br />
          <br />
          <Button type="submit" start>
            Save and Continue
          </Button>
        </form>
      </Main>
    </div>
  );
}

export default Password;
