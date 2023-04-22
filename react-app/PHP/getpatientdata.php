<?php
	header('Access-Control-Allow-Origin: *');

	$nhsNo = $_POST['nhsNo'];
	$pdo = new \PDO("sqlite:vaccines.db");
	$st = $pdo->query("SELECT * from patients where NHSNumber='".$nhsNo."'" );
	$st->execute();
	$patients = [];
	while ($patient = $st->fetchObject()) {
	$patients[]=$patient;
	}
	if(empty($patients)){
	echo json_encode("no patients");
	}
	else
	{
	echo json_encode($patients);
	}
?>