<?php

if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["phone"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name"],
    	'email' => $_POST["email"].
        'phone' => $_POST["phone"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>