<?php
$sql_db = "xiuzsource";             //DB Name
$sql_host = "localhost";     //DB Host
$sql_user = "root";              //DB User
$sql_pass = "";                  //DB Password

$db = mysql_connect($sql_host, $sql_user, $sql_pass) OR die ('Cant connect to the database');
mysql_select_db($sql_db, $db);
?>