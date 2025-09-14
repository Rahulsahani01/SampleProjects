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
    'secure' => true, // Must be true for SameSite=None
    'httponly' => true
]);
session_start();
session_unset();
session_destroy();

echo json_encode(["success" => true]);
?>