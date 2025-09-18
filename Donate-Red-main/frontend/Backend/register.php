<?php
include('database.php'); // Include your database connection file

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $first_name = $_POST['firstname'];
    $last_name = $_POST['lastname'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $phone = $_POST['phone'];
    $state = $_POST['state'];
    $city = $_POST['city'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash password
    $blood_type = $_POST['bloodGrp'];

    // Check if the email already exists
    $check_email_query = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($check_email_query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Email already exists
        echo "Error: This email is already registered.";
    } else {
        // Prepare SQL query
        $sql = "INSERT INTO users (first_name, last_name, email, age, phone, state, city, password, blood_type)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        // Prepare statement
        $stmt = $conn->prepare($sql);

        // Bind parameters
        $stmt->bind_param("sssssssss", $first_name, $last_name, $email, $age, $phone, $state, $city, $password, $blood_type);

        // Execute the query
        if ($stmt->execute()) {
            echo "Registration successful!";
            // Redirect to another page (e.g., login page)
            header('Location: ../html/login.html');
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement and connection
        $stmt->close();
    }

    // Close the database connection
    $conn->close();
}
?>
