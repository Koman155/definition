<?php
class Shipment {
    private $conn;
    private $table = 'shipments';

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

    public function getByTrackingNumber($trackingNumber) {
        $query = "SELECT * FROM " . $this->table . " WHERE tracking_number = :tracking_number";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':tracking_number', $trackingNumber);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create($data) {
        $query = "INSERT INTO " . $this->table . " 
                  (tracking_number, client_id, origin, destination, status, estimated_delivery, created_at) 
                  VALUES (:tracking_number, :client_id, :origin, :destination, :status, :estimated_delivery, NOW())";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':tracking_number', $data['tracking_number']);
        $stmt->bindParam(':client_id', $data['client_id']);
        $stmt->bindParam(':origin', $data['origin']);
        $stmt->bindParam(':destination', $data['destination']);
        $stmt->bindParam(':status', $data['status']);
        $stmt->bindParam(':estimated_delivery', $data['estimated_delivery']);

        return $stmt->execute();
    }

    public function update($id, $data) {
        $query = "UPDATE " . $this->table . " 
                  SET status = :status, updated_at = NOW() 
                  WHERE id = :id";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':status', $data['status']);
        $stmt->bindParam(':id', $id);

        return $stmt->execute();
    }

    public function delete($id) {
        $query = "DELETE FROM " . $this->table . " WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        return $stmt->execute();
    }
}
?>


