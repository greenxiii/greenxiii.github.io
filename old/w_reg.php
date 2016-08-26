<script type="text/javascript" src="../js/jquery.maskedinput-1.2.2.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        //Маска ввода телефона
        $.mask.definitions['~']='[+-]';
        $('#phone').mask('(999) 999-99-99');
        
        $("#phone").change(function(){
            //Проверить существует ли имя
            $.post("prof_test/testingLogin.php",{ phone:$(this).val()} ,function(data){
                if(data=='no'){ 
                    //если имя не доступно
                    $("#msgbox").fadeTo(200,0.1,function(){                         
                        $(this).removeClass().addClass('phone_err').html('Этот номер уже занят').fadeTo(900,1);
                        $("#phone").focus();
                    });
                }else{
                    $("#msgbox").fadeTo(200,0.1,function(){ 
            //тут прописывается сообщение о доступности имени
                        $(this).removeClass().addClass('phone_ok').html('Номер свободен').fadeTo(900,1); 
                    });
                }
            });
            
        });

    });    
</script>  
<?php    
   include 'config_db.php';
    //РЕГИСТРАЦИЯ (Исполнитель)
    if (isset($_POST['submit'])){
        //Тут будет проверка на занятость логинов 
        $user_phone=$_POST['phone'];
        $mail=$_POST['mail'];
        $password=$_POST['pass'];
        $password=SHA1($password); //Хэшируем пароль

        $user_phone=strip_tags($user_phone);
        $mail=strip_tags($mail);
        //генерация id worker
        while(true){
            $id_worker=mt_rand(1000000,9999999);
            $result = mysql_query ("SELECT id_worker FROM workers WHERE id_worker ='$id_worker'");
            if (mysql_num_rows($result) <= 0)break;
        }
        //ВПИСКА В БД ИСПОЛНИТЕЛЕЙ
        $query=mysql_query("INSERT INTO workers SET phone='$user_phone',id_worker='$id_worker',password='$password',mail='$mail',stat_worker='n'") or die("ошибка регистрации");
        session_start();
        $_SESSION['w_id'] = $id_worker;
        $_SESSION['stat_worker']='n';
        $_SESSION['_pass_worker']=$password;
        header("Location: index.php");
    }
?>
<form method="post" action="">
    <label>Номер мобильного:</br></label>
    <input class="reg"  id="phone" type="text" name="phone" placeholder="Номер мобильного" required />
    <span id="msgbox"></span></br>
    <label>Пароль:</br></label>
    <input class="reg" type="password" name="pass" placeholder="Пароль" maxlength='40' required /><p>
    <label>E-mail:</br></label>
    <input class="reg" type="text" name="mail" placeholder="E-mail" maxlength='50' required /><br>
    <input type="submit" name="submit" value="Сохранить" />
</form>
