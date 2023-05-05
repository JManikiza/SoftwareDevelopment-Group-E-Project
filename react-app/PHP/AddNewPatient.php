<?php
	header('Access-Control-Allow-Origin: *');
    //retriving data from react js passed throught the POST method
    $nhsNo = $_POST['nhsNo'];
	$FName = $_POST['ForeName'];
    $SName = $_POST['SurName'];
    $Date = $_POST['Date'];
    $Gender = $_POST['gender'];
    $Email = $_POST['email'];
    $PhoneNumber = $_POST['phoneNumber'];
    $PostCode = $_POST['postCode'];
    $pw = $_POST['password'];
    $pwhash = password_hash($pw, PASSWORD_DEFAULT); //encrypts the password 
    
	$pdo = new \PDO("sqlite:LocalDataBase.db");

    $st = $pdo->prepare("SELECT * FROM patients WHERE NHSNumber = ?");
    $st->execute([$nhsNo]);
    $patient = $st->fetchObject();
    if ($patient) {
    // Patient already exists in the database, do not insert again
    echo json_encode($patient);
    } else {
    // Patient does not exist in the database, insert new patient
    $insertDb = $pdo->prepare(
        "INSERT INTO patients 
        VALUES (?, 'gpID', ?, ?, ?, ?, ?, ?, ?, ?)"
    );
    $insertDb->execute([$nhsNo, $FName, $SName, $Email, $Date, $Gender, $PostCode, $pwhash, $PhoneNumber]);
    echo json_encode("Patient added successfully");
    }   

?>