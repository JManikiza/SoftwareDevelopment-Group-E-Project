<?php
	header('Access-Control-Allow-Origin: *');

	$nhsNo = $_POST['nhsNo'];
$appointmentNum=$_POST['AN'];
	$medical = $_POST['medicalrecord'];
$completed=1;
	$pdo = new \PDO("sqlite:LocalDatabase.db");
	$sql = "UPDATE patients SET MedicalRecord=? WHERE NHSNumber=?";
	$pdo->prepare($sql)->execute([$medical, $nhsNo]);
	$sql = "UPDATE Appointment SET completed=? WHERE NHSNumber=? AND appID=?";
$pdo->prepare($sql)->execute([$completed, $nhsNo,$appointmentNum]);
	
?>