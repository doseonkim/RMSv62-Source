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
include('config/config.php');


	echo "		
";
$getjob = mysql_real_escape_string(@$_GET['job']);
if(@$getjob != NULL) {
    $show = " AND characters.job LIKE '".$getjob."%'";
} else {
    $show = "";
}
$start = mysql_real_escape_string(@$_GET['start']);
if(@$start) {
    $start = $start;
} else {
    $start = 0;
}
$search = @$_GET['search'];
if(isset($search)) {
$search = mysql_real_escape_string(@$_POST['search']);
    $csearch = " AND characters.name LIKE '".$search."%'";
} else {
    $csearch = "";
}

$order = mysql_real_escape_string(@$_GET['order']);
if(@$order) {
    $order = $order." DESC,";
} else {
        $order = "";
        $result2 = mysql_query("SELECT reborns, level, exp, characters.name name, meso, job, fame, logo, logoColor, guilds.name guildname, logoBG, logoBGColor, COUNT(eventstats.characterid) wins FROM accounts, characters LEFT JOIN guilds ON guilds.guildid = characters.guildid LEFT JOIN eventstats ON characters.id=eventstats.characterid WHERE characters.gm < '3' AND accountid = accounts.id AND banned = 0 ".$show." ".$csearch." GROUP BY characters.id DESC ORDER BY $order reborns DESC") or die("IT IS LINE ". __LINE__ . "<br />" . mysql_error());
        $num_players=mysql_num_rows($result2);
}
if(isset($search)){
    $row_number = 0;
    $int = 0;
    while(($row = mysql_fetch_array( $result2 )) && !$row_number){
        if(strtolower($row['name']) == strtolower($search)){
            $row_number = $int;
        }
        $int++;
    }
    if($row_number){
        $start = $row_number - ($row_number % 5);
    }
}

$result = mysql_query("SELECT  reborns, level, exp, characters.name name, meso, job, fame, logo, logoColor, guilds.name guildname, logoBG, logoBGColor, COUNT(eventstats.characterid) wins FROM accounts, characters LEFT JOIN guilds ON guilds.guildid = characters.guildid LEFT JOIN eventstats ON characters.id=eventstats.characterid WHERE characters.gm < '3' AND accountid = accounts.id AND banned = 0 ".$show."".$csearch." GROUP BY characters.id DESC ORDER BY $order reborns DESC LIMIT $start, 5") or die("IT IS LINE ". __LINE__ . "<br />" . mysql_error());

echo "
   

        <center>    <h2><a href=\"ranking.php\">Radiance MS Rankings</a></h2> </center>
        </tr>

            ";


    echo "
        <tr>
            <td>
                <table style='border:.3em solid #505151;' border='0' width='0' cellspacing='0'>";
    echo "
                    <tr style='height: -5px;' align ='center' valign='middle'>
                        <td class='ranktitle'>
                            <b>Rank</b>
                        </td>
                        <td class='ranktitle'>
                            <b>Name</b>
                        </td>
                           <td class='ranktitle'>
                            <b>Reborns</b>
                        </td>
                        <td style='background:#727575; color: #FFF; padding:1px;'>
                            <b>Level</b>
                        </td>
                        <td class='ranktitle'>
                            <b>Job</b>
                        </td>
                        <td class='ranktitle'>
                            <b>Fame</b>
                        </td>
                    </tr>";
        
    $ranking=$start;
    $backcolor="ffffff";

    while($row = mysql_fetch_array( $result )) {

        if(@$backcolor2 == "ffffff")
            $backcolor2 = "f3f3f3";
            else
                $backcolor2 = "ffffff";
        if(@$row_number == $ranking && $search){
            $backcolor = "cacaca";
        }
    else{
        $backcolor=$backcolor2;
    }
    $ranking++;
    
echo "
                    <tr>
                        <td style='border-bottom:1px solid #e3e3e3;' align='center' bgcolor='#".$backcolor."'>
                            <b>$ranking</b>
                        </td>
                        <td style='border-bottom:1px solid #e3e3e3;' align='center' bgcolor='#".$backcolor."'>
                            <a href='ranking.php'>
                                <font size='-3'><b>".$row['name']."</b></font>
                            </a>
                            <br />";
if($row['guildname'])
    echo "
                            <b>".$row['guildname']."</b>
                            <br />
                                ";
    else
        echo "
                            <b>
                                <s>Guildless</s>
                            </b>";


        echo "
<td style='border-bottom:1px solid #e3e3e3;' align='center' bgcolor='#".$backcolor."'>
                                ".$row['reborns']."
                                <font size='-3' color='green'>
                                </font>
                            </b>
                        </td>
                        <td style='border-bottom:1px solid #e3e3e3;' align='center' bgcolor='#".$backcolor."'>
                            <b>
                                ".$row['level']."
                                <font size='-3' color='green'>
                                    <br />
                                </font>
                            </b>
                        </td>
                        </td>
                        <td style='border-bottom:1px solid #e3e3e3;' align='center' bgcolor='#".$backcolor."'>
                            <b>";
                if($row['job'] == 0)
                    echo "
                            <img src='images/class/job_beginner.gif' alt='Beginner' />";
                if($row['job'] >= 100 && $row['job'] < 200)
                    echo "
                            <img src='images/class/job_warrior.gif' alt='Warrior' />";
                if($row['job'] >= 200 && $row['job'] < 300)
                    echo "
                            <img src='images/class/job_magician.gif' alt='Magician' />";
                if($row['job'] >= 300 && $row['job'] < 400)
                    echo "
                            <img src='images/class/job_bowman.gif' alt='Bowman' />";
                if($row['job'] >= 400 && $row['job'] < 500)
                    echo "
                            <img src='images/class/job_thief.gif' alt='Theif' />";
                if($row['job'] >= 500 && $row['job'] < 600)
                    echo "
                            <img src='images/class/job_pirate.gif' alt='Pirate' />"; 
                if($row['job'] >= 900 && $row['job'] < 910)
                    echo "
                            <img src='images/class/job_gm.gif' alt='GM' />";
				if($row['job'] == 1000)
                    echo "
                            <img src='images/class/job_beginner.gif' alt='Noblesse' />";
				if($row['job'] >= 1100 && $row['job'] < 1512)
                    echo "
                            <img src='images/class/job_cygnus.gif' alt='Cygnus' />";
                    echo "
                            <br />";
                if ($row['job']=="000")
                    echo "Beginner";
                if ($row['job']=="100")
                    echo "Warrior";
                if ($row['job']=="110")
                    echo "Fighter";
                if ($row['job']=="120")
                    echo "Page";
                if ($row['job']=="130")
                    echo "Spearman";
                if ($row['job']=="111")
                    echo "Crusader";
                if ($row['job']=="121")
                    echo "White Knight";
                if ($row['job']=="131")
                    echo "Dragon Knight";
                if ($row['job']=="112")
                    echo "Hero";
                if ($row['job']=="122")
                    echo "Paladin";
                if ($row['job']=="132")
                    echo "Dark Knight";
                if ($row['job']=="200")
                    echo "Magician";
                if ($row['job']=="210")
                    echo "Wizard";
                if ($row['job']=="220")
                    echo "Wizard";
                if ($row['job']=="230")
                    echo "Cleric";
                if ($row['job']=="211")
                    echo "Mage";
                if ($row['job']=="221")
                    echo "Mage";
                if ($row['job']=="231")
                    echo "Priest";
                if ($row['job']=="212")
                    echo "Arch Mage";
                if ($row['job']=="222")
                    echo "Arch Mage";
                if ($row['job']=="232")
                    echo "Bishop";
                if ($row['job']=="300")
                    echo "Bowman";
                if ($row['job']=="310")
                    echo "Hunter";
                if ($row['job']=="320")
                    echo "Crossbowman";
                if ($row['job']=="311")
                    echo "Ranger";
                if ($row['job']=="321")
                    echo "Sniper";
                if ($row['job']=="312")
                    echo "Bow Master";
                if ($row['job']=="322")
                    echo "Crossbow Master";
                if ($row['job']=="400")
                    echo "Thief";
                if ($row['job']=="410")
                    echo "Assassin";
                if ($row['job']=="420")
                    echo "Bandit";
                if ($row['job']=="411")
                    echo "Hermit";
                if ($row['job']=="421")
                    echo "Chief Bandit";
                if ($row['job']=="412")
                    echo "Night Lord";
                if ($row['job']=="422")
                    echo "Shadower";
                if ($row['job']=="500")
                    echo "Pirate";
                if ($row['job']=="510")
                    echo "Brawler";
                if ($row['job']=="520")
                    echo "Gunslinger";
                if ($row['job']=="511")
                    echo "Marauder";
                if ($row['job']=="521")
                    echo "Buccaneer";
                if ($row['job']=="512")
                    echo "Outlaw";
                if ($row['job']=="522")
                    echo "Corsair";
                if ($row['job']=="900")
                    echo "GMs";
                if ($row['job']=="910")
                    echo "SuperGM";
				if ($row['job']=="1000")
                    echo "Noblesse";
				if ($row['job']=="1100")
                    echo "Dawn Warrior";
				if ($row['job']=="1110")
                    echo "Dawn Warrior 2";
				if ($row['job']=="1111")
                    echo "Dawn Warrior 3";
				if ($row['job']=="1112")
                    echo "Dawn Warrior 4";
				if ($row['job']=="1200")
                    echo "Blaze Wizard 1";
				if ($row['job']=="1210")
                    echo "Blaze Wizard 2";
				if ($row['job']=="1211")
                    echo "Blaze Wizard 3";
				if ($row['job']=="1212")
                    echo "Blaze Wizard 4";
				if ($row['job']=="1300")
                    echo "Wind Archer";
				if ($row['job']=="1310")
                    echo "Wind Archer 2";
				if ($row['job']=="1311")
                    echo "Wind Archer 3";
				if ($row['job']=="1312")
                    echo "Wind Archer 4";
				if ($row['job']=="1400")
                    echo "Night Walker";
				if ($row['job']=="1410")
                    echo "Night Walker 2";
				if ($row['job']=="1411")
                    echo "Night Walker 3";
				if ($row['job']=="1412")
                    echo "Night Walker 4";
				if ($row['job']=="1500")
                    echo "Thunder Breaker";
				if ($row['job']=="1510")
                    echo "Thunder Breaker 2";
				if ($row['job']=="1511")
                    echo "Thunder Breaker 3";
				if ($row['job']=="1512")
                    echo "Thunder Breaker 4";
echo "
                        <td style='border-bottom:1px solid #e3e3e3;' align='center' bgcolor='#".$backcolor."'>
                            <b>".$row['fame']."</b>
                        </td>

                        </b>
                        </td>

                    </tr>";
    }
echo "
";
    

        echo "
                          
		                    </td>
		                </tr>
		            </table>
				</td>
			</tr>";

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