<?php
$host = "localhost";
$user = "root";     // default in XAMPP
$pass = "";         // default empty
$dbname = "testdb";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
