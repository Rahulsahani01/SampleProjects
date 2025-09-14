<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$users_json = file_get_contents('users.json');
$all_users = json_decode($users_json, true);

$search_query = isset($_GET['search']) ? strtolower($_GET['search']) : '';
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$per_page = 10;

$filtered_users = [];
if (!empty($search_query)) {
    foreach ($all_users as $user) {
        if (strpos(strtolower($user['name']), $search_query) !== false) {
            $filtered_users[] = $user;
        }
    }
} else {
    $filtered_users = $all_users;
}

$total_users = count($filtered_users);
$total_pages = ceil($total_users / $per_page);

// Ensure page is within valid range
if ($page < 1) {
    $page = 1;
} elseif ($page > $total_pages && $total_pages > 0) {
    // If page is greater than total_pages, return an empty array for users
    $paginated_users = [];
    $response = [
        "users" => $paginated_users,
        "total" => $total_users,
        "per_page" => $per_page,
        "current_page" => $page,
        "total_pages" => $total_pages
    ];
    echo json_encode($response);
    exit();
} elseif ($total_pages == 0) {
    // If there are no users at all, total_pages will be 0
    $paginated_users = [];
    $response = [
        "users" => $paginated_users,
        "total" => $total_users,
        "per_page" => $per_page,
        "current_page" => $page,
        "total_pages" => 0
    ];
    echo json_encode($response);
    exit();
}


$offset = ($page - 1) * $per_page;
$paginated_users = array_slice($filtered_users, $offset, $per_page);

$response = [
    "users" => $paginated_users,
    "total" => $total_users,
    "per_page" => $per_page,
    "current_page" => $page,
    "total_pages" => $total_pages
];

echo json_encode($response);
?>