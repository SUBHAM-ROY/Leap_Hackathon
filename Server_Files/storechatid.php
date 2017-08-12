<?php
header("Access-Control-Allow-Origin: *");

$pin = $_GET["brno"];
$cid = $_GET["chatid"];


$file2 = fopen("log2.csv", "a");
fputcsv($file2, array($pin,$cid));
fclose($file2);

?>