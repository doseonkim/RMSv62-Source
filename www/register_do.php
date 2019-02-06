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
<?php

session_start();

$name = $_POST['name'];
$pass = sha1($_POST['pass']);
$email = $_POST['email'];
$dob = $_POST['dob'];
$vpass = sha1($_POST['vpass']);
include('/config.php');
$sel = 'SELECT * FROM accounts WHERE name="'.$_POST['name'].'"';
if($name == ""){
echo '<center><h1>No username filled in.</center></h1>';
exit();
}elseif(mysql_num_rows(mysql_query($sel)) >= 1 ){
echo '
<center><h1>This username already exists!</h1></center>';
exit();
}elseif($pass == ""){
echo '<center><h1>No password filled in.</center></h1>';
exit();
}elseif($vpass != $pass){
echo '<center><h1>The passwords did not match.</center></h1>';
exit();
}elseif(strtoupper($_POST['code']) != $_SESSION['code']) {
echo '<center><h1>You have entered the wrong code.</center></h1>';
exit();
}else{

$d = 'INSERT INTO accounts (name, password, email, birthday) VALUES ("'.$name.'", "'.$pass.'", "'.$email.'", "'.$dob.'")';
mysql_query($d) OR die (mysql_error());
echo '<center><h1>Your account has been created, you can now login!</center></h1>';
}
?>  

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