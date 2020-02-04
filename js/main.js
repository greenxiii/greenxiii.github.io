$(document).ready(function(){
		
	$(".soc a").hover(
		function(){
			var path=$(this).find("img").attr('src').replace('img/', 'img/hover/');
			$(this).find("img").attr("src",path);
		}, function(){
			var path=$(this).find("img").attr('src').replace('img/hover/', 'img/');
			$(this).find("img").attr("src",path);
		}
	);
	
	$(".order").hover(function(){
		$(this).find("span").css("display","block");
	}, function(){
		$(this).find("span").css("display","none");
	});
	
	$("a.ancLinks").click(function () { 
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: destination}, 400);
		return false;
	});
	
	$(window).scroll(function () {
        if ($(this).scrollTop() > 0 && $(window).width()>600) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
	
    $('#scroller').click(function () {
        
		 $('body,html').animate({scrollTop: 0}, 400);
        return false;
    });
	
	$("#send").click(function(){
		
		if(checkForm()){
			$.ajax({
				method: "POST",
				url: "mail.php",
				data: { 
					message: $("#mess").val(),
					mail:$("#mail").val(), 
					name:$("#name").val()
				}
			}).success(function(data){
					console.log(data);
				if(data==="111"){
					$("#mail").val("");
					$("#mess").val("");
					$("#name").val("");
					$("#send").val("Tanks!");
					setTimeout(function(){
						$("#send").val("Send it");
					},1500);
				}
			});
		}
	});
});

function checkForm(){
		var return_value = true;

		var mess = $("#mess");
		if(mess.val() == ""){
			mess.css("background",'#fcc');
			mess.focus();
			return_value = false;
		}
		else{
			mess.css("background",'#f7f7f7');
		}

		var mail = $("#mail");
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


