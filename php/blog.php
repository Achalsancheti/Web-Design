<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$connect = mysqli_connect("localhost", "root", "root", "neuIS");

$name = $_POST['$name'];
$message = $_POST['$message'];
mysqli_query($connect,"INSERT INTO blog(name,message) VALUES ('$name','$message')");

$conn->close();
?>