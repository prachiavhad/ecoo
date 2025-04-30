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
    $business_name = trim($_POST["business_name"]);
    $business_license_number = trim($_POST["business_license_number"]);
    $service_area = trim($_POST["service_area"]);

    if (empty($business_name) || empty($business_license_number) || empty($service_area)) {
        echo "<script>alert('All fields are required'); window.history.back();</script>";
        exit();
    }

    $sql = "INSERT INTO distributor (business_name, business_license_number, service_area) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $business_name, $business_license_number, $service_area);

    if (!$stmt->execute()) {
        echo "<script>alert('Error saving details'); window.history.back();</script>";
    }

    $stmt->close();
}

$conn->close();
?>