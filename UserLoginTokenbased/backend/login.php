<?php
require_once 'vendor/autoload.php';
use Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $email = $data['email'];
    $password = $data['password'];

    $users = json_decode(file_get_contents("users.json"), true);

    foreach ($users as $user) {
        if ($user['email'] === $email && password_verify($password, $user['password'])) {
            $secret_key = "your_secret_key"; // Change this to a strong secret key
            $issuer_claim = "localhost";
            $audience_claim = "localhost";
            $issuedat_claim = time();
            $notbefore_claim = $issuedat_claim;
            $expire_claim = $issuedat_claim + 3600; // 1 hour

            $token = array(
                "iss" => $issuer_claim,
                "aud" => $audience_claim,
                "iat" => $issuedat_claim,
                "nbf" => $notbefore_claim,
                "exp" => $expire_claim,
                "data" => array(
                    "email" => $email
                )
            );

            $jwt = JWT::encode($token, $secret_key, 'HS256');

            echo json_encode([
                "success" => true,
                "token" => $jwt
            ]);
            exit;
        }
    }

    echo json_encode(["success" => false, "message" => "Invalid credentials"]);
}
?>