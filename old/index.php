<!DOCTYPE html>
<?php
	if(!isset($_GET['page'])){
		$page='home';
	}else{
		$page=$_GET['page'];
	}
?>
<html xmlns:og="http://ogp.me/ns#">
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
		<link rel="image_src" href="http://green13.com.ua/img/nnn.png" />
		<meta property="og:site_name" content="GreenXIII" />
		<meta property="og:image" content="http://green13.com.ua/img/nnn.png" />		
<!-- Yandex.Metrika counter -->
		<script type="text/javascript">
		(function (d, w, c) {
			(w[c] = w[c] || []).push(function() {
				try {
					w.yaCounter23882389 = new Ya.Metrika({id:23882389,
							webvisor:true,
							clickmap:true,
							trackLinks:true,
							accurateTrackBounce:true});
				} catch(e) { }
			});
		
			var n = d.getElementsByTagName("script")[0],
				s = d.createElement("script"),
				f = function () { n.parentNode.insertBefore(s, n); };
			s.type = "text/javascript";
			s.async = true;
			s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";
		
			if (w.opera == "[object Opera]") {
				d.addEventListener("DOMContentLoaded", f, false);
			} else { f(); }
		})(document, window, "yandex_metrika_callbacks");
		</script>
		<!-- /Yandex.Metrika counter -->
		
		<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48090440-1', 'green13.com.ua');
  ga('send', 'pageview');

</script>
		<meta name='yandex-verification' content='70aed98a4cb731a3'>
		<meta name="google-site-verification" content="HSmaYllaEoecX7BxzzK-xH4Td2ZziApMTGeIZC-CxF0">
		<link rel="stylesheet" type=text/css href="/old/s.css">
		<link rel="stylesheet" type=text/css href="/old/sm.css">
		<script type="text/javascript" src ="/old/js/jquery.js"></script>
		<script type="text/javascript" src ="/old/js/articles.js"></script>
		<title>
			<?php
				switch ($page){
					case 'home':
						echo "GreenXIII - Design solutions";
						break;
					case 'full':
						require_once "config_db.php";
						$id=$_GET['id'];
						$result = mysql_query("SELECT article_title FROM articles WHERE article_id='$id'");
						$row_t=mysql_fetch_row($result);
						echo $row_t[0]."\GreenXIII";
						break;
					case 'contacts':
						echo "Contacts\GreenXIII";
						break;
					case 'about':
						echo "About\GreenXIII";
						break;
					case 'works':
						echo "Works\GreenXIII";
						break;
				}
			?>
		</title>
	</head>
<body>
<?php
	switch ($page){
		case 'home':
			include 'head.php';
			include 'home.php';
			break;
		case 'works':
			include 'head.php';
			include 'articles_list.php';
			break;
		case 'contacts':
			include 'head.php';
			include 'contacts.php';
			break;
		case  'about':
			include 'head.php';
			include 'about.php';
			break;
		case 'enter':
			include 'w_enter.php';
			break;
		case 'full':
			include 'head.php';
			include 'full_article_description.php';
			break;
	}
	echo "</div>";
	include 'footer.php';
?>
</body>
</html>