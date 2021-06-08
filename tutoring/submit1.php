<?php
  $message = $_POST['message'];
  $visitorEmail = $_POST['email'];
  $ourEmail = 'pauu.skaa@gmail.com';
  $emailSubject = "Nowe zgłoszenie formularzu MeetIT";
  $emailBody = $visitorEmail."\n".$message;
    
  mail($ourEmail, $emailSubject, $emailBody);
?>

<html>

<head>
<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- bootstrap -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


  <!-- font -->
  <link href="https://fonts.googleapis.com/css?family=Exo" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600" rel="stylesheet">

  <link rel="stylesheet" href="style.css?wtfwfww">
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
</head>
    
<style>

  .sent {
    margin:0;
    padding:0;
    color:#303030;
    font-size:25px;
  }

  .thx {
    color:#aaa;
    font-size:18px;
  }
</style>

<body style="background:black">
  <p class="sent" style="color:white">Wysłano :)</p>
  <p class="thx" style="color:white">Dziękujemy za Twój feedback!</p>
</body>

<html>
