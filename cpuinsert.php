<?php

//receive information sent by post method
$CName = $_POST[CName];
$YearReleased = $_POST[YearReleased];
$Cores = $_POST[Cores];
$ClockSpeed = $_POST[ClockSpeed];
$Cache = $_POST[Cache];
$SocketType = $_POST[SocketType];

//connect to MySQL
$servername = "cwolf.cs.sonoma.edu";
$username = "rbrownli";
$password = "003603527";
$sql = mysql_connect($servername,$username,$password);
mysql_connect($servername,$username,$password);

//select database
mysql_select_db("rbrownlie");

//insert values
$insert_query = "INSERT INTO CPUs(CName, YearReleased, Cores, ClockSpeed, Cache, SocketType) VALUES ('$CName', '$YearReleased', '$Cores', '$ClockSpeed', '$Cache', '$SocketType')";
mysql_query($insert_query);

//close MySQL
mysql_close($sql);

?>
