$(document).ready(function(){

	$("#submit").click(function(){
		if(!checkForm()) return;
		$.ajax({
			method: "POST",
			url: "mail.php",
			data: { 
				message: $("#message").val(),
				mail:$("#email").val(), 
				name:$("#name").val()
			}
		}).success(function(data){
				console.log(data);
			if(data==="111"){
				$("#email").val("");
				$("#message").val("");
				$("#name").val("");
				$("#submit").val("Tanks!");
				setTimeout(function(){
					$("#submit").val("GO!");
				},1500);
			}
		});
	});
	
	$(".mobile_menu").click(function(){
		$(".resp").show();
		return false;
	});

});

function checkForm(){
		var return_value = true;

		var mess = $("#message");
		if(mess.val() == ""){
			mess.css("background",'#fcc');
			mess.focus();
			return_value = false;
		}
		else{
			mess.css("background",'#f7f7f7');
		}

		var mail = $("#email");
		var reg_mail = /^[a-z0-9]+\@{1}[a-z]{1,}\.[a-z]{2,3}$/i;
		if(reg_mail.exec(mail.val()) == null){
			mail.css("background",'#fcc');
			mail.focus();
			return_value = false;
		}
		else{
			mail.css("background",'#f7f7f7');
		}

		var name = $("#name");
		var reg_name = /[a-я,0-9]/i;
		if(reg_name.exec(name.val()) == null){
			name.css("background",'#fcc');
			name.focus();
			return_value = false;
		}
		else{
			name.css("background",'#f7f7f7');
		}
		return return_value;
	}


