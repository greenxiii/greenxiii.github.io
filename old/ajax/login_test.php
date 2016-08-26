<?php
    //это переменная содержит имена существующих пользователей
    $log=$_POST['log']; 
    //$phone="worker";
    require_once "../config_db.php";
    $result = mysql_query("SELECT * FROM creators"); 
    $bl=1;
    //проверка существует ли пользователь в массиве $existing_users
    while($row = mysql_fetch_assoc($result)){
        if ($log==$row['login']){
                $bl= 0;
                break;
        }
    }
    if($bl==0){
        echo "no";
    }else{
        echo "yes";
    }
?>
