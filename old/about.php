<script>
	$(window).load(function(){
//подсчет выталкивающего блока
		var ordor_h=0;
		ordor_h=ordor_h+$(document).height()-$('#menu').height()-$('#full_desc').height()-$('.foot').height()-$('#twenty').height();
		$('.ordor').css('min-height', ordor_h);
	});
	
</script>
<?php
require_once "config_db.php";
$view = mysql_query("UPDATE articles SET view_cout=view_cout+1 WHERE cat='0'"); 
$result = mysql_query("SELECT * FROM articles WHERE cat='0'"); 
$row = mysql_fetch_assoc($result);
echo "<div id=full_desc>";
	echo "<div id=twenty></div>";
	echo "<img src='art_img/full/".$row['img']."'/>";
	echo "<div id=twenty></div>";
	echo "<span class=article_description>".$row['full_description']. "</span>";
echo "</div>";
echo "<div id=twenty></div>";
?>
<div class=ordor></div>