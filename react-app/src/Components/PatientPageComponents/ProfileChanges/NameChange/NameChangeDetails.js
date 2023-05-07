/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Main, Table, Button, Heading, Breadcrumbs, Paragraph, MultiChoice, Radio } from "govuk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../Navigation";
import NameChangeBothNames from "./NameChangeBothNames";

function NameChangeDetails() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [selectedRadio, setSelectedRadio] = useState("");

      useEffect(() => {
    const title = 'Name Change';
    document.title = title;
  })

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
      


<Button onClick={() => navigate("/NameChangeBothNames")}>
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
