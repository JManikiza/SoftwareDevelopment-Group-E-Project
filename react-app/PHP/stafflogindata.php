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
        // Generate a session token and store it in a session variable
        session_start();
        $session_token = bin2hex(random_bytes(16));
        $_SESSION['session_token'] = $session_token;

        // Return patient details and session token as JSON response
        $user_data = [
            'empID' => $users[0]->empID,
            'employeeType' => $users[0]->employeeType,
            'empFName' => $users[0]->empFName,
            'empLName' => $users[0]->empLName,
            'session_token' => $session_token
        ];
        echo json_encode($user_data);
    }
?>


