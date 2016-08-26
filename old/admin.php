<?php
include 'config_db.php';

if(!isset($_GET['padm']) && isset($_GET['page']) && $_GET['page']='adminium'){
	$padm='articles';
}elseif(isset($_GET['padm']) && isset($_GET['page']) && $_GET['page']='adminium'){
	$padm=$_GET['padm'];
}else{
	echo "<script>location.reload();</script>";
}

switch ($padm){
	case 'articles':
		include 'add_art.php';
		break;
	case 'users':
			include 'add_creator.php';
			include 'wanna_be_creator.php';
			break;
	case 'stat':
		if(isset($_SESSION['ma4_type']) && $_SESSION['ma4_type']=="c"){
			include 'stat_users.php';
		}else{
			include 'stat_all.php';
		}
		break;
}
?>