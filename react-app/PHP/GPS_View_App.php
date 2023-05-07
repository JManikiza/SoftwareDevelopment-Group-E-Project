<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

include 'auth.php';

// Check if the user is authenticated by checking for an NHSNumber in the session
if (!isset($_SESSION['nhs_number'])) {
    http_response_code(401);
    exit();
}
// Open the database file
try {
    $db = new PDO('sqlite:LocalDatabase.db');
} catch (PDOException $e) {
    die('Could not connect to the database: ' . $e->getMessage());
}

// Prepare the SQL query to fetch appointments for the authenticated user
$query = 'SELECT appID, empID, appDateAssigned, appTimeAssigned FROM Appointment WHERE NHSNumber=:nhs_number';
$stmt = $db->prepare($query);
$stmt->bindValue(':nhs_number', $_SESSION['nhs_number']);

// Execute the query
if (!$stmt->execute()) {
    die('Error executing query: ' . $stmt->errorInfo()[2]);
}

// Fetch the results and output them as JSON
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
header('Content-Type: application/json');
echo json_encode($results);

?>
