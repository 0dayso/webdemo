<?php
$host="localhost";
$db_user="root";
$db_pass="";
$db_name="news";
$timezone="Asia/Shanghai";

$con=mysql_connect($host,$db_user,$db_pass);
mysql_select_db($db_name,$con);
mysql_query("SET names UTF8");
header("Content-Type: text/html; charset=utf-8");
date_default_timezone_set($timezone); //北京时间
?>
