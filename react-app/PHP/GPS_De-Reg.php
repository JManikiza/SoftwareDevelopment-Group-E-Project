<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  $data = json_decode(file_get_contents("php://input"));
  $nhs_number = $data->nhs_number;

  try {
      $db = new SQLite3('LocalDatabase.db');
      $db->exec('PRAGMA foreign_keys = ON;');
      $db->beginTransaction();

      $stmt = $db->prepare('DELETE FROM Appointments WHERE NHSNumber = :nhs_number;');
      $stmt->bindValue(':nhs_number', $nhs_number, SQLITE3_TEXT);
      $result = $stmt->execute();
      $stmt->close();

      $stmt = $db->prepare('DELETE FROM Patients WHERE NHSNumber = :nhs_number;');
      $stmt->bindValue(':nhs_number', $nhs_number, SQLITE3_TEXT);
      $result = $stmt->execute();
      $stmt->close();

      $db->commit();
      echo json_encode(array('message' => 'De-registration successful'));
  } catch (Exception $e) {
      $db->rollback();
      echo json_encode(array('message' => 'Error de-registering from GP: ' . $e->getMessage()));
  }
?>
