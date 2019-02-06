<?php

/*??|???????|????|????????|???|??*\
|###########################################|
|#_____________________..ButsagsCMS.._____________________#|
|#______.Copyright ?000-2009 Chris Ingis. All Rights Reserved._____#|
|###########################################|
\*____|_____|________|___|___||___|___|________|______|____*/



if(basename($_SERVER["PHP_SELF"]) == "database.php"){
	die("403 - Access Forbidden");
}

/* MySQL Connection Information */
// Where is MySQL Hosted? If you aren`t sure, just leave it as "localhost"
$host = "localhost";
// Database Username - Usually "root"
$user = "root";
// Database Password - Usually "". If you don`t have a password, or are not sure, leave it blank.
$pass = "";
// Database Name - Usually "xiuzsource"
$database = "xiuzsource";
// What is the server`s Wan IP
$serverip = "dk2.no-ip.biz";
// What is your server`s log in port - Don`t change if you aren`t sure.	
$loginport = "8484";
// What is your server`s world port - Don`t change if you aren`t sure.	
$worldport = "7575";

/* Don`t touch. */
$conn = mysql_connect($host,$user,$pass) or die(header( 'Location: http://ingis.com/butsagsms/broken.php' ));
$db = mysql_select_db($database, $conn) or die("Invalid Database Settings");	

?>