<script>
	function hordor(){
		//подсчет выталкивающего блока
		var ordor_h=0;
		ordor_h=ordor_h+$(document).height()-$('#menu').height()-$('footer').height()-$('#wrapper').height();
		$('.ordor').css('height', ordor_h);
	
	}
	$(window).resize(function(){hordor()});
	$(window).load(function(){hordor() });
</script>
<?php
	echo "<div class=ordor></div>";
?>