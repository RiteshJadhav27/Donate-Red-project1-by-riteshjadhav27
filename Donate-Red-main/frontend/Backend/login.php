<?php
session_start(); // Start session at the beginning

include('database.php');  // Include the database connection

// Automatic session timeout (30 minutes)
$timeout = 1800;  // 1800 seconds = 30 minutes

if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > $timeout)) {
    session_unset();
    session_destroy();
    header("Location: ../html/login.html"); // Redirect to login page after timeout
    exit;
}
$_SESSION['LAST_ACTIVITY'] = time(); // Update last activity time

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Prepare SQL query to get user data
    $sql = "SELECT * FROM users WHERE email = ?";
    
    // Prepare statement
    $stmt = $conn->prepare($sql);
    
    // Bind parameter
    $stmt->bind_param("s", $email);
    
    // Execute the query
    $stmt->execute();
    
    // Get the result
    $result = $stmt->get_result();
    
    // Check if user exists
    if ($result->num_rows > 0) {
        // Fetch the user data
        $user = $result->fetch_assoc();
        
        // Verify the password
        if (password_verify($password, $user['password'])) {
            // Password is correct, set session variables
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['first_name'] . ' ' . $user['last_name'];
            $_SESSION['user_email'] = $user['email'];

            // Redirect to Home page after successful login
            header('Location: ../html/home.html');
            exit;
        } else {
            // Password is incorrect
            echo "Invalid password.";
            header('Location: ../html/error.html');
            exit;
        }
    } else {
        // No user found with the given email
        echo "No user found with this email.";
        exit;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
