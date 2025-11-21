<?php
require_once '../models/Payment.php';

class PaymentController {
    private $conn;
    private $paymentModel;

    public function __construct($db) {
        $this->conn = $db;
        $this->paymentModel = new Payment($db);
    }

    public function getAll() {
        $payments = $this->paymentModel->getAll();
        return $payments;
    }

    public function getById($id) {
        $payment = $this->paymentModel->getById($id);
        if (!$payment) {
            http_response_code(404);
            return ['message' => 'Payment not found'];
        }
        return $payment;
    }

    public function create($data) {
        if ($this->paymentModel->create($data)) {
            return ['message' => 'Payment created successfully'];
        }
        http_response_code(500);
        return ['message' => 'Failed to create payment'];
    }

    public function update($id, $data) {
        if ($this->paymentModel->update($id, $data)) {
            return ['message' => 'Payment updated successfully'];
        }
        http_response_code(500);
        return ['message' => 'Failed to update payment'];
    }

    public function uploadProof($id, $file) {
        $uploadDir = '../uploads/proofs/';
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $fileName = uniqid() . '_' . basename($file['name']);
        $targetPath = $uploadDir . $fileName;

        if (move_uploaded_file($file['tmp_name'], $targetPath)) {
            $data = ['proof_url' => '/uploads/proofs/' . $fileName, 'status' => 'pending'];
            return $this->update($id, $data);
        }

        http_response_code(500);
        return ['message' => 'Failed to upload proof'];
    }
}
?>

