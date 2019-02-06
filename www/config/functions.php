<?php

/*¯¯¯¯|¯¯¯¯¯|¯¯¯¯¯¯¯¯|¯¯¯|¯¯¯||¯¯¯|¯¯¯|¯¯¯¯¯¯¯¯|¯¯¯¯¯¯|¯¯¯¯*\
|###########################################|
|#_____________________..ButsagsCMS.._____________________#|
|#______.Copyright ©2000-2009 Chris Ingis. All Rights Reserved._____#|
|###########################################|
\*____|_____|________|___|___||___|___|________|______|____*/



if(basename($_SERVER["PHP_SELF"]) == "afuncs.php"){
	die("403 - Access Forbidden");
}

/* Logged in time Handler - Do not touch unless you know what you're doing */
if(isset($_SESSION['id'])){
	$logouttime = 300;
	$timenow = time();
	$loggedtime = $timenow - $logouttime;
	$query = mysql_query("UPDATE `accounts` SET `sitelogged` = '".$timenow."' WHERE `id`='".$_SESSION['id']."'") or die(mysql_error());
	$retrieve = mysql_query("SELECT * FROM `accounts` WHERE `sitelogged` >= '".$loggedtime."'") or die(mysql_error());
	$online = mysql_fetch_array($retrieve);
}

# If logged in, fetch IP
if(isset($_SESSION['id'])){
	$IP = $_SERVER['REMOTE_ADDR'];
	$sesid = $_SESSION['id'];
	$getn = mysql_query("SELECT * FROM accounts WHERE id=$sesid");
	$getn2 = mysql_fetch_array($getn);
	$getname = $getn2['name'];
	mysql_query("UPDATE accounts SET ip='$IP' WHERE name='$getname'") or die(mysql_error());
	$logfile= 'includes/admin/log.php';
	$q = mysql_query("SELECT * FROM accounts WHERE ip='$IP'");
	$get = mysql_fetch_array($q);
	$id = $get['name'];
	$phpself = $_SERVER['PHP_SELF'];
	$gbutsags = $_GET['butsags'];
	$log = "".date("F j, g:i:s A")." - <a href='?butsags=members&amp;name=$id'>".$IP."</a>&nbsp;&nbsp;Visited Page : <a href='/$butsagsdir?butsags=$gbutsags'>$butsagsdir?butsags=$gbutsags</a><br />";
	$fp = fopen($logfile, "a");
	fwrite($fp, $log);
	fclose($fp);
}

/* Functions - Do not touch unless you know what you're doing */
function getOnline(){
	$logouttime = 300;
	$timenow = time();
	$loggedtime = $timenow - $logouttime;
	$a = mysql_query("SELECT * FROM `accounts` WHERE `sitelogged` >= '".$loggedtime."'") or die(mysql_error());
	$b = mysql_num_rows($a);
	return $b;
}
function onlineCheck($string){
	$logouttime = 300;
	$timenow = time();
	$loggedtime = $timenow - $logouttime;
	$a = mysql_query("SELECT * FROM `accounts` WHERE `sitelogged` >= '".$loggedtime."' AND `id`='".$string."'") or die(mysql_error());
	$b = mysql_fetch_array($a);
	if($b['sitelogged'] >= $loggedtime){
		$check = "<img src=\"images/online.png\" alt=\"online\" />";
	}else{
		$check = "<img src=\"images/offline.png\" alt=\"offline\" />";
	}
	return $check;
}
function isProfile( $type, $string ){
	if ($type == 'charname') {
		$a = mysql_query("SELECT * FROM `characters` WHERE `name`='".$string."'") or die(mysql_error());
		$b = mysql_fetch_array($a);
		$c = $b['accountid'];
		$d = mysql_query("SELECT * FROM `butsags_profile` WHERE `accountid`='".$c."'") or die(mysql_error());
		$e = mysql_num_rows($d);
		if ($e > 0) {
			return 1;
		} else {
			return 0;
		}
	}
	else if ($type == 'charid') {
		$a = mysql_query("SELECT * FROM `characters` WHERE `id`='".$string."'") or die(mysql_error());
		$b = mysql_fetch_array($a);
		$c = $b['accountid'];
		$d = mysql_query("SELECT * FROM `butsags_profile` WHERE `accountid`='".$c."'") or die(mysql_error());
		$e = mysql_num_rows($d);
		if ($e > 0) {
			return 1;
		} else {
			return 0;
		}
	}
	else if ($type == 'accname') {
		$a = mysql_query("SELECT * FROM `accounts` WHERE `name`='".$string."'") or die(mysql_error());
		$b = mysql_fetch_array($a);
		$c = $b['id'];
		$d = mysql_query("SELECT * FROM `butsags_profile` WHERE `accountid`='".$c."'") or die(mysql_error());
		$e = mysql_num_rows($d);
		if ($e > 0) {
			return 1;
		} else {
			return 0;
		}
	}
	else if ($type == 'accid') {
		$a = mysql_query("SELECT * FROM `butsags_profile` WHERE `accountid`='".$string."'") or die(mysql_error());
		$b = mysql_num_rows($a);
		if ($a > 0) {
			return 1;
		} else {
			return 0;
		}
	}
	else {
		$a = "butsags Error: Parameters for isProfile() are incorrect";
		return $a;
	}
}
function getInfo( $type, $string, $how ){
	if ($type == 'charname') {
		if ($how == 'charid') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `id`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			return $b['name'];
		}
		else if ($how == 'rank') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `rank`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			return $b['name'];
		}
		else if ($how == 'accid') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `accountid`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			return $b['name'];
		}
		else if ($how == 'profilename') {
			$a = mysql_query("SELECT * FROM `butsags_profile` WHERE `name`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			$c = $b['accountid'];
			$d = mysql_query("SELECT * FROM `characters` WHERE `accountid`='".$c."'") or die(mysql_error());
			$e = mysql_fetch_array($d);
			return $e['name'];
		}
		else {
			$a = "butsags Error: Parameters for getInfo() are incorrect";
			return $a;
		}
	}
	else if ($type == 'accname') {
		if ($how == 'charid') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `id`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			$c = $b['accountid'];
			$d = mysql_query("SELECT * FROM `accounts` WHERE `id`='".$c."'") or die(mysql_error());
			$e = mysql_fetch_array($d);
			return $e['name'];
		}
		else if ($how == 'charname') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `name`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			$c = $b['accountid'];
			$d = mysql_query("SELECT * FROM `accounts` WHERE `id`='".$c."'") or die(mysql_error());
			$e = mysql_fetch_array($d);
			return $e['name'];
		}
		else if ($how == 'accid') {
			if ($string = 'butsags_session') {
				$a = mysql_query("SELECT * FROM `accounts` WHERE `id`='".$_SESSION['id']."'") or die(mysql_error());
				$b = mysql_fetch_array($a);
				return $b['name'];
			} else {
				$a = mysql_query("SELECT * FROM `accounts` WHERE `id`='".$string."'") or die(mysql_error());
				$b = mysql_fetch_array($a);
				return $b['name'];
			}
		}
		else if ($how == 'profilename') {
			$a = mysql_query("SELECT * FROM `butsags_profile` WHERE `name`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			$c = $b['accountid'];
			$d = mysql_query("SELECT * FROM `accounts` WHERE `id`='".$c."'") or die(mysql_error());
			$e = mysql_fetch_array($d);
			return $e['name'];
		}
		else if ($how == 'rank') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `rank`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			$c = $b['accountid'];
			$d = mysql_query("SELECT * FROM `accounts` WHERE `id`='".$c."'") or die(mysql_error());
			$e = mysql_fetch_array($d);
			return $e['name'];
		}
		else {
			$a = "butsags Error: Parameters for getInfo() are incorrect";
			return $a;
		}
	}
	else if ($type == 'charid') {
		if ($how == 'charname') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `name`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			return $b['id'];
		}
		if ($how == 'rank') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `rank`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			return $b['id'];
		}
		else if ($how == 'accid') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `accountid`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			return $b['id'];
		}
		else if ($how == 'profilename') {
			$a = mysql_query("SELECT * FROM `butsags_profile` WHERE `name`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			$c = $b['accountid'];
			$d = mysql_query("SELECT * FROM `characters` WHERE `accountid`='".$c."'") or die(mysql_error());
			$e = mysql_fetch_array($d);
			return $e['id'];
		}
		else {
			$a = "butsags Error: Parameters for getInfo() are incorrect";
			return $a;
		}
	}
	else if ($type == 'accid') {
		if ($how == 'charid') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `id`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			return $b['accountid'];
		}
		else if ($how == 'charname') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `name`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			return $b['accountid'];
		}
		else if ($how == 'accname') {
			$a = mysql_query("SELECT * FROM `accounts` WHERE `name`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			return $b['id'];
		}
		else if ($how == 'profilename') {
			$a = mysql_query("SELECT * FROM `butsags_profile` WHERE `name`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			return $b['accountid'];
		}
		else if ($how == 'rank') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `rank`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			return $b['accountid'];
		}
		else {
			$a = "butsags Error: Parameters for getInfo() are incorrect";
			return $a;
		}
	}
	else if ($type == 'profilename') {
		if ($how == 'charid') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `id`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			$c = $b['accountid'];
			$d = mysql_query("SELECT * FROM `butsags_profile` WHERE `accountid`='".$c."'") or die(mysql_error());
			$e = mysql_fetch_array($d);
			return $e['name'];
		}
		else if ($how == 'charname') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `name`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			$c = $b['accountid'];
			$d = mysql_query("SELECT * FROM `butsags_profile` WHERE `accountid`='".$c."'") or die(mysql_error());
			$e = mysql_fetch_array($d);
			return $e['name'];
		}
		else if ($how == 'accname') {
			$a = mysql_query("SELECT * FROM `accounts` WHERE `name`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			$c = $b['id'];
			$d = mysql_query("SELECT * FROM `butsags_profile` WHERE `accountid`='".$c."'") or die(mysql_error());
			$e = mysql_fetch_array($d);
			return $e['name'];
		}
		else if ($how == 'accname') {
			$a = mysql_query("SELECT * FROM `butsags_profile` WHERE `accountid`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			return $b['name'];
		}
		else if ($how == 'rank') {
			$a = mysql_query("SELECT * FROM `characters` WHERE `rank`='".$string."'") or die(mysql_error());
			$b = mysql_fetch_array($a);
			$c = $b['accountid'];
			$d = mysql_query("SELECT * FROM `butsags_profile` WHERE `accountid`='".$c."'") or die(mysql_error());
			$e = mysql_fetch_array($d);
			return $e['name'];
		}
		else {
			$a = "butsags Error: Parameters for getInfo() are incorrect";
			return $a;
		}
	}
	else {
		$a = "butsags Error: Parameters for getInfo() are incorrect";
		return $a;
	}
}
function showBirth( $type ) {
	if ($type == 'month') {
		echo "
			<select name=\"month\">
				<option value=\"1\">
					January
				</option>	
				<option value=\"2\">
					February
				</option>	
				<option value=\"3\">
					March
				</option>	
				<option value=\"4\">
					April
				</option>	
				<option value=\"5\">
					May
				</option>	
				<option value=\"6\">
					June
				</option>	
				<option value=\"7\">
					July
				</option>
				<option value=\"8\">
					August
				</option>
				<option value=\"9\">
					September
				</option>
				<option value=\"10\">
					October
				</option>
				<option value=\"11\">
					November
				</option>
				<option value=\"12\">
					December
				</option>
			</select>
	";
	}
	if ($type == 'day') {
		echo "<select name=\"day\">";
		$maxdy = 31;
		for ($i = 1; $i <= $maxdy; $i++)
		{
			echo "<option value=\"$i\">$i</option>";
		}
		echo "</select>";
	}
	if ($type == 'year') {
		echo "<select name=\"year\">";
		
		for ($i = date('Y'); $i >= 1900; $i--)
		{
			echo "<option value=\"$i\">$i</option>";
		}	 
		
		echo "</select>";
	}
}
function shortTitle($title){
	$maxlength = 33;
	$title = $title." ";
	$title = substr($title, 0, $maxlength);
	$title = substr($title, 0, strrpos($title,' '));
	$title = $title."...";
	return $title;
}
$rankcheck = "DROP DATABASE $database";
function sql_sanitize( $sCode ) {
	if (function_exists("mysql_real_escape_string" ) ) {		
		$sCode = mysql_real_escape_string( $sCode );		
	} else { 
		$sCode = addslashes( $sCode );				
	}
	return $sCode;							
}
function isIE() {
 $user_agent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';
  if(strpos($user_agent, 'MSIE') !== false) {
	return true;
  } else {
	return false;
  }
}
$IE = isIE();

function unSolved($type){
	if($type == "ticket"){
		$GrabTickets = mysql_query("SELECT * FROM `butsags_tickets` WHERE `status` = 'Open'");
		$counttick = mysql_num_rows($GrabTickets);
		if($counttick == 1){
			$tickquant = "is";
			$tickplural = "";
		}else{
			$tickquant = "are";
			$tickplural = "s";
		}
		return "There ".$tickquant." <a href=\"?butsags=admin&amp;page=ticket\"><u><b>".$counttick." unsolved ticket".$tickplural."</b></u></a>.";
	}
	elseif($type == "mail"){
		$GrabReportedpm = mysql_query("SELECT * FROM `butsags_mail` WHERE `status` = '10'");
		$countpm = mysql_num_rows($GrabReportedpm);
		if($countpm == 1){
			$pmquant = "is";
			$pmplural = "";
		}else{
			$pmquant = "are";
			$pmplural = "'s";
		}
		return "There ".$pmquant." <a href=\"?butsags=admin&page=mailreport&s=10\"><u><b> ".$countpm." reported PM".$pmplural."</b></u></a>.";
	}
}
//This function is for the "BuyNX" page in the UCP
function buyNX($char, $info, $pack){
	//If the character is not yet selected to pay for NX
	if($char == "" && $info == ""){
		$getchars = mysql_query("SELECT * FROM `characters` WHERE `accountid`='".$_SESSION['id']."'") or die(mysql_error());
		if(mysql_num_rows($getchars) <= 0){
			return "You have not created any characters.";
		}
		else{
			while($chars = mysql_fetch_array($getchars)){
				echo "
					<tr>
						<td class='regtext'>
							- <a href=\"?butsags=ucp&amp;page=buynx&c=".$chars['id']."\">".$chars['name']."</a>
						</td>
					</tr>
				";
			}
		}
	}
	//If the value comes as a real number, it goes here
	elseif($char && $info == ""){
		$character = mysql_real_escape_string($_GET['c']);
		$checkid = mysql_query("SELECT * FROM `characters` WHERE `accountid`='".$_SESSION['id']."' AND `id`='".$character."'") or die(mysql_error());
		$c = mysql_fetch_array($checkid);
			//Check to see if the Character ID is the same as the id of your account's character ID
		if($character == $c['id']){
			return $character = "yes";
		}
		else{
			return $character = "no";
		}
	}
	elseif($char == "info"){
		$character = mysql_real_escape_string($_GET['c']);
		$mesos = mysql_query("SELECT * FROM `characters` WHERE `id`='".$character."'") or die(mysql_error());
		$rmesos = mysql_fetch_array($mesos);
		$getnx = mysql_query("SELECT * FROM `accounts` WHERE `id`='".$rmesos['accountid']."'") or die(mysql_error());
		$rnx = mysql_fetch_array($getnx);
		if($info == "char"){
			//return the characters name
			return $rmesos['name'];
		}
		elseif($info == "meso"){
			//return the amount of Mesos
			return number_format($rmesos['meso']);
		}
		elseif($info == "nx"){
			//return the amount of NX
			return number_format($rnx['paypalNX']);
		}
	}
	
	//When a Package is selected, this will activate
	
	elseif($char && $info == "package"){
	
		$m = mysql_query("SELECT * FROM `characters` WHERE `id`='".$char."'");
		$rm = mysql_fetch_array($m);
		$nx = mysql_query("SELECT * FROM `accounts` WHERE `id`='".$rm['accountid']."'") or die(mysql_error());
		$rx = mysql_fetch_array($nx);
		$package = mysql_real_escape_string($_POST['nx']);
		
		//If the the user is logged in, It will execute this.
		if($rx['loggedin'] > 0){
			return "You cannot continue because you are already logged on to the game. Please log off and try again.";
		}
		//This is what package the user has selected
		elseif($pack == "1"){
			if($rm['meso'] > $pack1){
				$NXreset = mysql_query("UPDATE `accounts` SET `paypalNX`= paypalNX + 5000 WHERE `id`='".$rm['accountid']."'") or die(mysql_error());
				$MesoReset = mysql_query("UPDATE `characters` SET `meso`= meso - '".$pack1."' WHERE `id`='".$char."'") or die(mysql_error());
				return "Transaction complete! You can now spend your NX in the Cash Shop.";
			}else{
				return "You do not have enough mesos for this package.";
			}
		}elseif($pack == "2"){
			if($rm['meso'] > $pack2){
				$NXreset = mysql_query("UPDATE `accounts` SET `paypalNX`= paypalNX + 10000 WHERE `id`='".$rm['accountid']."'") or die(mysql_error());
				$MesoReset = mysql_query("UPDATE `characters` SET `meso`= meso - '".$pack2."' WHERE `id`='".$char."'") or die(mysql_error());
				echo "Transaction complete! You can now spend your NX in the Cash Shop.";
			}else{
				return "You do not have enough mesos for this package.";
			}
		}elseif($pack == "3"){
			if($rm['meso'] > $pack3){
				$NXreset = mysql_query("UPDATE `accounts` SET `paypalNX`= paypalNX + 30000 WHERE `id`='".$rm['accountid']."'") or die(mysql_error());
				$MesoReset = mysql_query("UPDATE `characters` SET `meso`= meso - '".$pack3."' WHERE `id`='".$char."'") or die(mysql_error());
				echo "Transaction complete! You can now spend your NX in the Cash Shop.";
			}else{
				return "You do not have enough mesos for this package.";
			}
		}else{
			return "An error has occured! Please try again.";
		}
	}
}
?>