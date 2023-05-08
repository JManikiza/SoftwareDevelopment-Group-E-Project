
<?php

 /**
* Author(s) of this code: 
*
* Joven Manikiza
*/ 

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

$appID = $_POST['appID'];
$nhs_number = $_POST['nhs_number'];

// Open the database file
try {
    $db = new PDO('sqlite:LocalDatabase.db');
} catch (PDOException $e) {
    die('Could not connect to the database: ' . $e->getMessage());
}

// Prepare the SQL query to cancel the appointment
$query = 'DELETE FROM Appointment WHERE appID=:appID AND NHSNumber=:nhs_number';
$stmt = $db->prepare($query);
$stmt->bindValue(':appID', $appID);
$stmt->bindValue(':nhs_number', $nhs_number);

// Execute the query
if (!$stmt->execute()) {
    die('Error executing query: ' . $stmt->errorInfo()[2]);
}

// Output a success message as JSON
header('Content-Type: application/json');
echo json_encode(['message' => 'Appointment cancelled successfully.']);

?>
