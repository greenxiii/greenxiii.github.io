<?php
    include 'config_db.php';
    if (isset($_POST['enter'])){
        $login=$_POST['log'];
        $password=SHA1($_POST['e_password']);
        $query=mysql_query("SELECT * FROM creators WHERE login = '$login'");
        $user_date = mysql_fetch_array($query);          
        if ($user_date['password'] == $password){
            $_SESSION['ma4_login'] = $user_date['id_creator'];
            $_SESSION['ma4_type']=$user_date['stat_creator'];
            $_SESSION['ma4_password']=$password;
			echo "<script>window.location.reload()</script>";
            exit;
        }else{
            echo "Wrong password or login!";
        }
    }
?>

<form method="post" action="">
    <input id="e_log"  type="text"  name="log" placeholder="Логин" required /><br>
    <input id="e_pas" type="password" name="e_password" placeholder="Пароль" required /><br>
    <input type="submit" name="enter" id=button value="Войти" />
</form>