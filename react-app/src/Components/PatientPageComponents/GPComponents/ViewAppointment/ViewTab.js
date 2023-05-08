import { Table, H2, Link } from "govuk-react";
import { useState, useEffect } from "react";
import $ from 'jquery';

function ViewTab(){

  const [fetchedAppointments, setFetchedAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [response, setResponse] = useState('');
  let nhs_number = localStorage.getItem("nhsNo");

  useEffect(() => {
    fetch(`http://localhost:4000/GPS_View_App.php?nhs_number=${nhs_number}`, {
      credentials: "include",
    })
    .then(response => response.json())
    .then(data => {
      console.log("fetched appointments: ", data);
      setFetchedAppointments(data);
    })
    .catch(error => console.error(error));
  }, [nhs_number]);

  useEffect(() => {
    // Fetch doctors data from the server
    fetch(`http://localhost:4000/GPS_Doc_Avail.php`, {
      credentials: "include",
    })
    .then(response => response.json())
    .then(data => {
      console.log("fetched doctors: ", data);
      setDoctors(data);
    })
    .catch(error => console.error(error));
  }, []);

const handleCancel = (appID) => {
  if (window.confirm("Are you sure you want to cancel this appointment?")) {
    // Find the appointment to cancel and its associated doctor
    const appointment = fetchedAppointments.find(appointment => appointment.appID === appID);
    const doctor = doctors.find(doctor => doctor.empID === appointment.empID);
    console.log("appointment: ", appointment);
    console.log("doctor: ", doctor);
    console.log(`cancelling appointment with appID=${appID} for nhs_number=${nhs_number}`);

    $.ajax({
      url: 'http://localhost:4000/GPS_Cancel_App.php',
      type: 'POST',
      data: {
        appID: appID,
        nhs_number: nhs_number
      },
      success: function (data) {
        if (data.error) {
          throw new Error(data.error);
        }
        console.log("cancelled appointment: ", data);

        // Reload the appointments data after the cancellation
        fetch(`http://localhost:4000/GPS_View_App.php?nhs_number=${nhs_number}`, {
          credentials: "include",
        })
          .then(response => response.json())
          .then(data => {
            console.log("fetched appointments: ", data);
            setFetchedAppointments(data);
          })
          .catch(error => console.error(error));
      },
      error: function (error) {
        console.error(error);
      }
    });
  }
};

  return(
    <div>
      <br/>
      <H2>
        View/Cancel Appointment
      </H2>
      {doctors.length && fetchedAppointments.length && (
        <Table head={<Table.Row><Table.CellHeader>Appointment</Table.CellHeader><Table.CellHeader>DD/MM/YY</Table.CellHeader><Table.CellHeader>Time 24H</Table.CellHeader><Table.CellHeader></Table.CellHeader></Table.Row>}>
          {fetchedAppointments.map(appointment => {
            // Find the associated doctor for the appointment
            const doctor = doctors.find(doctor => doctor.empID === parseInt(appointment.empID));
            console.log("rendering appointment row: ", appointment);
            console.log("associated doctor: ", doctor);
            return (
              <Table.Row key={appointment.appID}>
                <Table.Cell>
                  Dr. {doctor ? doctor.empLName : ''}
                </Table.Cell>
                <Table.Cell>
                  {appointment.appDateAssigned}
                </Table.Cell>

          <Table.Cell>
            {appointment.AppTimeAssigned}
          </Table.Cell>
          <Table.Cell>
            { <Link onClick={() => handleCancel(appointment.appID)} children="Cancel"/>}
          </Table.Cell>
        </Table.Row>
      );
    })}
  </Table>
)}

    </div>
  );
};

export default ViewTab;
