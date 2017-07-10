<?php
echo "hello1";
$file = fopen("log.csv", "r");
while($data = fgetcsv($file))
{
	var_dump($data);
}
echo "Hello2";
?>