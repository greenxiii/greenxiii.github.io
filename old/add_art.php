<script src="js/tinymce/tinymce.min.js"></script>
<script type="text/javascript">
window.onload = function()
{
	tinymce.init({
    selector: "textarea",
	plugins : "image",
	force_p_newlines : false,
    force_br_newlines : true,
    convert_newlines_to_brs : false,
	forced_root_block : false
});
}
</script>
<?php
function transLate($string)
{
	$arr = array( 
	   'А' => 'A' , 'Б' => 'B' , 'В' => 'V'  , 'Г' => 'G', 
	   'Д' => 'D' , 'Е' => 'E' , 'Ё' => 'JO' , 'Ж' => 'ZH', 
	   'З' => 'Z' , 'И' => 'I' , 'Й' => 'JJ' , 'К' => 'K', 
	   'Л' => 'L' , 'М' => 'M' , 'Н' => 'N'  , 'О' => 'O', 
	   'П' => 'P' , 'Р' => 'R' , 'С' => 'S'  , 'Т' => 'T', 
	   'У' => 'U' , 'Ф' => 'F' , 'Х' => 'KH' , 'Ц' => 'C', 
	   'Ч' => 'CH', 'Ш' => 'SH', 'Щ' => 'SHH', 'Ъ' => '"', 
	   'Ы' => 'Y' , 'Ь' => '\'', 'Э' => 'EH' , 'Ю' => 'JU', 
	   'Я' => 'JA', 
	   'а' => 'a' , 'б' => 'b'  , 'в' => 'v' , 'г' => 'g', 'д' => 'd', 
	   'е' => 'e' , 'ё' => 'jo' , 'ж' => 'zh', 'з' => 'z', 'и' => 'i', 
	   'й' => 'jj', 'к' => 'k'  , 'л' => 'l' , 'м' => 'm', 'н' => 'n', 
	   'о' => 'o' , 'п' => 'p'  , 'р' => 'r' , 'с' => 's', 'т' => 't', 
	   'у' => 'u' , 'ф' => 'f'  , 'х' => 'kh', 'ц' => 'c', 'ч' => 'ch', 
	   'ш' => 'sh', 'щ' => 'shh', 'ъ' => '"' , 'ы' => 'y', 'ь' => '\'', 
	   'э' => 'eh', 'ю' => 'ju' , 'я' => 'ja'
	); 
	$key = array_keys($arr);
	$val = array_values($arr);
	$translate = str_replace($key, $val, $string); 
	return $translate; 
}

function recize_img($o_file, $newname, $width, $height)
{
	list($width_orig, $height_orig) = getimagesize($o_file);
	/*$ratio_orig = $width_orig/$height_orig;
	if ($width/$height > $ratio_orig) {
		$width = $height*$ratio_orig;
	} else {
		$height = $width/$ratio_orig;
	}*/
	
	$width=400;
	 $width_orig= $width_orig-200;
	$image_p = imagecreatetruecolor($width, $height);
	$image = imagecreatefromjpeg($o_file);
	imagecopyresampled($image_p, $image, 0, 0, 100, 0, $width, $height, $width_orig, $height_orig);
	imagepng($image_p, $newname);
}


// Добавление новостей
if(isset($_POST['publicate'])){
	$arr=array('a','b','c','q','w','e','r','t','y','u','i','o','p','s','d','f','g','h','j','k','l','z','x','v','n','m','1','2','3','4','5','6','7','8','9','0',);
	$rand="";
	for ($i = 0; $i < 10; $i++){
		$rand.=$arr[rand(0, sizeof($arr)-1)];
	}
	//Загрузка изображений************************************************
	$allowedExts = array("jpg", "jpeg", "gif", "png");
	$filename=$_FILES['file']['name'];
	$filename=transLate($filename);
	
	$extension_explode = explode(".", $filename);
	$extension = end($extension_explode); 
	if ((($_FILES["file"]["type"] == "image/gif") || ($_FILES["file"]["type"] == "image/jpeg") || ($_FILES["file"]["type"] == "image/png") || ($_FILES["file"]["type"] == "image/pjpeg")) && ($_FILES["file"]["size"] < 800*5*300) && in_array($extension, $allowedExts)){
		if ($_FILES["file"]["error"] > 0){
			echo "Return Code: " . $_FILES["file"]["error"] . "<br>"; 
		}else{
			if (file_exists("art_img/" . $filename)){ 
				echo $filename . " already exists. "; 
			}else{
				$c_file=$_FILES["file"]["tmp_name"];
				//Загрузка файла
				$fn=$rand.$filename;
				if(move_uploaded_file($c_file,"art_img/full/" . $rand.$filename)){
					recize_img($o_file="art_img/full/" . $rand.$filename, $newname="art_img/" . $rand.$filename, $width=564, $heigh=150);
				}//редактируем фото
				$v_ph=", v_photo= '".$fn."'";
				
			}
		}
	}else{ 
		echo "Invalid file<br>"; 
		print_r($_FILES);
	}
		
	$id_ar=mt_rand(1000000000, 9999999999);
	$id_cr= $_SESSION['ma4_login'];
	$title=$_POST['art_title'];
	$title=strip_tags($title);
	$description=$_POST['full_desc'];
	$cat=$_POST['categories'];
	$date=date("Y-m-d H-i-s");
	$add_a=mysql_query("INSERT INTO articles SET article_id='$id_ar', id_creator='$id_cr', article_title='$title', full_description='$description', cat='$cat' , creating_date='$date', img='$fn'") or die (mysql_error());
	if($add_a) mysql_query("UPDATE creators SET art_count=art_count+1 WHERE id_creator=$id_cr"); 
	echo "<script>document.location.replace('index.php?page=adminium');</script>";
}

//Форма добавления новостей
	echo "<form method='post' enctype='multipart/form-data' class='add_art'>";
		echo "<h3>Добавить новости:</h3>";
		echo "<label>Рубрика:</label><br>";
		echo "<select name=categories>";
			echo "<option value='1'>Logo</option>";
			echo "<option value='2'>Web</option>";
			echo "<option value='3'>Print</option>";
			echo "<option value='0'>About</option>";
		echo "</select><br>";
		echo "<label>Изображение:</label><br>";
		echo "<input type='file' name='file' id='file' ><br>";
		echo "<label>Заголовок:</label><br>";
		echo "<input  class=frm type='text' name='art_title' required><br>";
		echo "<label>Полный текст новости:</label><br>";
		echo "<textarea type='text' id=full_desc name='full_desc'  maxlength='5000' cols=80 rows=10></textarea><br>";
		echo "<input type=submit class=btn name=publicate value=Публиковать />";
	echo "</form>";
 ?>