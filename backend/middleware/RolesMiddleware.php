<?php
class RolesMiddleware {
    public static function checkRole($user, $allowedRoles) {
        if (!in_array($user['role'], $allowedRoles)) {
            http_response_code(403);
            echo json_encode(['message' => 'Access denied']);
            exit();
        }
    }
}
?>


