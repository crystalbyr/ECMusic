<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "ECMusicDB";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$sql = "SELECT f0, f1, f2, f3, f4, f5 FROM Frequency";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
echo $row["f0"].",".$row["f1"].",".$row["f2"].",".$row["f3"].",".$row["f4"].",".$row["f5"];

$conn->close();
?>