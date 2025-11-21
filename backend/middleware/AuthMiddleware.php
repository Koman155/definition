<?php
class AuthMiddleware {
    public static function authenticate($conn) {
        $headers = getallheaders();
        $token = null;

        if (isset($headers['Authorization'])) {
            $authHeader = $headers['Authorization'];
            if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
                $token = $matches[1];
            }
        }

        if (!$token) {
            http_response_code(401);
            echo json_encode(['message' => 'Authentication required']);
            exit();
        }

        // Verify token (simplified - in production, use JWT or similar)
        $stmt = $conn->prepare("SELECT * FROM users WHERE token = ?");
        $stmt->execute([$token]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user) {
            http_response_code(401);
            echo json_encode(['message' => 'Invalid token']);
            exit();
        }

        return $user;
    }
}
?>


