/**
* Author(s) of this code: 
*
* Joven Manikiza
*/
<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// Open the database file
try {
    $db = new PDO('sqlite:LocalDatabase.db');
} catch (PDOException $e) {
    die('Could not connect to the database: ' . $e->getMessage());
}

// Prepare the SQL query to fetch data for all doctors
$query = 'SELECT empLName, Specialisation, empEmail, empPhone, empID FROM Employee WHERE employeeType="Doctor"';
$stmt = $db->prepare($query);

// Execute the query
if (!$stmt->execute()) {
    die('Error executing query: ' . $stmt->errorInfo()[2]);
}

// Fetch the results and output them as JSON
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
header('Content-Type: application/json');
echo json_encode($results);

?>
