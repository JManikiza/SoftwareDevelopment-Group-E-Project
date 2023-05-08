/**
* Author(s) of this code: 
*
* Joven Manikiza
*/

import { Table, Tabs, H2 } from "govuk-react";
import { useState, useEffect } from "react";

function DoctorTab() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/GPS_Doc_Avail.php')
      .then(response => response.json())
      .then(data => {
        setDoctors(data.map(doctor => ({
          ...doctor,
          empEmail: doctor.empEmail.toUpperCase(),
          Specialisation: doctor.Specialisation.toUpperCase(),
          empLName: doctor.empLName.toUpperCase(),
        })));
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <br />
      <H2>Doctors Available</H2>
      <Table head={
        <Table.Row>
          <Table.CellHeader>Name</Table.CellHeader>
          <Table.CellHeader>Specialisation</Table.CellHeader>
          <Table.CellHeader>Email</Table.CellHeader>
          <Table.CellHeader>Contact No.</Table.CellHeader>
        </Table.Row>
      }>
        {doctors.map(doctor => (
          <Table.Row key={doctor.empID}>
            <Table.Cell>DR.{doctor.empLName}</Table.Cell>
            <Table.Cell>{doctor.Specialisation}</Table.Cell>
            <Table.Cell>{doctor.empEmail}</Table.Cell>
            <Table.Cell>+44{doctor.empPhone}</Table.Cell>
          </Table.Row>
        ))}
      </Table>
    </div>
  );
}

export default DoctorTab;
