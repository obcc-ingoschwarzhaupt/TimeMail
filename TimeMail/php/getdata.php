<?php
require_once ('datenbank.php');
$data = $_POST[data];
$date =$data[date];
$date =substr($date,0, 33);

$timestamp =(strtotime ($date));

$year =unixToMySQL($timestamp,"Y");
$month =unixToMySQL($timestamp,"m");

function unixToMySQL($timestamp,$type)
{
    return date($type, $timestamp);
}



$db_link = mysqli_connect (
                     MYSQL_HOST, 
                     MYSQL_BENUTZER, 
                     MYSQL_KENNWORT, 
                     MYSQL_DATENBANK
                    );


$sql = "SELECT * FROM events  WHERE month = ".$month." AND year =".$year;
 
$db_erg = mysqli_query( $db_link, $sql );
if ( ! $db_erg )
{
  die('Ungültige Abfrage: ' . mysqli_error());
}

while ($zeile = mysqli_fetch_array( $db_erg, MYSQL_ASSOC))
{
  $events[] = array($zeile['id'],$zeile['title'],$zeile['description'],$zeile['clock'],$zeile['priority'],$zeile['day']);
  
}
$events =json_encode ($events);
print_r($events);
?>