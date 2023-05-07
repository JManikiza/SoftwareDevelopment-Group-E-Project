<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// Include the auth.php file to get the nhs_number
include 'auth.php';

// Get the appID parameter from the request
$appID = $_GET['appID'];

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

// Prepare the SQL query to delete the row from the Appointment table where nhs_number and appID match
$query = 'DELETE FROM Appointment WHERE NHSNumber=:nhs_number AND appID=:appID';
$stmt = $db->prepare($query);

// Bind the parameters to the query
$stmt->bindParam(':nhs_number', $nhs_number);
$stmt->bindParam(':appID', $appID);

// Execute the query
if (!$stmt->execute()) {
    die('Error executing query: ' . $stmt->errorInfo()[2]);
}

// Output a success message as JSON
header('Content-Type: application/json');
echo json_encode(array('message' => 'Appointment cancelled successfully.'));

?>
