<script>
$(document).ready(function(){
	$.getScript("js/grid.js");
	
//	таблица редактирования пользователей	
	$(".str_table_cr").click(function(){
		var but_text="Сохранить";
		lightbox_show(but_text,1);
		
		var a = new Array();
		$(this).find("td").each(function(){
			a.push($(this).text());
		});
		
		var arr = new Array();
		arr.push($(this).attr("alt"));
		arr.push("<form>\
			ID: <input type=text value='"+a[0]+"' disabled></input><br>\
			Логин:<input type=text value='"+a[1]+"'></input><br>\
			Псевдоним:<input type=text value='"+a[2]+"'></input><br>\
			Mail:<input type=text value='"+a[3]+"'></input><br>\
			Статус:<input type=text value='"+a[4]+"'></input><br>\
			Кол-во статей:<input type=text value='"+a[5]+"'></input><br>\
		</form>");
		container_data(arr);
	});
	
	$(".del_td_cr").click(function(){
		var idd=$(this).parent().attr("alt");
		redata("ajax/d_cr.php",idd);
		return false;
	});
	
	$('body').on('click','#lightbox',function(){
		lightbox_hide();
	});
	
	$('body').on('click','.btn1',function(){
		var j_arr=new Array();
		$(this).parent().parent().find("input").each(function(){
			j_arr.push($(this).val());
		});
		
		var idd;
		idd='{"id":"'+j_arr[0]+'","login":"'+j_arr[1]+'","pen_name":"'+j_arr[2]+'","mail_c":"'+j_arr[3]+'","stat_c":"'+j_arr[4]+'","kol":"'+j_arr[5]+'"}';
		redata("ajax/edit_cr.php",idd);
	});
	
	
	//	таблица редактирования статей	
	$(".str_table_art").click(function(){
		var but_text="Сохранить";
		lightbox_show(but_text,2);
		
		var a = new Array();
		$(this).find("td").each(function(){
			a.push($(this).text());
		});
		a.push($(this).find("input").val());
		
		var arr = new Array();
		arr.push($(this).attr("alt"));
		arr.push("<form>\
			ID: <input type=text value="+a[0]+"></input><br>\
			Заголовок: <input type=text value='"+a[1]+"'></input><br>\
			Категория:<input type=text value='"+a[2]+"'></input><br>\
			Дата публикации:<input type=text value='"+a[3]+"'></input><br>\
			Автор:<input type=text value='"+a[4]+"'></input><br>\
			Кол-во просмотров:<input type=text value="+a[5]+"></input><br>\
			Описание:<br><textarea rows=15 cols=75>'"+a[7]+"'</textarea><br>\
		</form>");
		container_data(arr);
	});
	
	$(".del_td_art").click(function(){
		var idd=$(this).parent().attr("alt");
		redata("ajax/d_art.php",idd);
		return false;
	});
	
	$('body').on('click','#lightbox',function(){
		lightbox_hide();
	});
	
	$('body').on('click','.btn2',function(){
		var j_arr=new Array();
		$(this).parent().parent().find("span input").each(function(){
			j_arr.push($(this).val());
		});
		j_arr.push($(this).parent().parent().find("span textarea").val());
		
		var idd;
		idd='{"id":"'+j_arr[0]+'","title":"'+j_arr[1]+'","cat":"'+j_arr[2]+'","date_art":"'+j_arr[3]+'","creator":"'+j_arr[4]+'","kol":"'+j_arr[5]+'","desc":"'+j_arr[6]+'"}';
		redata("ajax/edit_art.php",idd);
	});
	
});
</script>
<?php
    require_once "config_db.php";
	if(isset($_SESSION['ma4_login']) && isset($_SESSION['ma4_type']) && isset($_SESSION['ma4_password']) && $_SESSION['ma4_type']="s"){
		echo "<div id=twenty></div>";
		echo "<span>Писатели:</span>";
		include 'cr_table.php';
		echo "<div id=twenty></div>";
		echo "<span>Статьи:</span>";
		include 'art_table.php';
	}
?>