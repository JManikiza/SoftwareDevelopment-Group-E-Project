<?php
include 'auth.php'; // contains the unique identifier in the 'NHSNumber' column
$nhs_number = $_SESSION['nhs_number'];

// allow cross-origin resource sharing
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // method not allowed
    die();
}

// check if the 'gender' parameter exists and is not empty
if (empty($_POST['gender'])) {
    http_response_code(400); // bad request
    $response = array("message" => "Gender not found in request.");
    echo json_encode($response);
    die();
}

$newGender = $_POST['gender'];

// connect to the database
try {
    $db = new PDO('sqlite:LocalDatabase.db');
} catch (PDOException $e) {
    http_response_code(500); // internal server error
    die('Could not connect to the database: ' . $e->getMessage());
}

// update the 'GenderCode' column for the patient
$updateQuery = "UPDATE patients SET GenderCode = :gender WHERE NHSNumber = :nhsNumber";
$stmt = $db->prepare($updateQuery);
$stmt->bindValue(':gender', $newGender, PDO::PARAM_STR);
$stmt->bindValue(':nhsNumber', $nhs_number, PDO::PARAM_INT);
$result = $stmt->execute();

if ($result) {
  // success message
  $response = array("message" => "Gender updated successfully!");
  echo json_encode($response);
} else {
  // error message
  http_response_code(500); // internal server error
  $response = array("message" => "Error updating gender.");
  echo json_encode($response);
}
?>
