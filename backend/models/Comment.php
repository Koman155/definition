<?php
class Comment {
    private $conn;
    private $table = 'comments';

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
                  (shipment_id, user_id, content, created_at) 
                  VALUES (:shipment_id, :user_id, :content, NOW())";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':shipment_id', $data['shipment_id']);
        $stmt->bindParam(':user_id', $data['user_id']);
        $stmt->bindParam(':content', $data['content']);

        return $stmt->execute();
    }

    public function update($id, $data) {
        $query = "UPDATE " . $this->table . " 
                  SET content = :content, updated_at = NOW() 
                  WHERE id = :id";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':content', $data['content']);
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


