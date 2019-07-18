<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="newDoor_backend.css">
  </head>
  <body>
    <h1 class="text-center">Door management system</h1>
    <br>
    <br>
    <form method="POST">
      <div class="form-group d-flex justify-content-center">
        <input class="form-control" type="text" name='noserie' placeholder="No. Serie">
      </div>
      <div class="form-group d-flex justify-content-center">
        <input class="form-control" type="text" name='lugar'   placeholder="Lugar destino">
      </div>
      <div class="form-group d-flex justify-content-center">
        <input class="form-control" type="text" name='fecha'   placeholder="Fecha">
      </div>
      <div class="form-group d-flex justify-content-center">
        <input class="form-control" type="text" name='modelo'  placeholder="Modelo">
      </div>

      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" name="action" value="newDoor">Agregar</button>
      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit" name="action" value="search">Buscar</button>
      <button class="btn btn-outline-dark" type="submit" name="action" value="showAll">Mostrar todo</button>
      <button class="btn btn-outline-danger" type="submit" name="action" value="delete">Eliminar puerta</button>
    </form>
    <br>
    <?php
      include "db.php";
      global $con;

      //
      $a = 0;
      //Variable to quantify the complete door stack (this goes into the while)
      $i = 0;
      //Variable that checks which button has been pressed
      $action = $_REQUEST['action'];
      //Serial number of each door (this is a unique ID)
      $noserie = $_REQUEST['noserie'];
      //Place which has been sent
      $lugar = $_REQUEST['lugar'];
      //Model of the door
      $modelo = $_REQUEST['modelo'];
      //Date which has been received to buyer
      $fecha = $_REQUEST['fecha'];

      echo "
      <table class='table-backend table d-flex justify-content-center'>
        <tr>
          <th scope='col'>No. Serie</th>
          <th scope='col'>Lugar</th>
          <th scope='col'>Modelo</th>
          <th scope='col'>Fecha</th>
        </tr>
      </table>";

      if ($action === 'newDoor' && ($noserie !== '' && $lugar !== '' && $modelo !== '' && $fecha !== '')) {
        $sql = "SELECT * FROM doorManagement WHERE noserie='".$noserie."' ";
        $res = mysqli_query($con, $sql);
        if ($row = mysqli_fetch_assoc($res)) {
          echo "
          <div class='text-center'>
            <h3>Número de serie ya ocupado</h3>
            <h4>".$row['noserie']." &nbsp ".$row['lugar']." &nbsp ".$row['modelo']." &nbsp ".$row['fecha']."</h4>
          </div>";
          $i++;
        }
        else{
          $sql = "
            insert into doorManagement (noserie, lugar, modelo, fecha)
            values('".$noserie."', '".$lugar."', '".$modelo."', '".$fecha."')";
          $query = mysqli_query($con, $sql);
        }
      }

      if ($action === 'search'){
        if ($noserie !== '') {
          $a++;
          if ($a > 1) {
            $sqlSearch .= " AND noserie='".$noserie."'";
            $resSearch = mysqli_query($con, $sqlSearch);
          }
          else{
            $sqlSearch = "SELECT * FROM doorManagement WHERE noserie='".$noserie."'";
            $resSearch = mysqli_query($con, $sqlSearch);
          }
        }
        if ($lugar !== '') {
          $a++;
          if ($a > 1) {
            $sqlSearch .= " AND lugar='".$lugar."'";
            $resSearch = mysqli_query($con, $sqlSearch);
          }
          else{
            $sqlSearch = "SELECT * FROM doorManagement WHERE lugar='".$lugar."'";
            $resSearch = mysqli_query($con, $sqlSearch);
          }
        }
        if ($modelo !== '') {
          $a++;
          if ($a > 1) {
            $sqlSearch .= " AND modelo='".$modelo."'";
            $resSearch = mysqli_query($con, $sqlSearch);
          }
          else{
            $sqlSearch = "SELECT * FROM doorManagement WHERE modelo='".$modelo."'";
            $resSearch = mysqli_query($con, $sqlSearch);
          }
        }
        if ($fecha !== '') {
          $a++;
          if ($a > 1) {
            $sqlSearch .= " AND fecha='".$fecha."'";
            $resSearch = mysqli_query($con, $sqlSearch);
          }
          else{
            $sqlSearch = "SELECT * FROM doorManagement WHERE fecha='".$fecha."'";
            $resSearch = mysqli_query($con, $sqlSearch);
          }
        }
        while($row = mysqli_fetch_assoc($resSearch)) {
          $i++;
          $fetchNoserie = $row['noserie'];
          $fetchLugar = "&nbsp&nbsp&nbsp" . $row['lugar'];
          $fetchModelo = $row['modelo'];
          $fetchFecha = $row['fecha'];
          echo "
          <table class='table-backend table table-hover d-flex justify-content-center'>
            <tbody>
              <tr>
                <th scope='row'>".$fetchNoserie."</th>
                <td>".$fetchLugar."</td>
                <td>".$fetchModelo."</td>
                <td>".$fetchFecha."</td>
              </tr>
            </tbody>
          </table>";
        }
        $a = 0;
      }

      if ($action === 'showAll') {
        $sqlSearch = "SELECT * FROM doorManagement";
        $resSearch = mysqli_query($con, $sqlSearch);
        while ($row = mysqli_fetch_assoc($resSearch)) {
          $i++;
          $fetchNoserie = $row['noserie'];
          $fetchLugar = "&nbsp&nbsp&nbsp" . $row['lugar'];
          $fetchModelo = $row['modelo'];
          $fetchFecha = $row['fecha'];
          echo "
          <table class='table-backend table table-hover d-flex justify-content-center'>
            <tbody>
              <tr>
                <th scope='row'>".$fetchNoserie."</th>
                <td>".$fetchLugar."</td>
                <td>".$fetchModelo."</td>
                <td>".$fetchFecha."</td>
              </tr>
            </tbody>
          </table>";
        }
      }

      if ($action === 'delete' && ($noserie !== '' && $lugar !== '' && $modelo !== '' && $fecha !== '')) {
        echo "
        <div class='warningMessage text-center'>
          <form>
            <h4>Se eliminará una puerta, ¿ok?</h4>
            <button class='btn-danger'><a href='newDoor_backend.php?y_n=yes&noserie=".$noserie."&lugar=".$lugar."&modelo=".$modelo."&fecha=".$fecha." '>Sí</a></button>
            <button class='btn-dark' type='submit' name='y_n' value='no'>No</button>
          </form>
        </div>";
      }
      $y_n = $_GET['y_n'];
      $noserie = $_GET['noserie'];
      $lugar = $_GET['lugar'];
      $modelo = $_GET['modelo'];
      $fecha = $_GET['fecha'];
      echo $y_n;
      if ($y_n === 'yes') {
        echo "im in";
        $sqlDelete = "DELETE FROM doorManagement WHERE noserie='".$noserie."' AND lugar='".$lugar."' AND modelo='".$modelo."' AND fecha='".$fecha."'";
        $resDelete = mysqli_query($con, $sqlDelete);
        $y_n = 'no';
        echo $sqlDelete;
      }
      echo "<h3 class='text-center'>".$i."&nbsppuertas en total</h3>";
      if($query){
        echo "
          <div class='btn-success'>
            <h3 class='text-center'>
              Puerta agregada
            </h3>
          </div>";
      }
      mysqli_close($con);
    ?>
  </body>
</html>
