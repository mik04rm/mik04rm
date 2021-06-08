<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions

    //Server settings
    //$mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'serwer1803558.home.pl';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'kontakt@meetit.pl';                 // SMTP username
    $mail->Password = 'kappakappa13';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to
	$mail->CharSet = "UTF-8";
	
    //Recipients 
    $mail->setFrom('kontakt@meetit.pl', 'MeetIT');
    $mail->addAddress($_POST['mail'], $_POST['name']);     // Add a recipient

    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);              
	// Set email format to HTML
    $mail->Subject = "MeetIT - odpowiedź";
    $mail->Body    = $_POST['content'];
    $mail->AltBody = $_POST['content'];

ob_end_clean();
header("Connection: close\r\n");
header("Content-Encoding: none\r\n");
ignore_user_abort(true); // optional
ob_start();
echo ('Text user will see');
$size = ob_get_length();
header("Content-Length: $size");
ob_end_flush();     // Strange behaviour, will not work
flush();            // Unless both are called !
ob_end_clean();
//do processing here
sleep(5);


	
    $mail->send();



/*try
{
    include "libmail.php";

        $m= new Mail("utf-8");
        $m->From("kontakt@meetit.pl");
        $m->To($_POST['mail']);
        $m->Subject("MeetIT - odp");
        $m->Body($_POST['content'],'html');
        //$m->log_on(true);

		$host = 'serwer1803558.home.pl';
		$port = '465';//"587";
		$username = 'kontakt@meetit.pl';
		$password = 'kappakappa13';
        
        $m->smtp_on( $host, $username, $password, $port);
        

        $m->Send();

		die('0');
   
}
catch(Exception $mail)
{
    die($mail);
}   */


	//$headers[] = 'MIME-Version: 1.0';
	//$headers[] = 'Content-type: text/html; charset=iso-8859-1';
	//$headers[] = 'From: kontakt@meetit.pl';
	//if(!mail($_POST['mail'],'MeetIT - response',htmlspecialchars_decode($_POST['content']),implode("\r\n",$headers)))echo "1";
	//echo "0";
?>