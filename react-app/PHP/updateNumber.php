<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: PUT, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    exit;
}
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    // Get the request data
    $data = json_decode(file_get_contents("php://input"), true);
    $phone_number = isset($data['phone_number']) ? $data['phone_number'] : null;
    $nhs_number = isset($data['nhs_number']) ? $data['nhs_number'] : null;

    if (empty($phone_number)) {
        header('HTTP/1.1 400 Bad Request');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => 'Phone number is required')));
    }

    // Validate phone number format
    if (!preg_match('/^[0-9]+$/', $phone_number)) {
        header('HTTP/1.1 400 Bad Request');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => 'Invalid phone number format')));
    }

    // Open the database file
    try {
        $db = new PDO('sqlite:LocalDatabase.db');
    } catch (PDOException $e) {
        die('Could not connect to the database: ' . $e->getMessage());
    }

    // Prepare the SQL query with an UPDATE statement for the logged-in user
    $query = 'UPDATE patients SET PhoneNumber = :phone_number WHERE NHSNumber = :nhs_number';
    $stmt = $db->prepare($query);

    // Bind the form data and the NHS number to the query
    $stmt->bindParam(':phone_number', $phone_number);
    $stmt->bindParam(':nhs_number', $nhs_number);

    // Execute the query
    if (!$stmt->execute()) {
        header('HTTP/1.1 500 Internal Server Error');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => 'Error executing query: ' . $stmt->errorInfo()[2])));
    }

    // Output a success message as JSON
    header('Content-Type: application/json; charset=UTF-8');
    $message = array('message' => 'Phone number updated successfully');
    echo json_encode($message);

    // Additional console logs
    $response_data = json_encode($message);
    $date = date('Y-m-d H:i:s');
    $log_data = "$date - PUT request to update phone number:\nRequest data: " . print_r($data, true) . "\nResponse data: " . $response_data . "\n\n";
    file_put_contents('logs.txt', $log_data, FILE_APPEND);
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array('message' => 'Invalid request method')));
}

?>
