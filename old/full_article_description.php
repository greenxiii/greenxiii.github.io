<?php
	require_once "config_db.php";
	$id=$_GET['id'];
	$view = mysql_query("UPDATE articles SET view_cout=view_cout+1 WHERE article_id='$id'"); 
	$result = mysql_query("SELECT * FROM articles INNER JOIN creators ON articles.id_creator=creators.id_creator WHERE article_id='$id'"); 
	$row = mysql_fetch_assoc($result);
		echo "<div id=twenty></div>";
		echo "<section>";
		echo "<div id=info_bar>";
			$date_str=$row['creating_date'];
			echo "<span><img src=/old/img/time.png>".date_create($date_str)->Format('d/m/Y')."</span>";
			echo "<span><img src=/old/img/eye.png>".$row['view_cout']."</span>";
		echo "</div>";
		echo "<div id=full_desc>";
			echo "<header>";
				echo "<img src='/art_img/full/".$row['img']."' alt='".$row['article_title']."'/>";
				echo "<div id=title>";
					echo "<h3 id=title>".$row['article_title']."</h3>";
					echo "<a id=back_butt href='/works'><img src='/old/img/back.png'><b>Back</b></a>";
				echo "</div>";
			echo "</header>";
			echo "<div id=twenty></div>";
			echo "<article>";
				echo "<span class=article_description>".$row['full_description']. "</span>";
			echo "</article>";
		echo "</div>";
		echo "</section>";
		echo "<div id=twenty></div>";
?>
