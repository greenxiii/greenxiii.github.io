<?php
	if(isset($_POST['idd']) && (int)$_POST['idd']==$_POST['idd']){
		include '../config_db.php';
		$j_idd=$_POST['idd'];
		$idd=json_decode($j_idd);
		
		$id=$idd->id;
		$title=$idd->title;
		$cat=$idd->cat;
		$date=$idd->date_art;
		$creator=$idd->creator;
		$kol=$idd->kol;
		$desc=$idd->desc;

		$update=mysql_query("UPDATE articles SET article_title='$title', creating_date='$date', id_creator='$creator', view_cout='$kol', full_description=$desc WHERE article_id='$id'") or die(mysql_error());
		if($update){
			echo true;
		}else{
			echo false;
		}
	}else{
		echo false;
	}
?>