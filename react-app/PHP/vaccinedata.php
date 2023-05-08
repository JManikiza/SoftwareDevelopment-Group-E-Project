<?php
    header("Access-Control-Allow-Origin: *");
    
    //Retrieve user form data using POST method
    $nhs = $_POST['nhs'];
  
  error_log($nhs);

    $pdo = new \PDO("sqlite:vaccines.db");
    $stmt = $pdo->prepare("SELECT * 
                          FROM vaccines
                          WHERE NHSNumber = :nhs");
    $stmt->bindParam(':nhs', $nhs);
    
    $stmt->execute();

    $vaccines = [];
    while ($vaccine = $stmt->fetchObject()) {
        $vaccines[] = $vaccine;
    }


    if (empty($vaccines)) {
        echo json_encode("no vaccines");
    } else {
   
        // Return patient details and session token as JSON response
        $vaccine_data = [
            'DoseNo' => $vaccines[0]->DoseNo,
            'VaccinationDate' => $vaccines[0]->VaccinationDate,
            'VaccineManufacturer' => $vaccines[0]->VaccineManufacturer,
            'DiseaseTargeted' => $vaccines[0]->DiseaseTargeted,
            'VaccineType' => $vaccines[0]->VaccineType,
            'Product' => $vaccines[0]->Product,
            'VaccineBatchNumber' => $vaccines[0]->VaccineBatchNumber,
            'CountryOfVaccination' => $vaccines[0]->CountryOfVaccination,
            'Authority' => $vaccines[0]->Authority,
            'Site' => $vaccines[0]->Site,
        

        ];
        echo json_encode($vaccine_data);
    }
?>
