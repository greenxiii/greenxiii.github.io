<script>
	$(document).ready(function(){
//подсчет выталкивающего блока
			var ordor_h=0;
			ordor_h=ordor_h+$(document).height()-$(table).height()-$("#menu").height()-84;
			$('.ordor').css('min-height', ordor_h);
	});
</script>
<?php
	$log=$_SESSION['ma4_login'];
	$result_m = mysql_query("SELECT * FROM articles INNER JOIN categories ON articles.cat=categories.id_cat WHERE id_creator=$log ORDER BY view_cout DESC");

	$cout=mysql_num_rows($result_m);
	$row = mysql_fetch_assoc($result_m);
	echo "Всего написано: ".$cout;
	echo "<br>Всего просмотров: ".$cout;

	echo "<table border=0 cellspacing=0 id=table>";
	echo "<tr>";
			echo "<td><b>Title</b></td>";
			echo "<td><b>Category</b></td>";
			echo "<td><b>Date</b></td>";
			echo "<td><b>V. Cout</b></td>";
	echo "</tr>";
	while($row){
		echo "<tr>";
			echo "<td>".$row['article_title']."</td>";
			echo "<td>".$row['name_cat']."</a></td>";
			echo "<td>".$row['creating_date']."</td>";
			echo "<td>".$row['view_cout']."</td>";
		echo "</tr>";
	}
	echo "</table>";
	echo "<div class=ordor></div>";
?>