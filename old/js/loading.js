function loading_show(){
	$("body").append("<div id=load><img width=100% src='ajax/img/loading.gif'></div>");
	$("#load").css({
		"position":"fixed",
		"top":"50%",
		"left":"50%",
		"margin-top":"-50px",
		"margin-left":"-50px",
		"z-index":"999",
		"background":"#fff",
		"border":"4px solid #000",
		"border-radius":"50%",
		"background":"rgb(100,200,100)",
		"width":"100px",
		"height":"100px"
	});
}
	
function loading_hide(){
	$("body").find("#load").remove();
}