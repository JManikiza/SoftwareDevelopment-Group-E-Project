<?php
//control access which sites or localhost are able to access the php and retireve data

header('Access-Control-Allow-Origin: *');
//retireve variables passed from ajax in react

$empID = $_POST['empID'];
$pdo = new \PDO("sqlite:LocalDatabase.db");


//call database and retireve data section based on the query requrement and use param bind to secure to ensure data passed can not be changed during the contacting the sql to reduces the risk of injection attack. 
$st = $pdo->prepare("SELECT e.empFName, e.empLName, e.empID
                      FROM Employee e
                      WHERE e.empID = :empID");
$st->bindParam(':empID', $empID, PDO::PARAM_INT);
$st->execute();
//save retireve data from database to a list
$employeeData = [];
while ($employee = $st->fetchObject()) {
    $employeeData[] = $employee;
}
//if no data rretireve print no appointment message. otherwise pass the json data back to the react file to use. 

if(empty($employeeData)){
    echo json_encode("no employee found");
}
else
{
    echo json_encode($employeeData);
}
?>