<?php 

/*пппп|ппппп|пппппппп|ппп|ппп||ппп|ппп|пппппппп|пппппп|пппп*\
|###########################################|
|#_____________________..ButsagsCMS.._____________________#|
|#______.Copyright й2000-2009 Chris Ingis. All Rights Reserved._____#|
|###########################################|
\*____|_____|________|___|___||___|___|________|______|____*/


if(basename($_SERVER["PHP_SELF"]) == "properties.php"){
	die("403 - Access Forbidden");
}

/* Site Controls */
	$properties = mysql_query("SELECT * FROM butsags_properties");
	$prop = mysql_fetch_array($properties);
	$ipaddress = isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR'];
	
	if(isset($_SESSION['id'])){
		$getsty = mysql_query("SELECT * FROM accounts WHERE id=".$_SESSION['id']."");
		$showsty = mysql_fetch_array($getsty);
		
		if($showsty['style'] == NULL){
			$style = "1";
		}else{
			$style = $showsty['style'];
		}
		$getstyle = mysql_query("SELECT * FROM butsags_styles WHERE id=".$style."");
		$showstyle = mysql_fetch_array($getstyle);
	}
		if(isset($_SESSION['id'])){
		$getcur = mysql_query("SELECT * FROM accounts WHERE id=".$_SESSION['id']."");
		$showcur = mysql_fetch_array($getcur);
		
		if($showcur['cursor'] == NULL){
			$cursor = "1";
		}else{
			$cursor = $showcur['cursor'];
		}
		$getcursor = mysql_query("SELECT * FROM butsags_cursors WHERE id=".$cursor."");
		$showcursor = mysql_fetch_array($getcursor);
	}
	
	
	/* Name of server */
	$servername = $prop['name'];
	/* Site title */
	$sitetitle = $prop['title'];
	$pb = " (Powered by ButsagsCMS)";
	/* Download link for client */
	$client = $prop['client'];
	/* Server Version */
	$version = $prop['version'];
	/* Forum url*/
	$forumurl = $prop['forumurl'];
	/* Site url */
	$siteurl = $prop['siteurl'];
	/* butsags Dir */
	$butsagsdir = $prop['butsagsdir'];
	/* Email */
	$adminemail = $prop['email'];
	/* Vote Link */
	$vote = $prop['vote'];
	/* Vote Enabled */
	$vcheck = $prop['vcheck'];
	/* Vote Banner Link */
	$vbanner = $prop['vbanner'];
	/* Server Rates */
	$exprate = $prop['exprate'];
	$mesorate = $prop['mesorate'];
	$droprate = $prop['droprate'];
	/* Middle Banner Link */
	$mbanner = $prop['mbanner'];
	/* Middle Link */
	$mblink = $prop['mblink'];
	/* Menu Message */
	$message = $prop['message'];
	/* Flood Prevention */
	$butsagsflood = $prop['flood'];
	/* Flood Interval */
	$butsagsfloodint = $prop['floodint'];
	/* Scrolling Message */
	$scroller = $prop['scroller'];
	/* Level for GMs and up */
	$gmlevel = $prop['gmlevel'];
	/* Player Cap */
	$pcap = $prop['pcap'];
	/* Accounts Per IP */
	$MaxAcc = $prop['maxaccounts'];
	/* Public Key For Recaptcha*/
	$pubkey = $prop['pubkey'];
	/* Private Key For Recaptcha*/
	$privkey = $prop['privkey'];
	/*Chatbox HTML*/
	$chatbox = $prop['chatbox'];
	/* Where is the style located? */
	if(isset($_SESSION['id'])){
		$styledir = $showstyle['dir'];
	}else{
		$styledir = $prop['styledir'];
	}
	if(isset($_SESSION['id'])){
		$cursordir = $showcursor['dir'];
	}else{
		$cursordir = $prop['cursordir'];
	}
	$censored = array("fuck","dick","fail","suck","cock","bitch","ass","cunt","vagina","penis","cunt");
	
?>