<?php
    header("Access-Control-Allow-Origin: *");
    
    //Retrieve user form data using POST method
    $nhsNo = $_POST['nhsNo'];


    $pdo = new \PDO("sqlite:LocalDatabase.db");
    $stmt = $pdo->prepare("SELECT * 
                          FROM patients
                          WHERE NhsNumber = :nhsNo");
    $stmt->bindParam(':nhsNo', $nhsNo);
    
    $stmt->execute();

    $patients = [];
    while ($patient = $stmt->fetchObject()) {
        $patients[] = $patient;
    }

    if (empty($patients)) {
        echo json_encode("no patients");
    } else {
        $patient_data = [
            'Forename' => $patients[0]->Forename,
            'Surname'  => $patients[0]->Surname,
            'NHSNumber' => $patients[0]->NHSNumber,
            'EmailAddress' => $patients[0]->EmailAddress,
            'PersonDOB' => $patients[0]->PersonDOB,
            'GenderCode' => $patients[0]->GenderCode,
            'Postcode' => $patients[0]->Postcode,
            'PhoneNumber' => $patients[0]->PhoneNumber,
            'MedicalRecord' => $patients[0]->MedicalRecord
        ];
        echo json_encode($patient_data);
    }

?>
