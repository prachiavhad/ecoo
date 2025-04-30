<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ecofarm";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("<script>alert('Connection failed: " . $conn->connect_error . "');</script>");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);

    if (!empty($email) && !empty($password)) {
        $sql = "SELECT id, password FROM users WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($user_id, $hashed_password);
            $stmt->fetch();

            if (password_verify($password, $hashed_password)) {
                $_SESSION["user_id"] = $user_id;
                $_SESSION["email"] = $email;
                echo "<script>alert('Login successful'); window.location.href = 'index.html';</script>";
                exit();
            }
        }
        echo "<script>alert('Invalid credentials');</script>";

        $stmt->close();
    } else {
        echo "<script>alert('Please enter both email and password');</script>";
    }
}

$conn->close();
?>