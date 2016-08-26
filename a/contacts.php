<div class=block id=white>
	<a id=cform><div id=twenty></div></a>
	<h2>Contacts</h2>
	<div id=twenty></div>
	<div class="contact">
		<span>
		The easiest way to contact me:
		</span>

		<form action="/mail.php" method="post" onsubmit="return checkForm(this);">
			<h4> Name:</h4><input class="Input" type="text" name="name" id="name" placeholder="Name">
			<h4> Email:</h4><input class="Input" type="email" type="mail" name="mail" id="mail" placeholder="Email">
			<h4> Message:</h4><textarea name="mess" id="mess" placeholder="Something good" rows="4" ></textarea>
			<div id=twenty></div>
			<input type="submit" id=send  value="Send it">
		</form>
	</div>
	<div id=twenty></div>
</div>