<?php
header("Access-Control-Allow-Origin: *");
$pin = $_GET['brno'];


$file = fopen("log2.csv", "r");
while($data = fgetcsv($file))
{
	$d1 = (string)$data[0];
	$d2 = (string)$pin;
	if($d1 == $d2)
		{echo $data[1]; break;}
}

fclose($file);

?>