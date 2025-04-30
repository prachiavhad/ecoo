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
    $farm_size = trim($_POST["farm_size"]);
    $crop_type = trim($_POST["crop_type"]);
    $location = trim($_POST["location"]);

    if (empty($farm_size) || empty($crop_type) || empty($location)) {
        echo "<script>alert('All fields are required'); window.history.back();</script>";
        exit();
    }

    $sql = "INSERT INTO farms (farm_size, crop_type, location) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $farm_size, $crop_type, $location);

    if (!$stmt->execute()) {
        echo "<script>alert('Error saving details'); window.history.back();</script>";
    }

    $stmt->close();
}

$conn->close();
?>