<?php
	if(isset($_POST['idd']) && (int)$_POST['idd']==$_POST['idd']){
		include '../config_db.php';
		$idd=$_POST['idd'];
		$delete=mysql_query("DELETE FROM articles WHERE article_id='$idd'") or die(mysql_error());
		if($delete){
			echo true;
		}else{
			echo false;
		}
	}else{
		echo false;
	}
?>