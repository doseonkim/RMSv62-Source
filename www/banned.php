<?php
include("top.php");

$con = mysql_connect($host, $user, $pass);
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db($database, $con);

$result = mysql_query("SELECT name, banreason FROM accounts WHERE banned = 1")
or die(mysql_error());

echo "<head>
<style type='text/css'>
A:link {text-decoration: none; color: #3a3a3a;}
A:visited {text-decoration: none; color: #3a3a3a;}
A:active {text-decoration: none; color:#3a3a3a;}
A:hover {text-decoration: none; color: #777777;}
#search_box {
    width: 201px;
    height: 31px;
    background: url(images/bg_search_box.gif);
}
#search_box #s {
    float: left;
    padding: 0;
    margin: 6px 0 0 6px;
    border: 0;
    width: 159px;
    background: none;
}
#search_box #go {
    float: right;
    margin: 3px 4px 0 0;
}
</style>
</head>
<body>
<table border='0' width='100%' bordercolor='#ffffff' cellspacing=0 style='dashed thin'>
    <tr valign='bottom'>
        <td align ='center'>
            <div id='search_box'>
                <form id='search_form' method='get' action='ranking.php'>
                    <input type='text' name='search' id='s' onfocus='if (this.value == 'Character Search') { this.value=''; }' onblur='if (this.value == '') { this.value='Character Search'; }' value='Character Search' class='swap_value' />
                    <input type='hidden' name='start' value='".$_GET['start']."'>
                    <input type='hidden' name='order' value='".$_GET['order']."'>
                    <input type='hidden' name='job' value='".$_GET['job']."'>
                    <input type='image' src='images/btn_search_box.gif' div style='border: 12px' width='27' height='24' id='go' alt='Search' title='Search' />
                </form>
            </div>
        </td>

echo "<table border='1' bordercolor='#000000' style='dashed thin'>";
echo "<tr> <th><span class='Stil2'>&nbsp;Account ID&nbsp;</th>  <th><span class='Stil2'>&nbsp;Reason&nbsp;</th>  </tr>";
// keeps getting the next row until there are no more to get
while($row = mysql_fetch_array( $result ) ) {
  echo "<tr><td>&nbsp;&nbsp;";
    echo $row['name'];
    echo "&nbsp;</td><td>&nbsp;";
    echo $row['banreason'];
    echo "</td></tr>";
}

echo "</table>";

echo "</table><br><table border='0' width='100%' bordercolor='#ffffff' cellspacing=0 style='dashed thin'><tr valign='top'> <td align ='center'><b>";
if($start)
echo "<a href='ranking.php?start=0&order=". $_GET['order'] ."&job=". $_GET['job'] ."'>First</a> | <a href='ranking.php?start=". ($start - 5) ."&order=". $_GET['order'] ."&job=". $_GET['job'] ."'>Previous</a> | ";
else
echo "First | Previous | ";
if($num_players % 5)
$num_players = $num_players - ($num_players % 5);
else
$num_players -= 5;
if($start <= $num_players - 5)
echo "<a href='ranking.php?start=". ($start + 5) ."&order=". $_GET['order'] ."&job=". $_GET['job'] ."'>Next</a> | <a href='ranking.php?start=".($num_players) ."&order=". $_GET['order'] ."&job=". $_GET['job'] ."'>Last</a>";
else
echo "Next | Last";
include("end.php");
?>
