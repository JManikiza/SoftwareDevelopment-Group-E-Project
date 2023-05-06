

<?php
header('Access-Control-Allow-Origin: *');

$empID = $_POST['empID'];
$pdo = new \PDO("sqlite:LocalDatabase.db");
$st = $pdo->prepare("SELECT a.*, p.Forename, p.*, e.*
    FROM Appointment a
    JOIN patients p ON a.NHSNumber = p.NHSNumber
    JOIN Employee e ON a.empID = e.empID
    WHERE a.empID = :empID AND a.completed = 0");
$st->bindParam(':empID', $empID, PDO::PARAM_INT);
$st->execute();
$AppointmentsList = [];
while ($appointment = $st->fetchObject()) {
    $AppointmentsList[]=$appointment;
}
if(empty($AppointmentsList)){
    echo json_encode("no appointment has been made");
}
else
{
    echo json_encode($AppointmentsList);
}
?>