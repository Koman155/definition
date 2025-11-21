<?php
require_once '../config/database.php';
require_once '../controllers/RatingController.php';
require_once '../middleware/AuthMiddleware.php';

$database = new Database();
$db = $database->getConnection();
$ratingController = new RatingController($db);

$request_method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = str_replace('/api', '', $path);
$path = trim($path, '/');
$segments = explode('/', $path);

header('Content-Type: application/json');

if ($segments[1] === 'average') {
    $result = $ratingController->getAverage();
    echo json_encode($result);
} else {
    $user = AuthMiddleware::authenticate($db);

    switch ($request_method) {
        case 'GET':
            if (isset($segments[1]) && is_numeric($segments[1])) {
                $result = $ratingController->getById($segments[1]);
            } else {
                $result = $ratingController->getAll();
            }
            echo json_encode($result);
            break;

        case 'POST':
            $data = json_decode(file_get_contents('php://input'), true);
            $data['user_id'] = $user['id'];
            $result = $ratingController->create($data);
            echo json_encode($result);
            break;

        case 'PUT':
            if (isset($segments[1]) && is_numeric($segments[1])) {
                $data = json_decode(file_get_contents('php://input'), true);
                $result = $ratingController->update($segments[1], $data);
                echo json_encode($result);
            }
            break;

        case 'DELETE':
            if (isset($segments[1]) && is_numeric($segments[1])) {
                $result = $ratingController->delete($segments[1]);
                echo json_encode($result);
            }
            break;
    }
}
?>

