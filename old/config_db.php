<?php
//    error_reporting(0);
    $dbhost = "localhost"; // Имя хоста БД
    $dbusername = "nikolayenk_5"; // Пользователь БД
    $dbpass = "8483512"; // Пароль к базе
    $dbname = "nikolayenk_5"; // Имя базы
    
    
    $dbconnect = mysql_connect ($dbhost, $dbusername, $dbpass) or die(mysql_error());
    mysql_query("SET NAMES 'utf8';");

    if(!$dbconnect){
    	echo mysql_errno()."  ".mysql_error();
		exit;
    }

    mysql_select_db($dbname);

	mysql_query("SET CHAEACTER SET 'utf8'");
	mysql_query("SET NAMES 'utf8'");
?>