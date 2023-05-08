/**
* Author(s) of this code: 
*
* Joven Manikiza
*/
<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $nhs_number = $_GET['nhs_number'];

    // Open the database file
    try {
        $db = new PDO('sqlite:LocalDatabase.db');
    } catch (PDOException $e) {
        die('Could not connect to the database: ' . $e->getMessage());
    }

    // Prepare the SQL query to fetch appointments for the authenticated user
    $query = 'SELECT appID, empID, appDateAssigned, appTimeAssigned FROM Appointment WHERE NHSNumber=:nhs_number';
    $stmt = $db->prepare($query);
    $stmt->bindValue(':nhs_number', $nhs_number);

    // Execute the query
    if (!$stmt->execute()) {
        die('Error executing query: ' . $stmt->errorInfo()[2]);
    }

    // Fetch the results and output them as JSON
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    header('Content-Type: application/json');
    echo json_encode($results);
} else {
    http_response_code(405);
    die('HTTP method not allowed.');
}
?>
