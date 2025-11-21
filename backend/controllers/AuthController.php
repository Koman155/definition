<?php
require_once '../models/User.php';
require_once '../models/Staff.php';

class AuthController {
    private $conn;
    private $userModel;
    private $staffModel;

    public function __construct($db) {
        $this->conn = $db;
        $this->userModel = new User($db);
        $this->staffModel = new Staff($db);
    }

    public function clientLogin($data) {
        $user = $this->userModel->findByEmail($data['email']);
        
        if (!$user || !password_verify($data['password'], $user['password'])) {
            http_response_code(401);
            return ['message' => 'Invalid credentials'];
        }

        $token = bin2hex(random_bytes(32));
        $this->userModel->updateToken($user['id'], $token);

        unset($user['password']);
        return ['user' => $user, 'token' => $token];
    }

    public function clientRegister($data) {
        if ($this->userModel->findByEmail($data['email'])) {
            http_response_code(400);
            return ['message' => 'Email already exists'];
        }

        $data['role'] = 'client';
        if ($this->userModel->create($data)) {
            return ['message' => 'Registration successful'];
        }
        
        http_response_code(500);
        return ['message' => 'Registration failed'];
    }

    public function staffLogin($data) {
        $staff = $this->staffModel->findByEmail($data['email']);
        
        if (!$staff || !password_verify($data['password'], $staff['password'])) {
            http_response_code(401);
            return ['message' => 'Invalid credentials'];
        }

        $token = bin2hex(random_bytes(32));
        unset($staff['password']);
        return ['user' => $staff, 'token' => $token];
    }

    public function staffRegister($data) {
        if ($this->staffModel->findByEmail($data['email'])) {
            http_response_code(400);
            return ['message' => 'Email already exists'];
        }

        if ($this->staffModel->create($data)) {
            return ['message' => 'Registration successful'];
        }
        
        http_response_code(500);
        return ['message' => 'Registration failed'];
    }

    public function adminLogin($data) {
        $user = $this->userModel->findByEmail($data['email']);
        
        if (!$user || $user['role'] !== 'admin' || !password_verify($data['password'], $user['password'])) {
            http_response_code(401);
            return ['message' => 'Invalid credentials'];
        }

        $token = bin2hex(random_bytes(32));
        $this->userModel->updateToken($user['id'], $token);

        unset($user['password']);
        return ['user' => $user, 'token' => $token];
    }

    public function adminRegister($data) {
        if ($this->userModel->findByEmail($data['email'])) {
            http_response_code(400);
            return ['message' => 'Email already exists'];
        }

        $data['role'] = 'admin';
        if ($this->userModel->create($data)) {
            return ['message' => 'Registration successful'];
        }
        
        http_response_code(500);
        return ['message' => 'Registration failed'];
    }
}
?>


