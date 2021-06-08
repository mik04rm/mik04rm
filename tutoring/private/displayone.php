<html>
	<head>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<style>
		  thead
		  {
			  font-weight: bold;
		  }
		  body
		  {
			  font-size: 1.5vw;
		  }
		</style>
		<script>
		function sendswap(ID)
		{
			$("#stat").load("swapstatus.php?id="+ID);
		}
		</script>
	</head>
	<body>
<?php
	//$mail=htmlspecialchars_decode($_GET['mail']);
	//$content=str_replace('%','&',$_GET['content']);
	//$content=str_replace('_',' ',htmlspecialchars_decode($content));

    //$headers[] = 'MIME-Version: 1.0';
    //$headers[] = 'Content-type: text/html; charset=iso-8859-1';
    //$headers[] = 'From: mailer@meetit.pl';
   
   function test_input($data) 
	{
	   $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}
	
	function normalise($data)
	{
		$data=str_replace('%','&',$data);
		$data=str_replace('_',' ',$data);
		$data=str_replace('&hline;','|',$data);
		return $data;
	}
	$conn=new mysqli('localhost','meetitpl_admin','kappakappa13');
	$conn->set_charset("utf8");
	$conn->select_db('meetitpl_tutoring');
	
	$id=$_GET["id"];
	
	echo "<a href=\"displayall.php\">GO BACK</a><br><br>";
	
	$all=mysqli_query($conn,"SELECT * FROM meetit WHERE id=".$id.";");
	while($row=mysqli_fetch_row($all))
	{
		echo "Imię: ".normalise($row[0])."<br>";
		echo "Nazwisko: ".normalise($row[1])."<br>";
		echo "Mail: ".normalise($row[2])."<br>";
		echo "FB: ".normalise($row[3])."<br>";
		echo "Czas: ".normalise($row[5])."<br>";
		echo "ID: ".normalise($row[6])."<br>";
		echo "Status: <a id=\"stat\" onclick=\"sendswap(".$row[6].")\">".normalise($row[6])."</a><br><br>";
		echo "<b>ODPOWIEDZI:</b><br><br>";
		$odp=explode("|",$row[4]);
		for($i=0;$i<9;$i++)echo ($i+1).". ".normalise($odp[$i])."<br>";
	}
?>
</body>	
</html>	
