<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = mysqli_connect("localhost", "root", "root", "neuIS");

$result = $conn->query("SELECT * FROM events");

$outp = "";
while($rs = $result->fetch_assoc()) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'  . $rs["id"] . '",';
    $outp .= '"day":"'   . $rs["day"]        . '",';
	$outp .= '"month":"'. $rs["month"]        . '",';
	$outp .= '"year":"'. $rs["year"]        . '",';
	$outp .= '"times":"'. $rs["times"]        . '",';
	$outp .= '"alt":"'. $rs["alt"]        . '",';
	$outp .= '"src":"'. $rs["src"]        . '",';
	$outp .= '"title":"'. $rs["title"]        . '",';
	$outp .= '"desc":"'. $rs["desc"]        . '",';
    $outp .= '"hrf":"'. $rs["hrf"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();
echo($outp);
?>