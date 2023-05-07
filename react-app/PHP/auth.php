<?php
session_start();

$_SESSION['nhsNo'];

if (isset($_GET['nhs_number'])) {
    $nhsNo = $_GET['nhs_number'];
    $_SESSION['nhsNo'] = $nhsNo;
    error_log($nhsNo . ' is the NHS number', 0);

    // rest of your code goes here
} else {
    // handle error when nhs_number parameter is not present
    // for example, redirect to an error page or show an error message
}
?>