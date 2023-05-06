

<?php
//control access which sites or localhost are able to access the php and retireve data

header('Access-Control-Allow-Origin: *');
//variables for values passed from react file.
$empID = $_POST['empID'];
$pdo = new \PDO("sqlite:LocalDatabase.db");
//call database and retireve data section based on the query requrement and use param bind to secure to ensure data passed can not be changed during the contacting the sql to reduces the risk of injection attack. 
$st = $pdo->prepare("SELECT a.*, p.Forename, p.*, e.*
    FROM Appointment a
    JOIN patients p ON a.NHSNumber = p.NHSNumber
    JOIN Employee e ON a.empID = e.empID
    WHERE a.empID = :empID AND a.completed = 0");
$st->bindParam(':empID', $empID, PDO::PARAM_INT);
$st->execute();
//save retireve data from database to a list
$AppointmentsList = [];
while ($appointment = $st->fetchObject()) {
    $AppointmentsList[]=$appointment;
}
//if no data rretireve print no appointment message. otherwise pass the json data back to the react file to use. 
if(empty($AppointmentsList)){
    echo json_encode("no appointment has been made");
}
else
{
    echo json_encode($AppointmentsList);
}
?>