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
    $shipping_address = trim($_POST["farm_shipping_address"]);
    $payment_method = trim($_POST["preferred_payment_method"]);

    if (empty($shipping_address) || empty($payment_method)) {
        echo "<script>alert('All fields are required'); window.history.back();</script>";
        exit();
    }

    $sql = "INSERT INTO customers (farm_shipping_address, preferred_payment_method) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $shipping_address, $payment_method);

    if (!$stmt->execute()) {
        echo "<script>alert('Error saving details'); window.history.back();</script>";
    }
    $stmt->close();
}

$conn->close();
?>