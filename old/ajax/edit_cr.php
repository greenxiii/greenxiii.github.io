<?php
	if(isset($_POST['idd']) && (int)$_POST['idd']==$_POST['idd']){
		include '../config_db.php';
		$j_idd=$_POST['idd'];
		$idd=json_decode($j_idd);
		
		$id=$idd->id;
		$log=$idd->login;
		$p_name=$idd->pen_name;
		$mail=$idd->mail_c;
		$kol=$idd->kol;
		$stat=$idd->stat_c;
		
		$update=mysql_query("UPDATE creators SET login='$log', pen_name='$p_name', mail='$mail', art_count='$kol', stat_creator='$stat' WHERE id_creator='$id'") or die(mysql_error());
		if($update){
			echo true;
		}else{
			echo false;
		}
	}else{
		echo false;
	}
?>