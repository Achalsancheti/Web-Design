<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$connect = mysqli_connect("localhost", "root", "system", "neuIS");

$email = $_POST['$email'];
$file = $_POST['$file'];
$name = $_POST['$name'];
mysqli_query($connect,"INSERT INTO admission(name,email,filepath) VALUES ('$name','$email','$file')");

$conn->close();
?>