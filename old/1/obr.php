

<?php	
	require_once("sha256.inc.php");
	/***************функции хэширования и обработки**************/
	/****************************************************************************************************************************/
					function hextostr($x) { 
					  $s=''; 
					  foreach(explode("\n",trim(chunk_split($x,2))) as $h) $s.=chr(hexdec($h)); 
					  return($s); 
					} 

					function strtohex($x) { 
					  $s=''; 
					  foreach(str_split($x) as $c) $s.=sprintf("%02X",ord($c)); 
					  return($s); 
					} 

					//Return 0 - if sign is valid, if else - invalid
					function VerifySign($source_message, $sign){
					    $sign = strtohex(base64_decode(rawurldecode($sign)));

				        //For (PHP 4, 5)
				        $obj = new nanoSha2();
				        $sha_str = $obj->hash($source_message, false);
				        //For (PHP 5 >= 5.1.2, PECL hash >= 1.1)
				        //$sha_str = hash('sha256', $source_message, false);
				        return strcmp(strtolower($sign), $sha_str);
					}
	/****************************************************************************************************************************/

	/****************Подключение БД*********************/
		//include "config_db.php";
  	$dbhost = "localhost"; // Имя хоста БД
    $dbusername = "nikolayenk"; // Пользователь БД
    $dbpass = "3ca3db88"; // Пароль к базе
    $dbname = "nikolayenk_4"; // Имя базы
    
    $dbconnect = mysql_connect ($dbhost, $dbusername, $dbpass) or die(mysql_error());
    mysql_query("SET NAMES 'utf8';");

    if(!$dbconnect){
    	echo mysql_error("error");
		exit;
    }
    mysql_select_db('nikolayenk_4');
    /****************************************************/

	$merchant_id="cefd26e8dda9494fa9ffb56ea8bea37d";
	$desc="122";
	$order_id=55;//rand(1000,9999);
	$amount="10.0000";
	$secret_key = "8c08af0e778e44efb472f427e28efa1b"; //Your secret key

	$mysign=$merchant_id.";".$order_id.";".$_POST['payment_id'].";".$desc.";".$_POST['payment_type'].";".$amount.";".$_POST['commission'].";".$secret_key;

	if(isset($_POST['sign'])){
		$sign = $_POST['sign'];
		/************************************if !error****************/
		if(!VerifySign($mysign,$sign)){
			$query_sign=mysql_query("UPDATE tab1 SET n='win'") or die(mysql_error());
		}else{
			$query_err=mysql_query("UPDATE tab1 SET n='error'") or die(mysql_error());
		}
		/************************************************************/
	}
	
?>
