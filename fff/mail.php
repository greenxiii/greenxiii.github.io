<?php

if (isset($_REQUEST['name']) && isset($_REQUEST['mail']) && isset($_REQUEST['message'])){
	$mess = $_REQUEST['message'];
	$email = $_REQUEST['mail'];
	$name = $_REQUEST['name'];
	
	$message = "<html><head><style type='text/css'>";
	$message .="td{border:1px solid #262626;border-collapse: collapse;border-spacing:0;padding:5px}";
	$message .="table{border-collapse: collapse;border-spacing:0;margin-bottom:20px}";
	$message .="tr{border-collapse: collapse;border-spacing:0}";
	$message .="</style></head><body>";
	
	$message .= "<table><tr>";
	$message .="<td><b>Name:</b></td><td><b>".$name."</b></td></tr>";
	$message .= "<tr><td>Email:</td><td>".$email."</td></tr>";
	$message .= "<tr><td>Message:</td><td>".$mess."</td></tr>";
	$message .= "</table></body></html>";
	
	$to  = "green13design@gmail.com";
	$subject = 'New happy message from portfolio!';
	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From: noreply@fffcrew.com' . "\r\n" .'Reply-To: noreply@fffcrew.com' . "\r\n" . 'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
	mail("busterx404@gmail.com", $subject, $message, $headers);
	echo "111";
}
?>