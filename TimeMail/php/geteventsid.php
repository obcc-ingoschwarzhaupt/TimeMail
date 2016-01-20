<?php

require_once ('datenbank.php');
$db_link = mysqli_connect (
                     MYSQL_HOST, 
                     MYSQL_BENUTZER, 
                     MYSQL_KENNWORT, 
                     MYSQL_DATENBANK
                    );


$sql = "SELECT * FROM Event";
 
$db_erg = mysqli_query( $db_link, $sql );
if ( ! $db_erg )
{
  die('Ungültige Abfrage: ' . mysqli_error());
}

while ($zeile = mysqli_fetch_array( $db_erg, MYSQL_ASSOC))
{
  $persons[] = array($zeile['id'],$zeile['nachname'],$zeile['vorname'],$zeile['email']);
  
}
$persons =json_encode ($persons);
print_r($persons);







?>