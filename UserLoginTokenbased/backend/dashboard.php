<?php
require_once 'vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';

if (preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
    $jwt = $matches[1];
    if ($jwt) {
        try {
            $secret_key = "your_secret_key"; // Should be the same as in login.php
            $decoded = JWT::decode($jwt, new Key($secret_key, 'HS256'));

            echo json_encode([
                "loggedIn" => true,
                "user" => $decoded->data->email
            ]);

        } catch (Exception $e) {
            header("HTTP/1.1 401 Unauthorized");
            echo json_encode(["loggedIn" => false, "message" => "Access denied: " . $e->getMessage()]);
        }
    } else {
        header("HTTP/1.1 401 Unauthorized");
        echo json_encode(["loggedIn" => false, "message" => "Access denied: No token provided"]);
    }
} else {
    header("HTTP/1.1 401 Unauthorized");
    echo json_encode(["loggedIn" => false, "message" => "Access denied: Invalid token format"]);
}
?>