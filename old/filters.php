<?php
    //фильтр категорий
/*	echo "<div id=filter>";
	$result_cat = mysql_query("SELECT * FROM categories");
	echo "<form  action='' method=post>";
		echo "<div class=sel><select name=cat_orders >";
			echo "<option value=''>Все</option>";
			while($row_cat = mysql_fetch_assoc($result_cat)){  
				echo "<option value=".$row_cat['id_cat'].">".$row_cat['name_cat']."</option>";
			}
		echo "</select></div>";
		echo "<input id=button name=submit_f type=submit value=Фильтр></input>";
	echo "</form>";
	echo "</div>";*/
	//обработчики фильтров//
	// $sql_cat="SELECT * FROM  articles INNER JOIN categories ON articles.id_cat=categories.id_cat WHERE article_id!=''";
	$sql_cat="SELECT * FROM  articles WHERE article_id!='' AND cat!=0";
	/*
	//фильтр по категориям
	if(isset($_POST['submit_f'])){
		if($_POST['cat_orders']!=""){
			$cat_orders=$_POST['cat_orders'];
			$sql_cat.=" AND articles.id_cat = '$cat_orders'";
		}
    }*/
?>