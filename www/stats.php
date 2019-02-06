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
<center>
<?php
session_start(); 
include("config.php");
        $fp = @fsockopen($serverip, $loginport, $errno, $errstr, 1);
      if (!$fp) { 
           $status = "<font color='green'>Online</font>";
        } else { 
           $status = "<font color='red'>Offline</font>";
        } 

        @fclose($fp); 
$result = mysql_query("SELECT * FROM accounts");// Account section
$num_rows = mysql_num_rows($result); 
$result2 = mysql_query("SELECT * FROM characters");// Character section
$num_rowsc = mysql_num_rows($result2); 
$result15 = mysql_query("SELECT * FROM guilds");// Character section
$num_rowsg = mysql_num_rows($result15); 
$result4 = mysql_query("SELECT * FROM accounts where banned = 1");// Account section
$num_rowsb = mysql_num_rows($result4); 
$result5 = mysql_query("SELECT * FROM accounts where loggedin = 2");// Account section
$num_rowsl = mysql_num_rows($result5);


echo "<br><br>
<center><p><h2>Check Out Teh Server!</h2></p></center>
Server: <b>".$status."</b><br />
<b>".$num_rowsl."</b> Users Playing<br><br>
<b>".$num_rows."</b> Accounts<br> 
<b>".$num_rowsc."</b> Characters<br> 
<b>".$num_rowsg."</b> Guilds<br><br> 
<b>".$num_rowsb."</b> Banned Hackers<br> 

";
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