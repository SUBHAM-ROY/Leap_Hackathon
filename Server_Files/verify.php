<?php
header("Access-Control-Allow-Origin: *");
$pin = $_POST['pinno'];

$s=0;
$cid = NULL;
$file = fopen("log.csv", "r");
while($data = fgetcsv($file))
{
	if($pin == $data[0])
		{$s=1; $cid=$data[1];}
}

if($s==1)
	echo $cid;
else
	echo "no";

fclose($file);

?>