<?php
//control access which sites or localhost are able to access the php and retireve data
header('Access-Control-Allow-Origin: *');
//retireve variables passed from ajax in react
$nhsNo = $_POST['nhsNo'];
$appointmentNum = $_POST['AN'];
$medical = $_POST['medicalrecord'];
$completed = 1;
//call database and retireve data section based on the query requrement and use param bind to secure to ensure data passed can not be changed during the contacting the sql to reduces the risk of injection attack. 
$pdo = new \PDO("sqlite:LocalDatabase.db");
$sql = "UPDATE patients SET MedicalRecord = :medical WHERE NHSNumber = :nhsNo";
$statement = $pdo->prepare($sql);
$statement->bindParam(':medical', $medical);
$statement->bindParam(':nhsNo', $nhsNo);
$statement->execute();

$sql = "UPDATE Appointment SET completed = :completed WHERE NHSNumber = :nhsNo AND appID = :appointmentNum";
$statement = $pdo->prepare($sql);
$statement->bindParam(':completed', $completed);
$statement->bindParam(':nhsNo', $nhsNo);
$statement->bindParam(':appointmentNum', $appointmentNum);
$statement->execute();
?>