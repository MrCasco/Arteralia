<?php
  echo "
    <form action='login.php' method='post'>
      <input type='text' name='user'>
      <input type='password' name='pass'>
      <button>Log in</button>
    </form>
  ";
  $user = $_REQUEST['user'];
  $pass = $_REQUEST['pass'];

  if ($user === 'casco' && $pass === 'casco') {
    header("Location: http://localhost/data.php");
  }
  else {
    echo "wrong";
  }
?>
