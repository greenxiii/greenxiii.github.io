<?php 
    if(isset($_POST['exit'])){
        unset($_SESSION['ma4_login']);
        unset($_SESSION['ma4_type']);
        unset($_SESSION['ma4_password']);
        header("Location:index.php");
    }
?>
	<form method="post" action="" >
    	<input id='exit' type="submit" name="exit" value="ВЫЙТИ" />
	</form></br>

