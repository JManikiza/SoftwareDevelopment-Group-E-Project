<?php
    header("Access-Control-Allow-Origin: *");
    
    //Retrieve user form data using POST method
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
        // Generate a session token and store it in a session variable
        session_start();
        $session_token = bin2hex(random_bytes(16));
        $_SESSION['session_token'] = $session_token;

        // Return patient details and session token as JSON response
        $patient_data = [
            'patientName' => $patients[0]->Forename . ' ' . $patients[0]->Surname,
            'nhsNo' => $patients[0]->NHSNumber,
            'session_token' => $session_token
        ];
        echo json_encode($patient_data);
    }
?>
