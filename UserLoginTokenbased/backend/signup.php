<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $email = $data['email'];
    $password = $data['password'];

    if (empty($email) || empty($password)) {
        echo json_encode(["success" => false, "message" => "Email and password are required."]);
        exit;
    }

    $users_file = 'users.json';
    $users = json_decode(file_get_contents($users_file), true);

    // Check if user already exists
    foreach ($users as $user) {
        if ($user['email'] === $email) {
            echo json_encode(["success" => false, "message" => "User with this email already exists."]);
            exit;
        }
    }

    // Add new user
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $new_user = [
        "email" => $email,
        "password" => $hashed_password
    ];
    $users[] = $new_user;

    if (file_put_contents($users_file, json_encode($users, JSON_PRETTY_PRINT))) {
        echo json_encode(["success" => true, "message" => "User registered successfully."]);
    } else {
        echo json_encode(["success" => false, "message" => "Failed to save user data."]);
    }
}
?>