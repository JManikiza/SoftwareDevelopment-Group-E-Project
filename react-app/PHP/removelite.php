<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

// // Retrieve the POST data sent by the client
// $data = json_decode(file_get_contents('php://input'), true);

// // Extract the ID from the POST data
// $remove = $data['remove'];

// // SQLite database file path
// $database_file = 'LocalDatabase.db';

// // PDO connection string
// $dsn = 'sqlite:' . $database_file;

// // PDO connection options
// $options = array(
//     PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
// );

// // Connect to the database
// try {
//     $pdo = new PDO($dsn, null, null, $options);

//     // Remove row based on Appid
//     $stmt = $pdo->prepare("DELETE FROM Appointments WHERE Appid = ?");
//     $stmt->execute([1]);

//     echo "Row removed successfully!<br>";

// } catch(PDOException $e) {
//     echo "Connection failed: " . $e->getMessage();
// }

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

// Retrieve the POST data sent by the client
$data = json_decode(file_get_contents('php://input'), true);

// Extract the ID from the POST data
$remove = $data['remove'];

// SQLite database file path
$database_file = 'C:\Users\carme\OneDrive\Documents\GitHub\SoftwareDevelopment-Group-E-Project\react-app\Database\LocalDatabase.db';

// PDO connection string
$dsn = 'sqlite:' . $database_file;

// PDO connection options
$options = array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
);

// Connect to the database
try {
    $pdo = new PDO($dsn, null, null, $options);

    // Check if the appID exists
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM Appointment WHERE appID = ?");
    $stmt->execute([$remove]);
    $count = $stmt->fetchColumn();

    if ($count > 0) {
        // Remove row based on appID
        $stmt = $pdo->prepare("DELETE FROM Appointment WHERE appID = ?");
        $stmt->execute([$remove]);

        // Return a JSON response indicating success
        $response = array('success' => true);
        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        // Return a JSON response indicating failure
        $response = array('success' => false);
        header('Content-Type: application/json');
        echo json_encode($response);
    }
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
