<?php
header('Access-Control-Allow-Origin: *');

$empID = $_POST['empID'];
$pdo = new \PDO("sqlite:LocalDatabase.db");
$st = $pdo->prepare("SELECT e.empFName, e.empLName, e.empID
                      FROM Employee e
                      WHERE e.empID = :empID");
$st->bindParam(':empID', $empID, PDO::PARAM_INT);
$st->execute();
$employeeData = [];
while ($employee = $st->fetchObject()) {
    $employeeData[] = $employee;
}
if(empty($employeeData)){
    echo json_encode("no employee found");
}
else
{
    echo json_encode($employeeData);
}
?>