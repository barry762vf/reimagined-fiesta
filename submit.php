<?php
include 'db.php';

// Insert new message
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $msg = $conn->real_escape_string($_POST['message']);

    $sql = "INSERT INTO messages (name, message) VALUES ('$name', '$msg')";
    $conn->query($sql);
}

// Fetch all messages
$result = $conn->query("SELECT * FROM messages ORDER BY created_at DESC");

$messages = [];
while ($row = $result->fetch_assoc()) {
    $messages[] = $row;
}

// Send JSON for AJAX use
header('Content-Type: application/json');
echo json_encode($messages);
?>
