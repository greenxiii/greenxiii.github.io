<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>FFF Crew</title>
	<link href='https://fonts.googleapis.com/css?family=Vollkorn|Open+Sans|Lato' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/global.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="js/js.js"></script>
</head>
<body>
	<div class="left">
		<div class="logo"></div>
	</div>
	<div class="right">
		<nav>
			<a href="/" class="main">fff crew</a>
			<ul>
				<li><a href="?page=works">works</a></li>
				<li><a href="?page=process">process</a></li>
				<!-- <li><a href="?page=careers">careers</a></li> -->
				<!-- <li><a href="?page=blog">blog</a></li> -->
			</ul>
			<a href="#" class="mobile_menu">menu</a>
			<a href="?page=contact" class="cta">start your project</a>
			<div class="resp">
				<ul>
					<li><a href="/">home</a></li>
					<li><a href="?page=works">works</a></li>
					<li><a href="?page=process">process</a></li>
					<!-- <li><a href="?page=careers">careers</a></li> -->
					<!-- <li><a href="?page=blog">blog</a></li> -->
					<li><a href="?page=contact" class="cta">start your project</a></li>
				</ul>
			</div>
		</nav>
		<section>
			<?php 
				if(!isset($_GET['page'])) {
					include("about.php");
					return;
				}
				if(file_exists($_GET['page'].".php"))
					include($_GET['page'].".php");
			?>
		</section>
	</div>
</body>
</html>