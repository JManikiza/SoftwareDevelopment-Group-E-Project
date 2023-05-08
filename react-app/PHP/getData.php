<?php
    header("Access-Control-Allow-Origin: *");
    
    //Retrieve user form data using POST method
    $nhs_number = $_POST['nhs_number'];


    $pdo = new \PDO("sqlite:LocalDatabase.db");
    $stmt = $pdo->prepare("SELECT * 
                          FROM patients
                          WHERE NHSNumber = :nhs_number");
    $stmt->bindParam(':nhs_number', $nhs_number);
    
    $stmt->execute();

    $patients = [];
    while ($patient = $stmt->fetchObject()) {
        $patients[] = $patient;
    }

    if (empty($patients)) {
        echo json_encode("no patients");
    } else {
$patient_data = [
    'Forename' => strtoupper($patients[0]->Forename),
    'Surname'  => strtoupper($patients[0]->Surname),
    'NHSNumber' => $patients[0]->NHSNumber,
    'EmailAddress' => strtoupper($patients[0]->EmailAddress),
    'PersonDOB' => date('d/m/Y', strtotime($patients[0]->PersonDOB)),
    'GenderCode' => ($patients[0]->GenderCode === '1' ? 'MALE' : 'FEMALE'),
    'Postcode' => strtoupper($patients[0]->Postcode),
    'PhoneNumber' => '+44' . $patients[0]->PhoneNumber,
            'MedicalRecord' => $patients[0]->MedicalRecord
        ];
        echo json_encode($patient_data);
    }

?>
