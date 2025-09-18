<?php
include 'database.php'; // Include database connection

header("Content-Type: application/json"); // Ensure JSON response
$response = ["stat" => false]; // Default response

// ✅ Clear any previous output
ob_clean();
ob_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $donartype = $_POST['donartype'];
    $medicine = $_POST['medicine'];
    $lastdonation = $_POST['lastdonation'];
    $immunizations = $_POST['immunizations'];
    $malaria = $_POST['Malaria'];
    $recieveblood = $_POST['recieveblood'];
    $jaundice = $_POST['jaundice'];
    $rabies = $_POST['Rabies'];

    // ✅ Insert into donor_eligibility table
    $query = "INSERT INTO donor_eligibility 
    (donor_email, first_time_donor, taking_medicine, last_donated, immunizations, malaria_treatment, received_blood, close_contact_jaundice, rabies_treatment) 
    VALUES ('$email', '$donartype', '$medicine', '$lastdonation', '$immunizations', '$malaria', '$recieveblood', '$jaundice', '$rabies')";

    if (mysqli_query($conn, $query)) {
        $response["stat"] = true; // ✅ Success
    } else {
        $response["error"] = mysqli_error($conn); // ✅ Capture MySQL error
    }
}

// ✅ Ensure no extra output before JSON
ob_end_clean();
echo json_encode($response);
?>
