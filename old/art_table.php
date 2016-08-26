<?php
	$result_m = mysql_query("SELECT * FROM articles INNER JOIN categories ON articles.cat=categories.id_cat ORDER BY view_cout DESC"); 
	echo "<table border=0 cellspacing=0 id=table>";
	echo "<tr>";
			echo "<td><b>ID</b></td>";
			echo "<td><b>Заголовок</b></td>";
			echo "<td><b>Категория</b></td>";
			echo "<td><b>Дата публикации</b></td>";
			echo "<td><b>Написал</b></td>";
			echo "<td><b>К-во просмотров</b></td>";
			echo "<td></td>";
	echo "</tr>";
	while($row = mysql_fetch_assoc($result_m)){
		echo "<tr class=str_table_art alt=".$row['article_id'].">";
			echo "<td>".$row['article_id']."</td>";
			echo "<td>".$row['article_title']."</td>";
			echo "<td>".$row['name_cat']."</a></td>";
			echo "<td>".$row['creating_date']."</td>";
			echo "<td>".$row['id_creator']."</td>";
			echo "<td>".$row['view_cout']."</td>";
			echo "<input type=hidden value='".$row['full_description']."' />";
			echo "<td class=del_td_art><img src='img/del.png'></td>";
		echo "</tr>";
	}
	echo "</table>";
?>