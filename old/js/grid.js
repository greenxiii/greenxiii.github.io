$.getScript("js/loading.js");

function lightbox_show(but_text,ngrid){
	if (typeof ngrid == 'undefined')ngrid="";
	$("body").append("<div id=container><span></span><center><div id=submit_cont class=btn"+ngrid+" >"+but_text+"</div></center></div><div id=lightbox></div>");
	$("#container").css({
		"position":"fixed",
		"display":"none",
		"z-index":"999",
		"top":"6%",
		"left":"50%",
		"color":"#000",
		"margin-left":"-350px",
		"width":"700px",
		"height":"500px",
		"border":"6px solid #000",
		"padding":"5px",
		"background":"#efe"
	});
	
	$("#lightbox").css({
		"display":"none",  
		"background":"#000000",  
		"opacity":"0.4",
		"position":"fixed",  
		"top":"0px",
		"left":"0px",
		"width":"100%",
		"height":"100%", 
		"z-index":"998",
		"cursor":"pointer"
	});
	$('#lightbox').fadeIn('slow');
	$('#container').fadeIn('slow');
}

function lightbox_hide(){
	$('#lightbox').fadeOut('slow');
	$('#container').fadeOut('slow');
	$("body").find('#lightbox').remove();
	$("body").find('#container').remove();
}

//вывод информации в контейнере
function container_data(arr){
	$("#container span").attr("alt",arr[0]);
	$("#container span").html("");
	$("#container span").html(arr[1]);
}

function redata(obr,idd){
	loading_show();
	$.ajax({
		type: "POST",
		data: {idd:  idd},
		url: obr,
		success: function(data){
			if(data){
				lightbox_hide();
				location.reload();
			}else{
				lightbox_hide();
				loading_hide();
			}
		}
	});
}