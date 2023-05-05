<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

include 'auth.php';
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

// Prepare the SQL query with a WHERE clause to only retrieve data for the logged-in user
$query = 'SELECT NHSNumber, gpID, Forename, surname, EmailAddress, PersonDOB, GenderCode, Postcode, Password, PhoneNumber FROM patients WHERE NHSNumber = ?';
$stmt = $db->prepare($query);

// Bind the NHS number to the query
$stmt->bindParam(1, $nhs_number);

// Execute the query
if (!$stmt->execute()) {
    die('Error executing query: ' . $stmt->errorInfo()[2]);
}

// Fetch the results and output them as JSON
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
header('Content-Type: application/json');
echo json_encode($results);

?>