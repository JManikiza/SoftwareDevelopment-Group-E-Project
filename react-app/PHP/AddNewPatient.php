<?php
	header('Access-Control-Allow-Origin: *');
    
    $nhsNo = $_POST['nhsNo'];
	$FName = $_POST['ForeName'];
    $SName = $_POST['SurName'];
	$pdo = new \PDO("sqlite:LocalDataBase.db");
	$st = $pdo->query("SELECT * from patients where NHSNumber='".$nhsNo."'" );
	$st->execute();
	$patients = [];
	while ($patient = $st->fetchObject()) {
	$patients[]=$patient;
	}
	if(empty($patients)){
	   echo json_encode("no patients");
        $insertDb = $pdo->query(
            "INSERT INTO patients 
            VALUES ("'.$nhsNo.'",' ','','','','','','','','');");
	   $insertDb->execute();
	}
	else
	{
	   echo json_encode($patients);
	}
?>