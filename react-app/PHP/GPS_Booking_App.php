/**
* Author(s) of this code: 
*
* Joven Manikiza
*/
<?php
header('Access-Control-Allow-Origin: http://localhost:3000');



if (isset($_POST['doctor'])) {
  $doctor = $_POST['doctor'];
  $appDate = $_POST['date'];
  $appTime = $_POST['time'];
  $nhs_number = $_POST['nhs_number'];
  
  $db = new SQLite3('LocalDatabase.db');

  $query = "SELECT MAX(appID) as max_id FROM Appointment";
  $maxID = $db->querySingle($query) + 1;

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
