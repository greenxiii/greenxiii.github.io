<script>
$(document).ready(function(){
	$.getScript("js/loading.js");
	$.getScript("js/grid.js");
		
	$(".str_table").click(function(){
		var but_text="Подтвердить";
		lightbox_show(but_text);
		var arr = new Array();
		arr.push($(this).attr("alt"));
		arr.push($(this).attr("href"));
		container_data(arr);
	});
	
	$(".del_td").click(function(){
		var idd=$(this).parent().attr("alt");
		redata("ajax/d_w_be.php",idd);
		return false;
	});
	
	$('body').on('click','#lightbox',function(){
		lightbox_hide();
	});
	
	$('body').on('click','#submit_cont',function(){
		var idd=$("#container span").attr("alt");
		redata("ajax/add_w_be.php",idd);
	});
	
});
</script>
<?php
	if(isset($_SESSION['ma4_login']) && isset($_SESSION['ma4_type']) && isset($_SESSION['ma4_password']) && $_SESSION['ma4_type']="s"){
		$result_m = mysql_query("SELECT * FROM wanna_be"); 
		echo "<table border=0 cellspacing=0 id=table>";
		echo "<tr>";
				echo "<td><b>Логин</b></td>";
				echo "<td><b>Псевдоним</b></td>";
				echo "<td><b>ФИО</b></td>";
				echo "<td><b>Mail</b></td>";
				echo "<td></td>";
		echo "</tr>";
		echo "<div id=twenty></div>";
		echo "<span>Заявки</span>";
		while($row = mysql_fetch_assoc($result_m)){
			echo "<tr class=str_table href='".$row['reason']."' alt=".$row['id_creator'].">";
				echo "<td>".$row['login']."</td>";
				echo "<td>".$row['pen_name']."</td>";
				echo "<td>".$row['fio']."</td>";
				echo "<td>".$row['mail']."</td>";
				echo "<td class=del_td><img src='img/del.png'></td>";
			echo "</tr>";
		}
		echo "</table>";
		
	}
?>