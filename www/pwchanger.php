<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>

<meta name="Description" content="Information architecture, Web Design, Web Standards." />
<meta name="Keywords" content="your, keywords" />
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta name="Distribution" content="Global" />
<meta name="Author" content="Erwin Aligam - ealigam@gmail.com" />
<meta name="Robots" content="index,follow" />

<link rel="stylesheet" href="images/HigherGround.css" type="text/css" />

<title>Radiance MS</title></head>

<body>
<!-- wrap starts here -->
<div id="wrap">

	<div id="top-bg"></div>
				
	<!--header -->

		
	<div id="header-photo"></div>		
		
	<!-- navigation starts-->	
	<div  id="nav">
		<ul>
			<li><a href="index.html">Home</a></li>
			<li><a href="register.php">Register</a></li>
			<li><a href="download.php">Downloads</a></li>
			<li><a href="ranking.php">Rankings</a></li>
			<li><a href="donate.php">Donate</a></li>
			<li><a href="vindex.php">Vote</a></li>
			<li><a href="http://radiancems.forumotions.com/">Forums</a></li>
		</ul>
	<!-- navigation ends-->
	</div>
			
	<!-- content-wrap starts -->
	<div id="content-wrap">
	
		<div id="main">

<tr>
<center><p><h2>Password Changer!</h2></p>
<tr>
<td class="bodyText" width="30"><p><form action="pwchanger.php" method="post">  
Login ID: <br> <input name="login" type="text" />
<br><br> 
Password: <br> <input name="pass" type="password" />
<br><br> 
New Password: <br> <input name="newpass" type="password" />
<br><br> 
<input type="submit" value="Submit"/>
</form>
<br />
<br />
<br />

<?php
include('config.php');

$login = mysql_real_escape_string($_POST['login']);
$pass = mysql_real_escape_string($_POST['pass']);
$newpass = mysql_real_escape_string($_POST['newpass']);


$resultsalt = mysql_query("SELECT salt FROM accounts WHERE name='$login'");
if ($row = mysql_fetch_array($resultsalt)){
   do { 
         $salt = $row["salt"];
   } while ($row = mysql_fetch_array($resultsalt));  
} else {  
echo "You need to be logged off before you can do this! ";
}
$password = hash('sha512', $pass . $salt); 

$sqlquery = "SELECT * FROM accounts WHERE name = '$login' AND password = '$password'";
$result = mysql_query($sqlquery);
$number = mysql_num_rows($result); //LINE NUMBER 23 

$i = 0; 
if ($number < 1) //10 
{
echo "Please make sure the LoginID and Password are Correct!<br> ";
} 
else
{
if ($number > $i)
{ 
$passencrypted = hash('sha512', $newpass . $salt);
$sqlquery2 = "UPDATE accounts SET password = '$passencrypted' WHERE name='$login'";
mysql_query("$sqlquery2") or DIE (mysql_error()); 
echo "The password for $login was changed successfully.<br>";
}
}
?>
</center>
		</div>

		<div id="sidebar">

			<h3>More Links</h3>
			<ul class="sidemenu">
				<li><a href="guide.php">Setup Guide</a></li>
				<li><a href="vindex.php">Vote For Vote Points</a></li>
				<li><a href="unstuck.php">Already Logged in Fix</a></li>
				<li><a href="stats.php">Server Stats</a></li>
				<li><a href="events.php">Learn about the Events!</a></li>
				<li><a href="pwchanger.php">Change Your Password!</a></li>

			</ul>

			<h3>Vote For RadianceMS</h3>
			<ul class="sidemenu">
      <li><a href="http://www.gtop100.com/in.php?site=41951">Vote for Gtop100</a></li>
      <li><a href="http://www.ultimateprivateservers.com/maple-story/">Vote for UltimateTop200</a></li>
			</ul>

		<!-- sidebar ends -->
		</div>


	<!-- content-wrap ends-->	
	</div>

	<!-- footer starts -->

		<div id="footer-bottom">

			<p>
Radiance MS, Enjoy the Stay!
   		</p>

		</div>

<!-- footer ends-->
</div>
<!-- wrap ends here -->
</div>

</body>
</html>