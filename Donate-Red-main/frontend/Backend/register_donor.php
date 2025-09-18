<?php
include 'config/db_connect.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $donartype = $_POST["donartype"];
    $medicine = $_POST["medicine"];
    $lastdonation = $_POST["lastdonation"];
    $immunizations = $_POST["immunizations"];
    $Malaria = $_POST["Malaria"];
    $recieveblood = $_POST["recieveblood"];
    $jaundice = $_POST["jaundice"];
    $Rabies = $_POST["Rabies"];

    // SQL Query to insert data
    $sql = "INSERT INTO donors (donartype, medicine, lastdonation, immunizations, Malaria, recieveblood, jaundice, Rabies) 
            VALUES ('$donartype', '$medicine', '$lastdonation', '$immunizations', '$Malaria', '$recieveblood', '$jaundice', '$Rabies')";

    if ($conn->query($sql) === TRUE) {
        echo "New donor record created successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>
