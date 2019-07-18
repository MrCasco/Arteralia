<?php
  $host = 'localhost';
  $user = 'arterali_casco';
  $pass = 'casco';
  $db = 'arterali_doorSystem';

  $con = mysqli_connect($host, $user, $pass, $db);
  if(!$con){
    die('cant connect to database');
    exit();
  }
?>
