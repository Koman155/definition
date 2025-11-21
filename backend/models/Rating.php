<?php
class Rating {
    private $conn;
    private $table = 'ratings';

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
                  (shipment_id, user_id, rating, comment, created_at) 
                  VALUES (:shipment_id, :user_id, :rating, :comment, NOW())";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':shipment_id', $data['shipment_id']);
        $stmt->bindParam(':user_id', $data['user_id']);
        $stmt->bindParam(':rating', $data['rating']);
        $stmt->bindParam(':comment', $data['comment']);

        return $stmt->execute();
    }

    public function update($id, $data) {
        $query = "UPDATE " . $this->table . " 
                  SET rating = :rating, comment = :comment, updated_at = NOW() 
                  WHERE id = :id";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':rating', $data['rating']);
        $stmt->bindParam(':comment', $data['comment']);
        $stmt->bindParam(':id', $id);

        return $stmt->execute();
    }

    public function delete($id) {
        $query = "DELETE FROM " . $this->table . " WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        return $stmt->execute();
    }

    public function getAverage() {
        $query = "SELECT AVG(rating) as average FROM " . $this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
?>


