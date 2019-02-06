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


<?php session_start();
include('/config.php');





mysql_select_db("xiuzsource");

$self = $_SERVER['PHP_SELF'];

if(isset($_POST['logout']))
{
    $validlogin = 0;
    $usr = $_POST['user'];

    if($usr == "")
        die("<h1> You have to type something in.</h1>");

    $usr = mysql_real_escape_string($usr); // prevents SQL injection

    $result = mysql_query("SELECT name, password, loggedin FROM accounts");
    while($row = mysql_fetch_array($result))

        {
            $loggedin = $row[2];
            $loggedin = $row[1];
            $validlogin = 1;
            break;
        }


    if($validlogin == 0)
    {
        echo "<meta http-equiv='refresh' content='4;url=$self'>";
        die("<h1> This Account doesn't exist! </h1>");
    }
    else
    {
        if($loggedin > 0)
        {
            mysql_query("saveToDB(true, false);");
            mysql_query("UPDATE accounts SET loggedin = 0 WHERE name = '$usr'");
            die("<h1>$usr has been logged out.</h1>");
             
        }
        else
        { 
            echo "<meta http-equiv='refresh' content='4;url=$self'>";
            die("<h1>$usr! is already logged out.</h1>");
        }
    }     
}
else
{
    echo "<form method='post'>";
    echo "<center><p><h2>Are You Stuck!? :(</h2></p></center>
<center>Use this script to unbug yourself, when you have 'ID is already logged in'
<br><h3>Please type in your <U>ACCOUNT NAME</u>! not CHARACTER! </h3></center>
";
    echo " <center>Account Name: </td><td><input type='text' name='user' id='user'></td></tr><br>";
    echo "<br><input type='submit' name='logout' id='logout' value='LOGOUT!'><p>";
    echo "</form></center>";
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