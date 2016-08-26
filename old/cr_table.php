<?php
	if(isset($_SESSION['ma4_login']) && isset($_SESSION['ma4_type']) && isset($_SESSION['ma4_password']) && $_SESSION['ma4_type']="s"){
		$result_m = mysql_query("SELECT * FROM creators WHERE stat_creator='s' OR stat_creator='c' ORDER BY art_count DESC"); 
		echo "<table border=0 cellspacing=0 id=table>";
		echo "<tr>";
				echo "<td><b>ID</b></td>";
				echo "<td><b>Логин</b></td>";
				echo "<td><b>Псевдоним</b></td>";
				echo "<td><b>Mail</b></td>";
				echo "<td><b>Статус</b></td>";
				echo "<td><b>К-во статей</b></td>";
				echo "<td></td>";
		echo "</tr>";
		while($row = mysql_fetch_assoc($result_m)){
			echo "<tr class=str_table_cr alt=".$row['id_creator'].">";
				echo "<td>".$row['id_creator']."</td>";
				echo "<td>".$row['login']."</td>";
				echo "<td>".$row['pen_name']."</td>";
				echo "<td>".$row['mail']."</a></td>";
				echo "<td>".$row['stat_creator']."</td>";
				echo "<td>".$row['art_count']."</td>";
				echo "<td class=del_td_cr><img src='img/del.png'></td>";
			echo "</tr>";
		}
		echo "</table>";
	}
?>