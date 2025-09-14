<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

ini_set('session.gc_maxlifetime', 3600);

session_set_cookie_params([
    'samesite' => 'None',
    'secure' => true,
    'httponly' => true
]);
session_start();

if (isset($_SESSION['user'])) {
    echo json_encode(["loggedIn" => true, "user" => $_SESSION['user']]);
} else {
    header("HTTP/1.1 401 Unauthorized");
    echo json_encode(["loggedIn" => false]);
}
?>