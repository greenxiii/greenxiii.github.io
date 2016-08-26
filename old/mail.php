<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['mail'])) {$email = $_POST['mail'];}
if (isset($_POST['mess'])) {$mess = $_POST['mess'];}

$to = "green13design@gmail.com"; 
$headers = "Content-type: text/plain; charset = utf-8";
$subject = "Сообщение с портфолио";
$message = "Имя пославшего: $name \nЭлектронный адрес: $email \nСообщение: $mess";
$send = mail ($to, $subject, $message, $headers);
echo "<script type=text/javascript>window.location = 'http://green13.com.ua/' </script>";
?>