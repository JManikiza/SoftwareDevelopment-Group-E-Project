<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");


// SQLite database file path
$database_file = 'LocalDatabase.db';

// PDO connection string
$dsn = 'sqlite:' . $database_file;

// PDO connection options
$options = array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
);

// Connect to the database
try {
    $pdo = new PDO($dsn, null, null, $options);

    // // Fetch data from the Appointments table
    // $stmt = $pdo->query("SELECT appID, empID, NHSNumber, appDateAssigned, AppTimeAssigned, appNotes, completed FROM Appointment");


    // Fetch data from the Appointments and patients tables
$stmt = $pdo->query("SELECT Appointment.appID, Appointment.empID, Appointment.NHSNumber, Appointment.appDateAssigned, 
Appointment.AppTimeAssigned, Appointment.appNotes, Appointment.completed, patients.gpID, patients.Forename, 
patients.Surname, patients.EmailAddress, patients.PersonDOB,patients.GenderCode, patients.Postcode, patients.PhoneNumber, Employee.empLName
FROM Appointment
JOIN patients ON Appointment.NHSNumber = patients.NHSNumber
JOIN Employee On Appointment.empID - Employee.empID");



    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Output as JSON
    header('Content-Type: application/json');
    echo json_encode($results);

} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}


?>
