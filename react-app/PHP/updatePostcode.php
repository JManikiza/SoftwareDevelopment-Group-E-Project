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

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $postcode = isset($_POST['postcode']) ? $_POST['postcode'] : null;

    if (empty($postcode)) {
        header('HTTP/1.1 400 Bad Request');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => 'Postcode is required')));
    }

    // Open the database file
    try {
        $db = new PDO('sqlite:LocalDatabase.db');
    } catch (PDOException $e) {
        die('Could not connect to the database: ' . $e->getMessage());
    }

    // Prepare the SQL query with an UPDATE statement for the logged-in user
    $query = 'UPDATE patients SET Postcode = :postcode WHERE NHSNumber = :nhs_number';
    $stmt = $db->prepare($query);

    // Bind the form data and the NHS number to the query
    $stmt->bindParam(':postcode', $postcode);
    $stmt->bindParam(':nhs_number', $nhs_number);

    // Execute the query
    if (!$stmt->execute()) {
        header('HTTP/1.1 500 Internal Server Error');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => 'Error executing query: ' . $stmt->errorInfo()[2])));
    }

    // Output a success message as JSON
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode(array('message' => 'Data updated successfully'));
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array('message' => 'Invalid request method')));
}
