<?php
session_start();
header('Content-Type: application/json');  // Ensure the response is JSON

include 'database.php';

if (!isset($_SESSION['user_email'])) {
    echo json_encode(["stat" => false, "error" => "User not logged in"]);
    exit;
}

$user_email = $_SESSION['user_email'];

// Fetch user details
$stmt = $conn->prepare("SELECT first_name, last_name, email, age, phone, state, city, blood_type FROM users WHERE email = ?");
$stmt->bind_param("s", $user_email);
$stmt->execute();
$user_result = $stmt->get_result();

if ($user_result->num_rows === 0) {
    echo json_encode(["stat" => false, "error" => "User not found"]);
    exit;
}

$user = $user_result->fetch_assoc();

// Fetch donor eligibility details
$stmt = $conn->prepare("SELECT first_time_donor, taking_medicine, last_donated, immunizations, malaria_treatment, received_blood, close_contact_jaundice, rabies_treatment FROM donor_eligibility WHERE donor_email = ?");
$stmt->bind_param("s", $user_email);
$stmt->execute();
$eligibility_result = $stmt->get_result();
$details1 = $eligibility_result->fetch_assoc() ?? [];

// Fetch medical details
$stmt = $conn->prepare("SELECT diabetes, cancer, tuberculosis, bronchial_asthma, liver_disease, kidney_disease, blood_clotting_problem, heart_disease, allergic_disorder FROM medical_info WHERE donor_email = ?");
$stmt->bind_param("s", $user_email);
$stmt->execute();
$medical_result = $stmt->get_result();
$details2 = $medical_result->fetch_assoc() ?? [];

// Return JSON response
echo json_encode(["stat" => true, "data" => ["user" => $user, "details1" => $details1, "details2" => $details2]]);
?>
