<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<title>音声認識チャット</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<?php
 	$url_kisei = "http://www.jartic.or.jp/_json/M_2001_301.json";
 	$url_time = "http://www.jartic.or.jp/_json/M_2001_601.json";
 	$kisei_text = file_get_contents($url_kisei);
 	$time_text = file_get_contents($url_time);
 	?>
	<script type="text/javascript">
	var text;
	//JARTIC情報取得
		//旅行時間取得
		text = <?php echo json_encode($time_text) ?>;
		console.log(text);
		text=JSON.parse(text);

		//規制情報取得
		text_kisei = <?php echo json_encode($kisei_text) ?>;
		console.log(text_kisei);
		text_kisei=JSON.parse(text_kisei);
		//alert(text_kisei.item[0][0]);

		numoftext_kisei = text_kisei.item.length;
		//alert("kisei:"+numoftext_kisei);
	</script>
	<script src="liveinfo_main.js"></script>
	</head>

<body onload="vr_function()">
	<br>
	<div id="wrapper">
		<img src="icon.png" width="100px">
		<p class = "answer_comment">こんにちは。<br>今日はどのようなご用件ですか？</p>
	</div>
</body>

</html>
