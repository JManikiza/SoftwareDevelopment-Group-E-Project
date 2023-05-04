<?php
	header('Access-Control-Allow-Origin: *');

	$empID = $_POST['empID'];
	$pdo = new \PDO("sqlite:LocalDatabase.db");
	$st = $pdo->query("SELECT a.*, p.Forename , p.*, e.*  
                    FROM Appointment a
                     JOIN patients p ON a.NHSNumber = p.NHSNumber
                     JOIN Employee e ON a.empID = e.empID
                    WHERE a.empID = $empID"); 
	$st->execute();
	$AppointmentsList = [];
	while ($Appointment = $st->fetchObject()) {
	$AppointmentsList[]=$Appointment;
	}
	if(empty($AppointmentsList)){
	echo json_encode("there are no appointment has been made");
	}
	else
	{
	echo json_encode($AppointmentsList);
	}
?>