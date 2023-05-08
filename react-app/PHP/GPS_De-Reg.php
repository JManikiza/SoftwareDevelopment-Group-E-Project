<!-- /**
* Author(s) of this code: 
*
* Joven Manikiza
*/ -->
<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

if (isset($_POST['nhs_number'])) {
    $nhs_number = $_POST['nhs_number'];
error_log("NHS number received: " . $nhs_number);

    // rest of your code
} else {
    echo json_encode(array("success" => false, "message" => "No NHS number provided"));
}
$data = json_decode(file_get_contents("php://input"), true);



try {
    $conn = new PDO("sqlite:LocalDatabase.db");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->beginTransaction();

    $stmt = $conn->prepare("DELETE FROM Appointment WHERE NHSNumber = :nhs_number");
    $stmt->bindParam(':nhs_number', $nhs_number, PDO::PARAM_STR);
    $stmt->execute();
    error_log($stmt->rowCount() . " Appointments deleted");

    $stmt = $conn->prepare("DELETE FROM patients WHERE NHSNumber = :nhs_number");
    $stmt->bindParam(':nhs_number', $nhs_number, PDO::PARAM_STR);
    $stmt->execute();
    error_log($stmt->rowCount() . " Patients deleted");

    $conn->commit();
    error_log("Transaction committed");

    $response = array("success" => true, "message" => "Successfully de-registered from GP");
    echo json_encode($response);
} catch (PDOException $e) {
    $conn->rollBack();
    error_log("Transaction rolled back: " . $e->getMessage());

    $response = array("success" => false, "message" => "Failed to de-register from GP");
    echo json_encode($response);
}
