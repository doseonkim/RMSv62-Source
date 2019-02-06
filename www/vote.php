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
session_start(); // make sure you have register globals off. to avoid confusions.
if(isset($_COOKIE['lastvote'])) { // if cookie exists, it will do this. We set cookie time for 12 hrs. so We dont want the fags to vote again. can cheat this as well.
    $lastvoted = $_COOKIE['lastvote'];  // assign the cookie data to a different variable.
    echo 'You have voted in the last 12 hrs. ';
    echo 'Your last voted time : ' . $lastvoted; // show him when he voted
    exit(); // end script. the code after this will not be executed. If you want to redirect the nib to the vote page even if he already voted, you need to add a redirect above this.
} else {
    $intwelvehrs = 60 * 60 * 12 + time();  // in milli seconds
    setcookie('lastvote', date("G:i - m/d/y"), $intwelvehrs);  // set cookie data and expiration of cookie to 12 hrs
}
if (isset($_SESSION['fuckmeoryou'])) { // check the session variable we set in the form
    unset($_SESSION['fuckmeoryou']);  // unset it so if they refresh it wont be there. Thanks to Darion for Pointing out that this could happen in his script he released in 1947
    if (isset($_POST['name'])) {        // if the user posted the user name do the following
        include('/config.php'); // include config.php. that file usually contains the detail for the code to connect to mysql. the password ip and shit.
        $today = date("mdHi"); // current time. month/date/hour/minute
        $name = mysql_real_escape_string(stripslashes($_POST['name'])); // strip slashes and escape the input so ppl cannot sql inject. its not 100 % safe but its quite safe
        $len = strlen($name); // assign the length of the input to a variable.
        if ($len > 15){ // if the input is more than 15 do this and end script.
            die('The login Id you entered is longer than expected.'); // die = echo + exit.
        }
        $ip = $_SERVER['REMOTE_ADDR']; // assign the ip of the nub to a variable
        echo '<b><big>Please Wait while you get redirected<br/><br />'; // just for fun
        function voteDo($name, $ip, $today){ // make a function to run sql queries so we can call this function from the script.
               mysql_query('INSERT INTO `voterewards` (name) VALUES ("'.$name.'")'); // add the name into vote rewards. you need to make a table name vote rewards. preferably with just id (int) and name (varchar)
                mysql_query('DELETE FROM `voteipcontrol` WHERE ip = "'.$ip.'"'); // Delete the ip from SQL table with ip.
                mysql_query('INSERT INTO `voteipcontrol` (ip, time) VALUES ("'.$ip.'","'.$today.'")'); // Add the ip and time in sql table so we can later check for the time some one voted from the ip.
                mysql_query('DELETE FROM `votecontrol` WHERE name = "'.$name.'"'); // delete from sql table with time and name
                mysql_query('INSERT INTO `votecontrol` (name, time) VALUES ("'.$name.'","'.$today.'")'); // add the name and time in SQL table to check later
                    echo '<meta http-equiv="refresh" content="1;url=http://www.gtop100.com/in.php?site=41951">'; // Change the 5 to make it load faster/ slower what ever. It will be done after the queries so you can even set it to 1 or sth.
        }

        if ($name == ""){ // Why I left it here? its not needed. 
            die("Required field was left blank."); // end script if name was blank
        } else {
            $query='SELECT * FROM accounts WHERE name= "'.$name.'" LIMIT 1'; // query to load the account from db
            if(mysql_num_rows(mysql_query($query)) == 0 ) {  // We do the query and check the number of rows in result. If its 0, there is no such account in the database.
                die('you have entered non-existant Login Id');                // end the script. there is a small problem with this. If some one entered a wrong name.... They gonna have to wait another 12 hrs to vote with rewards. You can also delete the cookie here to stop it using : setcookie ("lastvote", "", time() - 3600);
            } else {
                $queryone = 'SELECT time FROM voteipcontrol WHERE ip = "'.$ip.'"'; // it shouldnt come to this because of the cookie. But some users might have deleted cookie and what not. or diff browser/ same ip 2 comp. query to load details from the sql to  see when the ip was used to vote 
                $resultone = mysql_query($queryone); // assign the query to a variable
                $numberone = mysql_num_rows($resultone); // assign the  number of rows to a variable. We can use it like ($numberone = mysql_num_rows(mysql_query(sql query here))). but this looks cleaner to me.
                if($numberone > 0) { // if the ip is not being used for the first time to vote, do the following code to check if it was in the last 12 hrs
                    $row = mysql_fetch_array($resultone); // we fetch the result of the query as a array and put into a variable
                    $lvt = $row['time']; // we take the time data out of the array and assign it to a variable
                    if ($today - $lvt < 1200) { // Check if they voted in the last 12 hrs.
                        die ('You have voted in the last 12 hrs');                 // if they did end script.
                    } else {
                        $querytwo = 'select time from votecontrol WHERE name = "'.$name.'"'; // ok so what if they have different ip? or use dynamic ip? we cross check the name and voted time saved in our sql.
                        $resulttwo = mysql_query($querytwo); // query and put in a variable
                        $numbertwo = mysql_num_rows($resulttwo); // put the number of rows in the query into another variable
                        if(mysql_num_rows($resulttwo) > 0) { // if the person already voted we have him in db. need to check the time he voted
                            $roww = mysql_fetch_array($resulttwo); // we fetch the result of the query as a array and put into a variable
                            $lvt1 = $roww['time']; // put the time into a variable
                            if ($today - $lvt1 < 1200) { // check for 12 hrs
                                die ('You have voted in the last 12 hrs');   // end script if voted in last 12 hrs
                            } else {
                                voteDo($name, $ip, $today); // if not voted in 12 hrs, call the function to run the SQL queries.
                            }
                        } else {
                                voteDo($name, $ip, $today);  // if the name is not in the db... means he is voting for the first time. we just call the function. But the ip is still used for voting before
                        }
                    }
                } else { //if the ip was not found on the db
                    $querytwo = 'select time from votecontrol WHERE name = "'.$name.'"';  // check for the name and last voted time
                    $resulttwo = mysql_query($querytwo);
                    if(mysql_num_rows($resulttwo) > 0) {
                        $roww = mysql_fetch_array($resulttwo);
                        $lvtone = $roww['time'];                        
                        if ($today - $lvtone < 1200) {
                            die ('You have voted in the last 12 hrs ') ;

                        } else {
                            voteDo($name, $ip, $today);
                        }
                    } else {
                        voteDo($name, $ip, $today); // this will come into play if he is voting for the first time. neither his ip nor his login id is entered in the db. The only way i can think of bypassing all these checks is deleting cookies + using proxies + using many accounts. But when you make the command to load the shit from db. you can adjust stuff there so that its not easy.
                    }
                }
            }
        }
    } else {
        die('You did not enter your login Id'); // end script if no loginid is received by the script. usually caused by ppl refreshing the page
    }
} else {
    die('You try to cheat?'); // session variable we gave in the form does not exist.  means the person tried to access this pag with out being processed by the form.
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
      <li><a href="http://www.ultimatetop200.com/maple-story/">Vote for UltimateTop200</a></li>
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