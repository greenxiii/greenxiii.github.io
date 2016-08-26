<!DOCTYPE>
<html>
    <head>
        <meta charset="utf-8"/>
    </head>
    <body>
        <div class="wrapper">
	        <?php
				include 'paypay.php';
			
			echo"<form action=https://merchant.easypay.ua/client/order method=post>";
				echo"<input type=hidden name=merchant_id value=".$merchant_id.">";
				echo"<input type=hidden name=amount value=".$amount.">";
				echo"<input type=hidden name=desc value=".$desc.">";
				echo"<input type=hidden name=order_id value=".$order_id.">";
				echo"<input type=submit value=Оплатить>";
			echo"</form>";
		?>
		</div>
	</body>
</html>

