<?php
	$conn=new mysqli('localhost','meetitpl_admin','kappakappa13');
	$conn->set_charset("utf8");
	$conn->select_db('meetitpl_tutoring');
			
	$status=mysqli_fetch_row(mysqli_query($conn,"SELECT status FROM meetit WHERE id='".$_GET["id"]."'"))[0];
	
	if($status=="APPENDING")$status="MAILED";
	else if($status=="MAILED")$status="RESOLVED";
	else if($status=="RESOLVED")$status="TROLL";
	else if($status=="TROLL")$status="APPENDING";
	
	mysqli_query($conn,"UPDATE meetit SET status='".$status."' WHERE id='".$_GET["id"]."'");
	echo $status;
?>		
