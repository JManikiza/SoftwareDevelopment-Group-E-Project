
/* Author of this page */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputField,
  Heading,
  Button,
  Main,
  Breadcrumbs,
  ErrorText,
  UnorderedList,
  ListItem,
} from "govuk-react";

import Navigation from "../Components/Navigation";
import Logout from "../Components/LoginComponents/Logout";

function Adminpanel() {
  const [data, setData] = useState([]);
  const [removeID, setRemoveID] = useState("");
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          setData(response);
          console.log(response);
        } else {
          console.error(xhr.statusText);
        }
      }
    };
    xhr.open("GET", "http://localhost/uniphp/sqllite.php", true);
    xhr.send();
  }, [removeID, data]);

  const [remove, setRemove] = useState("");

  // Get the navigate function from useNavigate hook
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Define the URL endpoint to send the POST request to
    const url = "http://localhost/uniphp/removelite.php";

    // Define the data to send in the POST request (in this case, the username and password)
    const data = { remove };

    // Define the options for the fetch() function
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };

    // Send the POST request using fetch()
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("successfully removed");

          // Trigger the useEffect hook again to re-run the AJAX request
          setRemoveID(Date.now());
          setRemove("");
        } else {
          setLoginError(true);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navigation
        pageLink1="/"
        PageName1="Home"
      />
      <Logout />
      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">Home Page</Breadcrumbs.Link>
        </Breadcrumbs>

        <Heading>Admin panel</Heading>

        <div>
          {data.map((row) => (
            <div key={row.ID}>
              <UnorderedList>
                <ListItem>ID: {row.appID}</ListItem>
                <ListItem>empID: {row.empID}</ListItem>
                <ListItem>Doctor: {row.empLName}</ListItem>
                <ListItem>NHSNumber: {row.NHSNumber}</ListItem>
                <ListItem>gpID: {row.gpID}</ListItem>
                <ListItem>Firstname: {row.Forename}</ListItem>
                <ListItem>Lastname: {row.Surname}</ListItem>
                <ListItem>EmailAddress: {row.EmailAddress}</ListItem>
                <ListItem>PhoneNumber: {row.PhoneNumber}</ListItem>
                <ListItem>Postcode: {row.Postcode}</ListItem>
                <ListItem>
                  Appointment Time: {row.appDateAssigned} {row.AppTimeAssigned}
                </ListItem>
                <ListItem>Date of Birth: {row.PersonDOB}</ListItem>
                <ListItem>GenderCode: {row.GenderCode}</ListItem>
                <ListItem>appNotes: {row.appNotes}</ListItem>
                <ListItem>Completed: {row.completed}</ListItem>
              </UnorderedList>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <InputField
            name="remove"
            style={{ width: "20%" }}
            value={remove}
            onChange={(e) => setRemove(e.target.value)}
          >
            Enter ID to remove
          </InputField>

          {loginError && (
            <ErrorText>Error please enter a valid ID to remove</ErrorText>
          )}

          <Button type="submit" start>
            Remove
          </Button>
        </form>

        <br />
      </Main>
    </div>
  );
}

export default Adminpanel;
