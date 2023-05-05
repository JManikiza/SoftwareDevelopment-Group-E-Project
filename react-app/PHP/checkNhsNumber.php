<?php
	/**
 * Author(s) of this code:
 *
 * Wallyson Alves Da Silva
 */
    
    header('Access-Control-Allow-Origin: *');
    //retriving data from react js passed throught the POST method
    $nhsNo = $_POST['nhsNo'];

    
	$pdo = new \PDO("sqlite:LocalDataBase.db");

    $st = $pdo->prepare("SELECT * FROM patients WHERE NHSNumber = ?");
    $st->execute([$nhsNo]);
    $patient = $st->fetchObject();
    if ($patient) {
        echo json_encode("This NHS number is already registered");
    } else {
        echo json_encode("Nhs number not found, Save and Continue");
    }
