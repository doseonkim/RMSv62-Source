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
    $_SESSION['fuckmeoryou'] = time();
?>
<div>
<center>
<p><h2>Please Vote For Our Server <33!</h2></p>

    <div id='text' style='padding: 5px; padding-left: 7px; font-size: 13px;'>
          1) Please put in your login ID and press "vote"
        </div>
    <div id='text' style='padding: 5px; padding-left: 7px; font-size: 13px;'>
          2) Please use @getpoints after you vote to get your voting points!
        </div>
    <div id='text' style='padding: 5px; padding-left: 7px; font-size: 13px;'>
          3) Either save up or use your vote points through a npc that is located in perry. You can also check how much you have through @votepoints.
        </div>
</center>
    <form style='text-align: center; margin-bottom: 2px; margin-top: 5px;' method='post' action='vote.php'>
        <div style='font-size: 12px; valign:center;'>
            loginID :&nbsp;&nbsp;
            <big><b><strong>
<br><form action="vote.php" method="POST"><br>
<tr><td class=list align=center></td><td class=list><input name="name" type="text" /></td></tr>
<tr><td class=listtitle align=center colspan=2><center><input type="submit" value="Vote"/></center>
</form>
</strong></b></big>    </div>
    </form>
</div>
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