<?php
	function test_input($data) 
	{
	   $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data,ENT_QUOTES);
	   return $data;
	}

    /*$url = 'https://www.google.com/recaptcha/api/siteverify';
	$data = array('secret' => '6Lf_OjUUAAAAADuwAuX9mFTsu_RrPxqGTgCwghh9', 'response' => $_POST['cap']);

	// use key 'http' even if you send the request to https://...
	$options = array(
		'http' => array(
			'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
			'method'  => 'POST',
			'content' => http_build_query($data)
		)
	);
	
	$context  = stream_context_create($options);
	$result = file_get_contents($url, false, $context);*/
	$isok=true;
	$ans="";
	for($chuj=0;$chuj<=8;$chuj++)$ans.=$_POST["q".$chuj]."|";
	//echo $ans;
	
	//if($result["success"]==true)
	if(true)
	{
	$conn=new mysqli('localhost','meetitpl_admin','kappakappa13');
	$conn->set_charset("utf8");
	$conn->select_db('meetitpl_tutoring');
		
		$name=test_input($_POST['name']);
		$surname=test_input($_POST['surname']);
		$mail=test_input($_POST['email']);
		$fb=test_input($_POST['fb']);
		$answers=test_input($ans);
		$num=2137*6+mysqli_fetch_row(mysqli_query($conn,"SELECT COUNT(*) FROM meetit"))[0];
		//echo "<br>"."INSERT INTO meetit (name,surname,mail,answers,id) VALUES ('".$name."','".$surname."','".$mail."','".$answers."','".$num."')";
		$q=mysqli_query($conn,"INSERT INTO meetit (name,surname,mail,facebook,answers,id,status) VALUES ('".$name."','".$surname."','".$mail."','".$fb."','".$answers."','".$num."','APPENDING')");
	}
	else $isok=false;
   
    if($isok)
	{ 
		echo "<div class=\"alert alert-success alert-dismissable fade in\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>Formularz został zapisany. Jego kod to: ".$num."</div>";
	}
	else
	{
		echo "<div class=\"alert alert-danger alert-dismissable fade in\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>Coś się zepsuło, spróbuj ponownie później.</div>";
	}
?>		
