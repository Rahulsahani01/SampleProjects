<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Load users from JSON file
$usersData = file_get_contents('users.json');
$users = json_decode($usersData, true);

// Get query parameters
$search = isset($_GET['search']) ? trim($_GET['search']) : '';
$page = isset($_GET['page']) ? max(1, intval($_GET['page'])) : 1;
$perPage = 10;

// Filter users by search term (case-insensitive)
$filteredUsers = $users;
if (!empty($search)) {
    $filteredUsers = array_filter($users, function($user) use ($search) {
        return stripos($user['name'], $search) !== false;
    });
}

// Calculate pagination
$total = count($filteredUsers);
$offset = ($page - 1) * $perPage;
$paginatedUsers = array_slice($filteredUsers, $offset, $perPage);

// Return JSON response
echo json_encode([
    'data' => array_values($paginatedUsers),
    'total' => $total,
    'page' => $page,
    'per_page' => $perPage
]);
?>