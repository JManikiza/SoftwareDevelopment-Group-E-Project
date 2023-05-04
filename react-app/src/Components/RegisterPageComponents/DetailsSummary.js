/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */
//import test
import { Table, Main, Button, Heading } from "govuk-react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import jq from "jquery";

function DetailsSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  //catch the state values passed from previous pages
  const nhsNumber = location.state?.nhsNumber;
  const fName = location.state?.fName;
  const sName = location.state?.sName;
  const day = location.state?.day;
  const month = location.state?.month;
  const year = location.state?.year;
  const gender = location.state?.gender;
  const email = location.state?.email;
  const phoneNumber = location.state?.phoneNumber;
  const address1 = location.state?.address1;
  const address2 = location.state?.address2;
  const townCity = location.state?.townCity;
  const county = location.state?.county;
  const postCode = location.state?.postCode;
  const userPassword = location.state?.userPassword1;
  var newGender = null

  //this method will transfer the states back to the previous pages if customer devices to presse the anchor "change"
  const handleSubmit = (path) => (e) => {
    e.preventDefault();
    navigate(path, {
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
        userPassword
      },
    });
  };
  
  //method do add to the database
  function addPatientData() {
    if(gender === "Female"){
       newGender = 1
    }else if(gender === "Male"){
       newGender = 2
    }else{
       newGender = 3
    } 
    var addNewpatient = {
      nhsNo: nhsNumber,
      ForeName: fName,
      SurName: sName,
      Date: year + month +day,
      gender: newGender,
      email: email,
      phoneNumber: phoneNumber,
      postCode: postCode,
      password: userPassword
    };

    jq.ajax({
      type: "POST",
      url: "http://localhost:4000/AddNewPatient.php",
      mode: "no-core",
      data: addNewpatient,
      success(data) {
        console.log(data);
/*         if (data === "no patients") {
          alert("no patients")
        } else {
          alert(data);
          var json = jq.parseJSON(data);
          alert(json[0].Postcode);
        } */
      },
    });
    navigate("/RegistrationComplete",  {
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
        userPassword
      },
    });
  }

  return (
    <div>
      <Navigation pageLink1="/" PageName1="home" pageLink2="/login" PageName2="Login" pageLink3="/NhsNumber" PageName3="Register"/>

      <Main>
        <form>
          <Heading>Summary List</Heading>
          <Table>
            <Table.Row>
              <Table.Cell>
                <span style={{ fontWeight: "bold" }}>Name</span>
              </Table.Cell>
              <Table.Cell>{fName}</Table.Cell>
              <Table.Cell>
                <Link onClick={handleSubmit("/FirstName")}>Change</Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span style={{ fontWeight: "bold" }}>Surname</span>
              </Table.Cell>
              <Table.Cell>{sName}</Table.Cell>
              <Table.Cell>
                <Link onClick={handleSubmit("/Surname")}>Change</Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span style={{ fontWeight: "bold" }}>Date of birth</span>
              </Table.Cell>
              <Table.Cell>
                {day}/{month}/{year}
              </Table.Cell>
              <Table.Cell>
                <Link onClick={handleSubmit("/DateOFBirth")}>Change</Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span style={{ fontWeight: "bold" }}>NHS Number</span>
              </Table.Cell>
              <Table.Cell>{nhsNumber}</Table.Cell>
              <Table.Cell>
                <Link onClick={handleSubmit("/NhsNumber")}>Change</Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span style={{ fontWeight: "bold" }}>Gender</span>
              </Table.Cell>
              <Table.Cell>{gender}</Table.Cell>
              <Table.Cell>
                <Link onClick={handleSubmit("/Gender")}>Change</Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span style={{ fontWeight: "bold" }}>Email</span>
              </Table.Cell>
              <Table.Cell>{email}</Table.Cell>
              <Table.Cell>
                <Link onClick={handleSubmit("/Contact")}>Change</Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span style={{ fontWeight: "bold" }}>Phone Number</span>
              </Table.Cell>
              <Table.Cell>{phoneNumber}</Table.Cell>
              <Table.Cell>
                <Link onClick={handleSubmit("/Contact")}>Change</Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span style={{ fontWeight: "bold" }}>Address Detail</span>
              </Table.Cell>
              <Table.Cell>{address1}</Table.Cell>
              <Table.Cell>
                <Link onClick={handleSubmit("/Address")}>Change</Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span style={{ fontWeight: "bold" }}></span>
              </Table.Cell>
              <Table.Cell>{address2}</Table.Cell>
              <Table.Cell>
                <Link onClick={handleSubmit("/Address")}>Change</Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <span style={{ fontWeight: "bold" }}></span>
              </Table.Cell>
              <Table.Cell>{townCity}</Table.Cell>
              <Table.Cell>
                <Link onClick={handleSubmit("/Address")}>Change</Link>
              </Table.Cell>
            </Table.Row>
            {/** used the a ternary operator to check if the value inside of county is empty/null or undefined
             *  if the the variable holds a value it will display the table.row with the county information*/}
            {county && (
              <Table.Row>
                <Table.Cell>
                  <span style={{ fontWeight: "bold" }}></span>
                </Table.Cell>
                <Table.Cell>{county}</Table.Cell>
                <Table.Cell>
                  <Link onClick={handleSubmit("/Address")}>Change</Link>
                </Table.Cell>
              </Table.Row>
            )}

            <Table.Row>
              <Table.Cell>
                <span style={{ fontWeight: "bold" }}></span>
              </Table.Cell>
              <Table.Cell>{postCode}</Table.Cell>
              <Table.Cell>
                <Link onClick={handleSubmit("/Address")}>Change</Link>
              </Table.Cell>
            </Table.Row>
            <br />
            <Button type="submit" onClick={addPatientData} start>
              Register
            </Button>
          </Table>
        </form>
      </Main>
    </div>
  );
}
export default DetailsSummary;
