<?php
$mysqli = new mysqli('3.135.80.251', 'nudos', 'Nudos_2021', 'nudos');
$mysqli->query("set names 'utf8'");
$id = $_POST['id'];
$respuesta = $_POST['respuesta'];
$sql = "UPDATE alumnos SET respuesta = '$respuesta' WHERE id = $id";
if (!$resultado = $mysqli->query($sql)) {
    echo "Lo sentimos, este sitio web está experimentando problemas.";
    exit;
}
$data = true;
echo json_encode($data);