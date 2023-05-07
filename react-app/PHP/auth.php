<?php
session_start();
// authenticate the user and get their NHS number
$_SESSION['nhs_number'] = $_GET['nhsNo']; // use the nhsNo parameter from the GET request
?>
