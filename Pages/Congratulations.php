<?php

$name    = $_REQUEST['name'];
$email   = $_REQUEST['email'];
$message = $_REQUEST['message'];

$to      = 'clientes@arteralia.com.mx';
$title   = 'Client request';
$mailBody = 'Nombre: '.$name.PHP_EOL.'Mail: '.$email.PHP_EOL.'Mensaje:'.PHP_EOL.$message;

mail($to, $title, $mailBody);
header('Location: http://arteralia.com.mx/?sent/');
?>
