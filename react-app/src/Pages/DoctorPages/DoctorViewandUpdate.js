import { useState } from "react";
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
} from "govuk-react";
import Navigation from "../../Components/Navigation";
import { useLocation, useNavigate } from "react-router-dom";
import jq from "jquery";
function DoctorViewandUpdate() {
  const navigate=useNavigate();
  const date = new Date();
  const location = useLocation();
  const NHSNumber = location.state.PatientNHSNumber;
  const FName = location.state.PatientFName;
  const ANumber = location.state.AppointmentNumber;
  const SName = location.state.PatientSName;
  const DOB = location.state.PatientDOB;
  const [editing, setEditing] = useState(false);
  const [MedicalRecord, setMedicalRecord] = useState(
    location.state.PatientMedicalNote
  );
  const handleUpdateClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    if (MedicalRecord === null) {
      setEditing(false);
    } else {
      setMedicalRecord((MedicalRecord) => date + "\n" + MedicalRecord + "\n");

      setEditing(false);
    }
    jq.ajax({
      type: "POST",
      url: "http://localhost:4000/updateMedical.php",
      mode: "no-core",
      data: { nhsNo: NHSNumber, medicalrecord: MedicalRecord, AN: ANumber },

      success: function (data) {
        console.log("completed");
      },
    });
    navigate("/DoctorAppointment");};

  return (
    <div>
      <Navigation
        pageLink1="/"
        PageName1="Home"
        pageLink2="/DoctorAppointment"
        PageName2="Doctor List Of Appointments"
        pageLink3="/"
        PageName3="Logout"
      />

      <Main>
        <Breadcrumbs>
          <Breadcrumbs.Link to="/">HomePage</Breadcrumbs.Link>

          <Breadcrumbs.Link href="/DoctorViewandUpdate">
            Doctor View and Update Medical Records
          </Breadcrumbs.Link>
        </Breadcrumbs>
        <br />
        <br />
        <BackLink onClick={function noRefCheck() {}}>Back</BackLink> <br />
        <br />
        <H3 size="LARGE" style={{ textAlign: "center" }}>
          View and Update Medical Records
        </H3>
        <br />
        <br />
        <GridRow>
          <GridCol>
            <div>
              <Label>
                <p>NHS Number: {NHSNumber}</p>
              </Label>
            </div>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol>
            <div>
              <p>
                Patient Name: {FName} {SName}
              </p>
            </div>
          </GridCol>
          <GridCol>
            <div>
              <p>Date Of Birth: {DOB}</p>
            </div>
          </GridCol>
        </GridRow>
        <br />
        <br />
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
