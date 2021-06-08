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
		  
		  #mail-overlay
		  {
			  position:fixed;
			  bottom:0;
			  left:0;
			  height:20%;
			  width:100%;
			  background: #FFF;
		  }
		  
		  textarea
		  {
			  width:100%;
		  }
		  
		</style>
		<script>
		function sendswap(ID)
		{
			$("#swp"+ID).load("swapstatus.php?id="+ID);
		}
		
		function mailto(ID, email)
		{
			data={content: document.getElementById("TA").value.replace(/(?:\r\n|\r|\n)/g, '<br />'), mail: email};
			
			$.post("sendmail.php",data).done(function(d)
			{
				console.log(d);
				if(d=="0")$("#swp"+ID).load("swapstatus.php?id="+ID);
				else
				{
					$("#swp"+ID).load("swapstatus.php?id="+ID);
						//alert("WRONG check console log for more");
				}
			});
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
	$conn=new mysqli('localhost','meetitpl_admin','kappakappa13');
	$conn->set_charset("utf8");
	$conn->select_db('meetitpl_tutoring');
	
	
	echo "<table class=\"table table-striped\" >";
	echo "<thead><tr><td>"."NAME"."</td><td>"."SURNAME"."</td><td>"."MAIL"."</td><td>"."ID"."</td><td>"."STATUS [click to change]"."</td><td></td></tr></thead>";
	echo "<tbody>";
	$all=mysqli_query($conn,"SELECT name,surname,mail,id,status FROM meetit WHERE 1 ORDER BY status ASC, id DESC");
	while($row=mysqli_fetch_row($all))
	{
		echo "<tr>\n";
		for($i=0;$i<4;$i++)
		{
			echo "<td><a href=\"displayone.php?id=".$row[3]."\">".$row[$i]."</a></td>\n";
		}
		
		echo "<td><a id=\"swp".$row[3]."\" onclick=\"sendswap(".$row[3].")\" >".$row[4]."</a></td>\n";
		
		echo "<td><a onclick=\"mailto(".$row[3]." , '".$row[2]."')\" >[SEND]</a></td>\n";
		
		echo "</tr>\n";
	}
	echo "</tbody></table>";
?>

	<div id="mail-overlay" style="">
		<textarea id="TA" rows="5"></textarea>
	</div>
</body>	
</html>	
