<?php
$aula = $_GET['aula'];
$aulas = [
	'1' => '5A',
	'2' => '5B',
	'3' => '5C',
];
$aula_id = array_search($aula, $aulas);
$mysqli = new mysqli('3.135.80.251', 'nudos', 'Nudos_2021', 'nudos');
$mysqli->query("set names 'utf8'");
$sql = "SELECT * FROM alumnos WHERE aula_id = $aula_id";
if (!$resultado = $mysqli->query($sql)) {
    echo "Lo sentimos, este sitio web está experimentando problemas.";
    exit;
}
$data = array();
while ($alumno = $resultado->fetch_assoc()) {
    $data['alumnos'][] = $alumno;
}
echo json_encode($data);