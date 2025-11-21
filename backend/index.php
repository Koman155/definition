<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'config/database.php';

$request_uri = $_SERVER['REQUEST_URI'];
$request_method = $_SERVER['REQUEST_METHOD'];

// Remove query string and base path
$path = parse_url($request_uri, PHP_URL_PATH);
$path = str_replace('/api', '', $path);
$path = trim($path, '/');
$segments = explode('/', $path);

// Route handling
if ($segments[0] === 'auth') {
    require_once 'routes/auth.php';
} elseif ($segments[0] === 'shipments') {
    require_once 'routes/shipments.php';
} elseif ($segments[0] === 'payments') {
    require_once 'routes/payments.php';
} elseif ($segments[0] === 'comments') {
    require_once 'routes/comments.php';
} elseif ($segments[0] === 'ratings') {
    require_once 'routes/ratings.php';
} elseif ($segments[0] === 'dashboard') {
    require_once 'routes/dashboard.php';
} else {
    http_response_code(404);
    echo json_encode(['message' => 'Route not found']);
}
?>


