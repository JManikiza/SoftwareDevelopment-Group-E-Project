<?php
    header("Access-Control-Allow-Origin: *");
    
    //Retrieve user form data using POST method
    $email = $_POST['email'];
    $pw = $_POST['password'];

    $pdo = new \PDO("sqlite:LocalDatabase.db");
    $stmt = $pdo->prepare("SELECT * 
                          FROM Employee
                          WHERE empEmail = :email AND Password = :pw");
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':pw', $pw);
    $stmt->execute();

    $users = [];
    while ($user = $stmt->fetchObject()) {
        $users[] = $user;
    }

    if (empty($users)) {
        echo json_encode("no users");
    } else {
        echo json_encode($users);
    }
?>
