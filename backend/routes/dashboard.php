<?php
require_once '../config/database.php';
require_once '../controllers/DashboardController.php';
require_once '../middleware/AuthMiddleware.php';

$database = new Database();
$db = $database->getConnection();
$dashboardController = new DashboardController($db);

header('Content-Type: application/json');

$user = AuthMiddleware::authenticate($db);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stats = $dashboardController->getStats($user['role'], $user['id']);
    echo json_encode($stats);
}
?>

