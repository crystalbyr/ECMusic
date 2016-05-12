<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "ECMusicDB";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$sql0 = "DELETE FROM frequency";
$conn->query($sql0);



$freq = array();
$freq[0] = $_GET["f0"];

$freq[1] = $_GET["f1"];

$freq[2] = $_GET["f2"];

$freq[3] = $_GET["f3"];

$freq[4] = $_GET["f4"];

$freq[5] = $_GET["f5"];

$sql1 = "INSERT INTO frequency (f0, f1, f2, f3, f4, f5)
VALUES ( $freq[0], $freq[1], $freq[2], $freq[3], $freq[4],  $freq[5])";

$conn->query($sql1);

$conn->close();
?>