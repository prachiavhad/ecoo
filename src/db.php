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
    $name = trim($_POST["name"]);
    $image_url = trim($_POST["image_url"]);
    $price = trim($_POST["price"]);
    $rating = trim($_POST["rating"]);
    $weight = trim($_POST["weight"]);
    $description = trim($_POST["description"]);

    if (empty($name) || empty($image_url) || empty($price) || empty($rating) || empty($weight) || empty($description)) {
        echo "<script>alert('All fields are required'); window.history.back();</script>";
        exit();
    }

    $sql = "INSERT INTO products (name, image_url, price, rating, weight, description) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssddds", $name, $image_url, $price, $rating, $weight, $description);

    if (!$stmt->execute()) {
        echo "<script>alert('Error saving details'); window.history.back();</script>";
    }

    $stmt->close();
}

$conn->close();
?>