<?php
class Payment {
    private $conn;
    private $table = 'payments';

    public function __construct($db) {
        $this->conn = $db;
    }

    public function getAll() {
        $query = "SELECT * FROM " . $this->table . " ORDER BY created_at DESC";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById($id) {
        $query = "SELECT * FROM " . $this->table . " WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create($data) {
        $query = "INSERT INTO " . $this->table . " 
                  (shipment_id, amount, status, payment_method, created_at) 
                  VALUES (:shipment_id, :amount, :status, :payment_method, NOW())";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':shipment_id', $data['shipment_id']);
        $stmt->bindParam(':amount', $data['amount']);
        $stmt->bindParam(':status', $data['status']);
        $stmt->bindParam(':payment_method', $data['payment_method']);

        return $stmt->execute();
    }

    public function update($id, $data) {
        $query = "UPDATE " . $this->table . " 
                  SET status = :status, proof_url = :proof_url, updated_at = NOW() 
                  WHERE id = :id";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':status', $data['status']);
        $stmt->bindParam(':proof_url', $data['proof_url']);
        $stmt->bindParam(':id', $id);

        return $stmt->execute();
    }
}
?>


