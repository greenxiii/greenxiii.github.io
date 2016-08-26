$(document).ready(function(){
	$('.cont').hide();
	$('.article').hover(function(){
		$(this).children('.cont').slideDown();
	},function(){
		$(this).children('.cont').slideUp();
	});		
});