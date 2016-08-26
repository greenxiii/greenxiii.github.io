<script>
	$(window).load(function(){
//подсчет выталкивающего блока
		var ordor_h=0;
		ordor_h=ordor_h+$(document).height()-$('#menu').height()-$('.articles').height()-$('#pagest').height()-$('.foot').height()-$('#twenty').height();
		$('.ordor').css('min-height', ordor_h);
	});
	
</script>
<?php
    require_once "config_db.php";
    include "filters.php";
    echo "<div id=twenty></div>";
 
	$result = mysql_query($sql_cat) or die(mysql_error()); 
	// Определяем общее число сообщений в базе данных  
	$posts = mysql_num_rows($result);
	//Число записей на странице
	$num = 9;
	if(!isset($_GET['orders_page']) || !is_numeric($_GET['orders_page'])) $orders_page=1;
	else $orders_page = $_GET['orders_page'];
	// Находим общее число страниц  
	$total = intval(($posts - 1) / $num) + 1;
	// Определяем начало сообщений для текущей страницы  
	$orders_page = intval($orders_page);  
	// Если значение $orders_page меньше единицы или отрицательно, переходим на первую страницу. А если слишком большое, то переходим на последнюю
	if(empty($orders_page) or $orders_page < 0) $orders_page = 1;
	if($orders_page > $total) $orders_page = $total;
	// Вычисляем начиная к какого номера следует выводить сообщения  
	$start = $orders_page * $num - $num;
	// Выбираем $num сообщений начиная с номера $start
	$result_query_str=$sql_cat." LIMIT $start, $num";
	$result_query = mysql_query($result_query_str) or die(mysql_error());
	$n=mysql_num_rows($result_query);
	if ($n<$num)$num=$n;
	//ошибка при отсутствии заказов
	if(!$n){
		echo "<div class=articles>";
		echo "Нет робот. Подождите немного и они обязательно появятся.";
		echo "</div>";
		//ordorlist
		echo "<div class=ordor></div>";
	}else{
		//Занесение данных в массив.
		while ($postrow[] = mysql_fetch_array($result_query));
		echo "<div class=articles>";
		for($i = 0; $i < $num; $i++){
			echo "<a href='/old/works/".$postrow[$i]['article_id']."' >";
				echo "<div class='article'>";
					echo "<span id='art_title' class='cont'>".$postrow[$i]['article_title']."</span>";
					echo "<img src='/old/art_img/".$postrow[$i]['img']."' alt='".$postrow[$i]['article_title']."'>";
				echo "</div>";	
			echo "</a>";
		}
		echo "</div>";
		$orders_page2left=$orders_page2right=$pervorders_page=$orders_page1left=$orders_page1right=$nextorders_page="";
		 
		// Находим две ближайшие станицы с обоих краев, если они есть  
		if($orders_page - 2 > 0) $orders_page2left = ' <a href= ./index.php?orders_page='. ($orders_page - 2) .'>'. ($orders_page - 2) .'</a> ';
		if($orders_page - 1 > 0) $orders_page1left = '<a href= ./index.php?orders_page='. ($orders_page - 1) .'>'. ($orders_page - 1) .'</a> ';  
		if($orders_page + 2 <= $total) $orders_page2right = ' <a href= ./index.php?orders_page='. ($orders_page + 2) .'>'. ($orders_page + 2) .'</a>';  
		if($orders_page + 1 <= $total) $orders_page1right = ' <a href= ./index.php?orders_page='. ($orders_page + 1) .'>'. ($orders_page + 1) .'</a>'; 
		//ordorlist
		if ($total<2)$orders_page="";
		echo "<div class=ordor></div>";
		
		// Вывод меню  
		echo "<div id=pagest>". $pervorders_page.$orders_page2left.$orders_page1left.'<b>'.$orders_page.'</b>'.$orders_page1right.$orders_page2right.$nextorders_page."</div>";  
	}
?>