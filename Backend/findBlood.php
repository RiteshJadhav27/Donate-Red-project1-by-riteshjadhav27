<?php
include ('database.php'); // Include database connection

header('Content-Type: application/json'); // Ensure JSON response
ob_clean(); // Clear any unwanted output

$blood_type = $_POST['bloodtype'];
$state = $_POST['state'];
$city = $_POST['city'];

// Fetch donors matching the criteria
$sql = "SELECT * FROM donors WHERE blood_type = '$blood_type' AND state = '$state' AND city = '$city' AND role = 'donor'";
$result = $conn->query($sql);

$donors = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $donors[] = $row;
    }
}

echo json_encode($donors); // Send clean JSON response
?>
