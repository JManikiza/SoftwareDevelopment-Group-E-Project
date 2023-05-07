<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

include 'auth.php';

if (isset($_POST['doctor'])) {
  $doctor = $_POST['doctor'];
  $appDate = $_POST['date'];
  $appTime = $_POST['time'];
  $db = new SQLite3('LocalDatabase.db');

  $query = "SELECT MAX(appID) as max_id FROM Appointment";
  $maxID = $db->querySingle($query) + 1;
  $nhs_number = $_SESSION['nhs_number'];

  $insertQuery = "INSERT INTO Appointment (appID, empID, NHSNumber, appDateAssigned, appTimeAssigned) VALUES ('$maxID', '$doctor', '$nhs_number', '$appDate', '$appTime')";
  $result = $db->exec($insertQuery);

  if (!$result) {
    echo "Error: " . $db->lastErrorMsg();
  } else {
    echo "Appointment successfully created!";
  }

  $db->close();
} else {
  echo "Error: Required parameters are not set.";
}
?>
