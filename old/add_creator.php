<?php
	if(isset($_SESSION['ma4_login']) && isset($_SESSION['ma4_type']) && isset($_SESSION['ma4_password']) && $_SESSION['ma4_type']="s"){
		if(isset($_POST['add_cr'])){
			$login=$_POST['login'];
			$id_cr=mt_rand(1000000, 9999999);
			$pass=$_POST['pass'];
			$pass=SHA1($pass);
			$mail=$_POST['mail'];
			$type=$_POST['type_st'];
			$p_name=$_POST['p_name'];
			$add_c=mysql_query("INSERT INTO creators SET login='$login',id_creator='$id_cr', pen_name='$p_name', password='$pass', mail='$mail', stat_creator='$type'") or die (mysql_error());
			echo "<script>location.reload();</script>";
		}
	//Форма добавления модераторов			
		echo "<form method='post'>";
			echo "<font>Добавить модератора:</font><br>";
			echo "<label>Логин:</label></br>";
			echo "<input class=reg  id=login type=text name=login placeholder='Логин' required /></br>";
			echo "<label>Псевдоним:</label></br>";
			echo "<input class=reg  id=p_name type=text name=p_name placeholder='Псевдоним' required /></br>";
			echo "<label>Пароль:</label></br>";
			echo "<input class=reg type=password name=pass placeholder=Пароль required /><p>";
			echo "<label>Мыло:</label></br>";
			echo "<input class=reg type=password name=mail placeholder=E-Mail required /><p>";
			echo "<label>Статус:</label>";	
			echo "<select name=type_st>";
				echo "<option value='s'>super</option>";
				echo "<option value='c'>creator</option>";
			echo "</select>";
			echo "<input type=submit name=add_cr value=Добавить />";
		echo "</form>";
	}
?>