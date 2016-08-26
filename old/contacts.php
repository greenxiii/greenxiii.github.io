
<script>

	
function checkForm(obj){
	var return_value = true;

	var mess = obj.mess;
	if(mess.value == ""){
		mess.style.background='#fcc';
		mess.focus();
		return_value = false;
	}
	else{
		mess.style.background='#eee';
	}

	var mail = obj.mail;
	var reg_mail = /^[a-z0-9]+\@{1}[a-z]{1,}\.[a-z]{2,3}$/i;
	if(reg_mail.exec(mail.value) == null){
		mail.style.background='#fcc';
		mail.focus();
		return_value = false;
	}
	else{
		mail.style.background='#eee';
	}

	var name = obj.name;
	var reg_name = /[a-я,0-9]/i;
	if(reg_name.exec(name.value) == null){
		name.style.background='#fcc';
		name.focus();
		return_value = false;
	}
	else{
		name.style.background='#eee';
	}

	return return_value;
}

</script>

<div class="contact">
	<div id=twenty></div>
	<span>
	The easiest way to contact me:
	</span>

	<form action="/mail.php" method="post" onsubmit="return checkForm(this);">

		<h4> Name:</h4><input class="Input" type="text" name="name" id="name" placeholder="Name">
		<h4> Email:</h4><input class="Input" type="text" type="mail" name="mail" id="mail" placeholder="Email">
		<h4> Message:</h4><textarea name="mess" id="mess" placeholder="Message" rows="4" ></textarea>
	    <input type="submit" id=send  value="Send it">
	</form>

	<span>
	But also I have skype: <i><a href="skype:evol121?add">evol121</a></i>,</br>
	E-mail: <i><a href="mailto:green13design@gmail.com?subject=green13">green13design@gmail.com</a></i>
	</span>

	<div id=twenty></div>
</div>
<div class=ordor></div>