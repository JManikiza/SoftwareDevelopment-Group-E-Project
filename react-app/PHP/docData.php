<?php
	header('Access-Control-Allow-Origin: *');

	$empID = $_POST['empID'];
	$pdo = new \PDO("sqlite:LocalDatabase.db");
		$st = $pdo->prepare("SELECT  e.empFName, e.empLName,e.empID
			FROM Employee e
			WHERE e.empID = $empID");
	
		$st->execute();
	$empData = [];
	while ($emp = $st->fetchObject()) {
	$empData[]=$emp;
	}
	if(empty($empData)){
		echo json_encode("employee not found");
	}
	else
	{
	echo json_encode($empData);
	}
?>