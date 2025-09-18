<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blood_donation";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["stat" => false, "error" => "Database connection failed: " . $conn->connect_error]));
}

// Remove any "Connected successfully" echo statements!
?>
