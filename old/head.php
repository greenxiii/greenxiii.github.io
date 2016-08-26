<?php
	echo "<nav id=menu>";
	if(!isset($_GET['page']) || $_GET['page']=="home"){
		echo "<div id=logo1><a href='http://green13.com.ua/'><img src='/old/img/logo1.png' style='width:100%;' alt='GreenXIII design solutions(Logo, Web)'></a></div>";
	}else{
		echo "<div id=twenty></div>";
		echo "<div id=logo><a href='http://green13.com.ua/'><img src='/old/img/logo.png' style='width:100%;' alt='GreenXIII design solutions(Logo, Web)'></a></div>";
	}
	echo "<ul>";
		
//	echo "<li>COMING SOON . . .</li>";
		echo "<li><a href='/old/works'>WORKS</a></li>";
		echo "<li><img src='/old/img/mn.png'></li>";
		echo "<li><a href='/old/about'>ABOUT</a></li>";
		echo "<li><img src='/old/img/mn.png'></li>";
		echo "<li><a href='/old/contacts'>CONTACTS</a></li>";

	echo "</ul>";
	echo "</nav>";
	echo "<div id='wrapper'>";
?>