<?php
	if(isset($_POST['idd']) && (int)$_POST['idd']==$_POST['idd']){
		include '../config_db.php';
		$j_idd=$_POST['idd'];
		$idd=json_decode($j_idd);
		
		$log=$idd->login;
		$p_name=$idd->p_name;
		$fio=$idd->fio;
		$reason=$idd->reason;
		$password=$idd->password;
		$mail=$idd->mail_o;
		$id_wb=mt_rand(1000000, 9999999);
		
		$update=mysql_query("INSERT INTO wanna_be SET login='$log', id_creator='$id_wb', pen_name='$p_name', fio='$fio', reason='$reason', password='$password', mail='$mail'") or die(mysql_error());
		if($update){
			echo true;
		}else{
			echo false;
		}
	}else{
		echo false;
	}
?>