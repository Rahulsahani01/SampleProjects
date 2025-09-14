<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// IMPORTANT: For SameSite=None, the 'secure' attribute must be set to true.
// This means the connection MUST be HTTPS. Your local development server
// (php -S) is HTTP, so this may not work in all browsers without specific flags.
// For production, you must use HTTPS.
ini_set('session.gc_maxlifetime', 3600);

session_set_cookie_params([
    'samesite' => 'None',
    'secure' => true,
    'httponly' => true
]);
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $email = $data['email'];
    $password = $data['password'];

    $users = json_decode(file_get_contents("users.json"), true);

    foreach ($users as $user) {
        if ($user['email'] === $email && password_verify($password, $user['password'])) {
            $_SESSION['user'] = $email;
            echo json_encode(["success" => true]);
            exit;
        }
    }

    echo json_encode(["success" => false, "message" => "Invalid credentials"]);
}
?>