/*
author(s)
Name:Mohamed Mohamed
ID:w1830958
*/

//imported function section
import { useState, useEffect } from "react";
import {
  Main,
  Breadcrumbs,
  H3,
  Label,
  Button,
  GridRow,
  GridCol,
  TextArea,
  BackLink,
  Table,
} from "govuk-react";
import Navigation from "../../Components/Navigation";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../../Components/LoginComponents/Logout";
import jq from "jquery";

function DoctorViewandUpdate() {
  const [vaccineData, setVaccineData] = useState([]);

  useEffect(() => {
    jq.ajax({
      type: "POST",
      url: "http://localhost:4000/vaccinedata.php",
      data: { nhs: NHSNumber },
      dataType: "json",
      success: function (response) {
        if (response === "no vaccines") {
          console.log("no vaccine");
        } else {
          setVaccineData(response);
        }
      },
      error: function (xhr, status, error) {
        console.error("AJAX error: " + status + " - " + error);
      },
    });
  }, []);

  //use navigation to get to another page
  const navigate = useNavigate();
  //current date function generator.
  const date = new Date();
  //useLocalte to retrieve the data passed from the previous page(DoctorAppointment.js).
  const location = useLocation();
  //variables with use locate used along with state to retireve the data and assign it to its designated variable.

  const NHSNumber = location.state.PatientNHSNumber;
  const FName = location.state.PatientFName;
  const ANumber = location.state.AppointmentNumber;
  const SName = location.state.PatientSName;
  const DOB = location.state.PatientDOB;
  //use state for editing the medical record with boolean
  const [editing, setEditing] = useState(false);
  //use state for storing retireved medical record and editing the medical record with string
  const [MedicalRecord, setMedicalRecord] = useState(
    location.state.PatientMedicalNote
  );
  // this fnction is to set the editinng state to true when clicked on the update button and put it to hidden state.
  //when the update button is put to hidden state, input field and save button will appear which will allow the doctor to update the medical record data
  //and allow the doctor to save the updated medical record data when clicking on save button.
  const handleUpdateClick = () => {
    setEditing(true);
  };
  // this fnction is to set the editinng state to false and hide the save button along with the input field and set the data to the php file called updateMedical.php to update the database.
  const handleSaveClick = () => {
    if (MedicalRecord === null) {
      setEditing(false);
    } else {
      //store the medical record with the date inside it using the setmedical record.
      setMedicalRecord((MedicalRecord) => date + "\n" + MedicalRecord + "\n");

      setEditing(false);
    }
    //ajax function that is used to pass the data to the php file using the local host address.
    //it will also call navigate function to go back to the DoctorAppointment.js file.
    jq.ajax({
      type: "POST",
      url: "http://localhost:4000/updateMedical.php",
      mode: "no-core",
      data: { nhsNo: NHSNumber, medicalrecord: MedicalRecord, AN: ANumber },

      success: function (data) {
        console.log("completed");
      },
    });
    navigate("/DoctorAppointment");
  };

  return (
    <div>
      {/*calling of navigation.js components with props of links to and text name of the link   */}
      <Navigation
        pageLink1="/"
        PageName1="Home"
        pageLink2="/DoctorAppointment"
        PageName2="Doctor List Of Appointments"
      />
      <br />
      <br />
      <br />
      {/*logout.js component called here to use on the page */}
      <Logout />
      <br />
      <br />
      <Main>
        {/*Main and breadcrumbs imported from govuk-react with links to privous pages.*/}
        <Breadcrumbs>
          <Breadcrumbs.Link to="/">HomePage</Breadcrumbs.Link>

          <Breadcrumbs.Link href="/DoctorViewandUpdate">
            Doctor View and Update Medical Records
          </Breadcrumbs.Link>
        </Breadcrumbs>
        <br />
        <br />
        {/*a tag is used to go back to the previous page*/}
        <BackLink
          onClick={() => {
            window.history.back();
          }}
        >
          Back
        </BackLink>
        <br /> <br />
        {
          /*H3 is used to display the user data retireved*/
          /*Label is used to display the user data retireved*/
          /*TextArea is used to display the user data retireved*/
          /*Button is used to display the user data retireved*/
          /*GridRow is used to display the user data retireved within the row*/
          /*GridCol is used to display the user data retireved within the column */
          //after that editing variable used check if user click or not.
        }
        <H3 size="LARGE" style={{ textAlign: "center" }}>
          View and Update Medical Records
        </H3>
        <br />
        <br />
        <Table>
          <Table.Row>
            <Table.CellHeader>NHS Number</Table.CellHeader>
            <Table.Cell>{NHSNumber}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Patient Name</Table.CellHeader>
            <Table.Cell>
              {FName} {SName}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Date Of Birth</Table.CellHeader>
            <Table.Cell>{DOB}</Table.Cell>
          </Table.Row>
          <br />
          <br />
          <br />

          <Table.Row>
            <Table.CellHeader>Manufacturer</Table.CellHeader>
            <Table.CellHeader>Dose No.</Table.CellHeader>
            <Table.CellHeader>Vac Date</Table.CellHeader>
            <Table.CellHeader>Disease Targeted</Table.CellHeader>
            <Table.CellHeader>Vac Type</Table.CellHeader>
            <Table.CellHeader>Product.</Table.CellHeader>
            <Table.CellHeader>Batch No.</Table.CellHeader>
            <Table.CellHeader>Country of Vac</Table.CellHeader>
          </Table.Row>

          {vaccineData.map((vaccine, index) => (
            <Table.Row key={index}>
              <Table.Cell>{vaccine.VaccineManufacturer}</Table.Cell>
              <Table.Cell>{vaccine.DoseNo}</Table.Cell>
              <Table.Cell>{vaccine.VaccinationDate}</Table.Cell>
              <Table.Cell>{vaccine.DiseaseTargeted}</Table.Cell>
              <Table.Cell>{vaccine.VaccineType}</Table.Cell>
              <Table.Cell>{vaccine.Product}</Table.Cell>
              <Table.Cell>{vaccine.VaccineBatchNumber}</Table.Cell>
              <Table.Cell>{vaccine.CountryOfVaccination}</Table.Cell>
            </Table.Row>
          ))}

          <br />
          <br />
          <Table.Row>
            <Table.CellHeader>Authority</Table.CellHeader>
            <Table.CellHeader>Site</Table.CellHeader>
            <Table.CellHeader>Dose Series</Table.CellHeader>
            <Table.CellHeader>Display Name</Table.CellHeader>
            <Table.CellHeader>Snomed Code</Table.CellHeader>
            <Table.CellHeader>Date Entered</Table.CellHeader>
            <Table.CellHeader>Procedure Code</Table.CellHeader>
            <Table.CellHeader>Booster</Table.CellHeader>
          </Table.Row>

          {vaccineData.map((vaccine, index) => (
            <Table.Row key={index}>
              <Table.Cell>{vaccine.Authority}</Table.Cell>
              <Table.Cell>{vaccine.Site}</Table.Cell>
              <Table.Cell>{vaccine.DoseSeries}</Table.Cell>
              <Table.Cell>{vaccine.DisplayName}</Table.Cell>
              <Table.Cell>{vaccine.SnomedCode}</Table.Cell>
              <Table.Cell>{vaccine.DateEntered}</Table.Cell>
              <Table.Cell>{vaccine.ProcedureCode}</Table.Cell>
              <Table.Cell>{vaccine.Booster}</Table.Cell>
            </Table.Row>
          ))}
        </Table>
        <br />
        <br />
        {/* if user click then editing variable is set to true and display the inputfield and save button.
         else if will just display the medical record.
        once the user clicks on the save button, the data will be updated in the sql using the php and goes back to
         the DoctorAppointment.js file. it will also set the appointment to completed and will no longer show up on the 
DoctorAppointment.js file.*/}
        {editing ? (
          <GridRow>
            <GridCol>
              <div>
                <Label>
                  <TextArea
                    input={{
                      name: "group1",
                      value: MedicalRecord,
                      onChange: (event) => setMedicalRecord(event.target.value),
                    }}
                  >
                    Medical Record: {MedicalRecord}
                  </TextArea>
                </Label>
              </div>
            </GridCol>
          </GridRow>
        ) : (
          <GridRow>
            <GridCol>
              <div>
                <Label>
                  <p>Medical Record: {MedicalRecord}</p>
                </Label>
              </div>
            </GridCol>
          </GridRow>
        )}
        <br />
        <br />
        {editing ? (
          <Button onClick={handleSaveClick}>Save</Button>
        ) : (
          <Button start onClick={handleUpdateClick}>
            Update
          </Button>
        )}
      </Main>

      <br />
      <br />
      <br />
    </div>
  );
}
export default DoctorViewandUpdate;
