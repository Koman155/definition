<?php
require_once '../config/database.php';
require_once '../controllers/PaymentController.php';
require_once '../middleware/AuthMiddleware.php';

$database = new Database();
$db = $database->getConnection();
$paymentController = new PaymentController($db);

$request_method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = str_replace('/api', '', $path);
$path = trim($path, '/');
$segments = explode('/', $path);

header('Content-Type: application/json');

$user = AuthMiddleware::authenticate($db);

switch ($request_method) {
    case 'GET':
        if (isset($segments[1]) && is_numeric($segments[1])) {
            $result = $paymentController->getById($segments[1]);
        } else {
            $result = $paymentController->getAll();
        }
        echo json_encode($result);
        break;

    case 'POST':
        if (isset($segments[1]) && is_numeric($segments[1]) && $segments[2] === 'proof') {
            if (isset($_FILES['proof'])) {
                $result = $paymentController->uploadProof($segments[1], $_FILES['proof']);
            } else {
                $data = json_decode(file_get_contents('php://input'), true);
                $result = $paymentController->create($data);
            }
        } else {
            $data = json_decode(file_get_contents('php://input'), true);
            $result = $paymentController->create($data);
        }
        echo json_encode($result);
        break;

    case 'PUT':
        if (isset($segments[1]) && is_numeric($segments[1])) {
            $data = json_decode(file_get_contents('php://input'), true);
            $result = $paymentController->update($segments[1], $data);
            echo json_encode($result);
        }
        break;
}
?>

