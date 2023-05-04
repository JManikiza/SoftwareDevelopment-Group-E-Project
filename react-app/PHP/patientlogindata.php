<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $email = $_POST['email'];
    $pw = $_POST['password'];

    $pdo = new \PDO("sqlite:LocalDatabase.db");
    $stmt = $pdo->prepare("SELECT * 
                          FROM patients
                          WHERE EmailAddress = :email AND Password = :pw");
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':pw', $pw);
    $stmt->execute();

    $patients = [];
    while ($patient = $stmt->fetchObject()) {
        $patients[] = $patient;
    }

    if (empty($patients)) {
        echo json_encode("no patients");
    } else {
        echo json_encode($patients);
    }
?>
