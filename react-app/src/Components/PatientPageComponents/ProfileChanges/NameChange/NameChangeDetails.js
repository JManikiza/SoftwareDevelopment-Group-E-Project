/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Main, Table, Button, Heading, Breadcrumbs, Paragraph, MultiChoice, Radio } from "govuk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";
import NameChangeFirstName from "./NameChangeFirstName";
import NameChangeLastName from "./NameChangeLastName";
import NameChangeBothNames from "./NameChangeBothNames";

function NameChangeDetails() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [selectedRadio, setSelectedRadio] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/getData.php")
      .then((response) => response.json())
      .then((data) => {
        setData({
          forename: data[0].Forename,
          surname: data[0].Surname,
          NHSNo: data[0].NHSNumber,
          address: data[0].Postcode,
        });
      })
      .catch((error) => console.error(error));
  }, []);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const handleContinueClick = () => {
    switch (selectedRadio) {
      case "first":
        navigate("/NameChangeFirstName");
        break;
      case "last":
        navigate("/NameChangeLastName");
        break;
      case "both":
        navigate("/NameChangeBothNames");
        break;
      default:
        break;
    }
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
        <Breadcrumbs>
          <Breadcrumbs.Link>Home Page</Breadcrumbs.Link>
          <Breadcrumbs.Link>Profile</Breadcrumbs.Link>
          <Breadcrumbs.Link>Start</Breadcrumbs.Link>
          <Breadcrumbs.Link>Circumstances</Breadcrumbs.Link>
        </Breadcrumbs>

        <Heading>About you</Heading>

        <Table>
          <Table.Row>
            <Table.CellHeader>NHS number:</Table.CellHeader>
            <Table.Cell>{data.NHSNo}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>First name:</Table.CellHeader>
            <Table.Cell>{data.forename}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Last name:</Table.CellHeader>
            <Table.Cell>{data.surname}</Table.Cell>
          </Table.Row>
        </Table>

        <MultiChoice label="What name(s) would you like to change?">
          <Radio
            inline
            name="name"
            value="first"
            onChange={handleRadioChange}
            checked={selectedRadio === "first"}
          >
            First
          </Radio>
          <Radio
            inline
            name="name"
            value="last"
            onChange={handleRadioChange}
            checked={selectedRadio === "last"}
          >
            Last
          </Radio>
          <Radio
            inline
            name="name"
            value="both"
            onChange={handleRadioChange}
            checked={selectedRadio === "both"}
          >
            Both
          </Radio>
        </MultiChoice>

       


<Button onClick={handleContinueClick}>
  Continue
</Button>

<Button onClick={() => navigate("/Profile")} buttonColour="GREY">
  Cancel
</Button>

</Main>
</div>
);
}

export default NameChangeDetails;
