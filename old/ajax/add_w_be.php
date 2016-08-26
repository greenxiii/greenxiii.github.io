<?php
	if(isset($_POST['idd']) && (int)$_POST['idd']==$_POST['idd']){
		include '../config_db.php';
		$idd=$_POST['idd'];
		$accept=mysql_query("INSERT INTO creators (
			login,
			id_creator,
			password,
			mail,
			pen_name,
			fio
		)SELECT 
			wanna_be.login,
			wanna_be.id_creator,
			wanna_be.password,
			wanna_be.mail,
			wanna_be.pen_name,
			wanna_be.fio
		FROM  wanna_be WHERE id_creator='$idd' ") or die(mysql_error());
		if($accept)$delete=mysql_query("DELETE FROM wanna_be WHERE id_creator='$idd'") or die(mysql_error());
		if($delete){
			echo true;
		}else{
			echo false;
		}
	}else{
		echo false;
	}
?>