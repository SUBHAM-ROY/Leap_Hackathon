<?php
header("Access-Control-Allow-Origin: *");

$pin = $_GET["pinno"];
$cid = $_GET["chatid"];

$s=0;

$file = fopen("log.csv", "r");
while($data = fgetcsv($file))
{
	if($cid == $data[1])
		{$s=1; header("HTTP/1.0 204 No Content"); echo "Nopety"; exit; break;}
}
fclose($file);

echo "Here";

$file2 = fopen("log.csv", "a");
if($s == 0)
fputcsv($file2, array($pin,$cid));

fclose($file2);
echo $pin." Hello ".$cid;
?>