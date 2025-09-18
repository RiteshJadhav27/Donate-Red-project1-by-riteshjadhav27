<?php
session_start();
header('Content-Type: application/json');

if (isset($_SESSION['user_name'])) {  // Check user_name instead of user
    echo json_encode(["stat" => true, "user" => ["name" => $_SESSION['user_name']]]);
} else {
    echo json_encode(["stat" => false]);
}
?>
