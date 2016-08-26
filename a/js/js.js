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
		$('body').animate( { scrollTop: destination }, 400 );
		return false;
	});
	
	 $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

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
