<?php
require_once '../config/database.php';
require_once '../controllers/AuthController.php';
require_once '../middleware/AuthMiddleware.php';

$database = new Database();
$db = $database->getConnection();
$authController = new AuthController($db);

$request_method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = str_replace('/api', '', $path);
$path = trim($path, '/');
$segments = explode('/', $path);

header('Content-Type: application/json');

if ($request_method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if ($segments[1] === 'client' && $segments[2] === 'login') {
        $result = $authController->clientLogin($data);
        echo json_encode($result);
    } elseif ($segments[1] === 'client' && $segments[2] === 'register') {
        $result = $authController->clientRegister($data);
        echo json_encode($result);
    } elseif ($segments[1] === 'staff' && $segments[2] === 'login') {
        $result = $authController->staffLogin($data);
        echo json_encode($result);
    } elseif ($segments[1] === 'staff' && $segments[2] === 'register') {
        $result = $authController->staffRegister($data);
        echo json_encode($result);
    } elseif ($segments[1] === 'admin' && $segments[2] === 'login') {
        $result = $authController->adminLogin($data);
        echo json_encode($result);
    } elseif ($segments[1] === 'admin' && $segments[2] === 'register') {
        $result = $authController->adminRegister($data);
        echo json_encode($result);
    } elseif ($segments[1] === 'logout') {
        echo json_encode(['message' => 'Logged out successfully']);
    } elseif ($segments[1] === 'me') {
        $user = AuthMiddleware::authenticate($db);
        unset($user['password']);
        echo json_encode($user);
    }
}
?>

