<?php
	echo "<nav id=menu>";
	echo "<div id=twenty></div>";
	echo "<div id=logo></div>";
	echo "<ul>";
		echo "<li><a href='index.php?page=adminium&padm=articles'>ПУБЛИКАЦИИ</a></li>";
		echo "<li><img src='img/mn.png'></li>";
		if(isset($_SESSION['ma4_type']) && $_SESSION['ma4_type']=="s"){
				echo "<li><a href='index.php?page=adminium&padm=users'>ПОЛЬЗОВАТЕЛИ</a></li>";
				echo "<li><img src='img/mn.png'></li>";
		}elseif(isset($_SESSION['ma4_type']) && $_SESSION['ma4_type']=="c"){
			echo "<li><a href='index.php?page=adminium&padm=inspirit'>ВДОХНОВИТЬСЯ</a></li>";
				echo "<li><img src='img/mn.png'></li>";
		}
		echo "<li><a href='index.php?page=adminium&padm=stat'>СТАТИСТИКА</a></li>";
		echo "<li><img src='img/mn.png'></li>";
		include 'sess_exit.php';
	echo "</ul>";
	echo "</nav>";
	echo "<div id='wrapper'>";
?>