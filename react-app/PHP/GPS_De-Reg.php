<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// Include the auth.php file to get the nhs_number
include 'auth.php';

// Get the NHSNumber parameter from the request
$nhs_number = $_SESSION['nhs_number'];
if (!$nhs_number) {
    // user is not logged in, handle appropriately
}

// Open the database file
try {
    $db = new PDO('sqlite:LocalDatabase.db');
} catch (PDOException $e) {
    die('Could not connect to the database: ' . $e->getMessage());
}

// Begin a transaction
$db->beginTransaction();

// Prepare the SQL query to delete the rows from the Appointment table where NHSNumber matches
$query = 'DELETE FROM Appointment WHERE NHSNumber=:nhs_number';
$stmt = $db->prepare($query);

// Bind the parameters to the query
$stmt->bindParam(':nhs_number', $nhs_number);

// Execute the query
if (!$stmt->execute()) {
    // Rollback the transaction if there was an error
    $db->rollBack();
    die('Error deleting appointments: ' . $stmt->errorInfo()[2]);
}

// Prepare the SQL query to delete the row from the Patient table where NHSNumber matches
$query = 'DELETE FROM patients WHERE NHSNumber=:nhs_number';
$stmt = $db->prepare($query);

// Bind the parameters to the query
$stmt->bindParam(':nhs_number', $nhs_number);

// Execute the query
if (!$stmt->execute()) {
    // Rollback the transaction if there was an error
    $db->rollBack();
    die('Error deleting patient: ' . $stmt->errorInfo()[2]);
}

// Commit the transaction if both queries executed successfully
$db->commit();

// Output a success message as JSON
header('Content-Type: application/json');
echo json_encode(array('message' => 'Patient and appointments deleted successfully.'));

?>
