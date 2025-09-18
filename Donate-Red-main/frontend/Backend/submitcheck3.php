<?php
include 'database.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email']; // Fetch from session or form
    $diabetes = isset($_POST['Diabetes']) ? 1 : 0;
    $cancer = isset($_POST['Cancer']) ? 1 : 0;
    $tuberculosis = isset($_POST['Tuberculosis']) ? 1 : 0;
    $asthma = isset($_POST['asthma']) ? 1 : 0;
    $liver = isset($_POST['liver']) ? 1 : 0;
    $kidney = isset($_POST['kidney']) ? 1 : 0;
    $clot = isset($_POST['clot']) ? 1 : 0;
    $heart = isset($_POST['Heart']) ? 1 : 0;
    $allergy = isset($_POST['Allergy']) ? 1 : 0;

    // Insert into medical_info table
    $query = "INSERT INTO medical_info 
    (donor_email, diabetes, cancer, tuberculosis, bronchial_asthma, liver_disease, kidney_disease, blood_clotting_problem, heart_disease, allergic_disorder) 
    VALUES ('$email', '$diabetes', '$cancer', '$tuberculosis', '$asthma', '$liver', '$kidney', '$clot', '$heart', '$allergy')";

    if (mysqli_query($conn, $query)) {
        header("Location: ../html/details.html"); // Redirect to confirmation page
        exit();
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
?>
