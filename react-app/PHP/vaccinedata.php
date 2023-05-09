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
        $vaccine_data = [];
        foreach ($vaccines as $vaccine) {
            $vaccine_data[] = [
                'DoseNo' => $vaccine->DoseNo,
                'VaccinationDate' => $vaccine->VaccinationDate,
                'VaccineManufacturer' => $vaccine->VaccineManufacturer,
                'DiseaseTargeted' => $vaccine->DiseaseTargeted,
                'VaccineType' => $vaccine->VaccineType,
                'Product' => $vaccine->Product,
                'VaccineBatchNumber' => $vaccine->VaccineBatchNumber,
                'CountryOfVaccination' => $vaccine->CountryOfVaccination,
                'Authority' => $vaccine->Authority,
                'Site' => $vaccine->Site,
                'DoseSeries' => $vaccine->TotalSeriesOfDoses,
                'DisplayName' => $vaccine->DisplayName,
                'SnomedCode' => $vaccine->SnomedCode,
                'DateEntered' => $vaccine->DateEntered,
                'ProcedureCode' => $vaccine->ProcedureCode,
                'Booster' => $vaccine->Booster
            ];
        }
        echo json_encode($vaccine_data);
    }
?>
