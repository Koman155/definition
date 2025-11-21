<?php
require_once '../models/Rating.php';

class RatingController {
    private $conn;
    private $ratingModel;

    public function __construct($db) {
        $this->conn = $db;
        $this->ratingModel = new Rating($db);
    }

    public function getAll() {
        $ratings = $this->ratingModel->getAll();
        return $ratings;
    }

    public function getById($id) {
        $rating = $this->ratingModel->getById($id);
        if (!$rating) {
            http_response_code(404);
            return ['message' => 'Rating not found'];
        }
        return $rating;
    }

    public function create($data) {
        if ($this->ratingModel->create($data)) {
            return ['message' => 'Rating created successfully'];
        }
        http_response_code(500);
        return ['message' => 'Failed to create rating'];
    }

    public function update($id, $data) {
        if ($this->ratingModel->update($id, $data)) {
            return ['message' => 'Rating updated successfully'];
        }
        http_response_code(500);
        return ['message' => 'Failed to update rating'];
    }

    public function delete($id) {
        if ($this->ratingModel->delete($id)) {
            return ['message' => 'Rating deleted successfully'];
        }
        http_response_code(500);
        return ['message' => 'Failed to delete rating'];
    }

    public function getAverage() {
        $result = $this->ratingModel->getAverage();
        return ['average' => round($result['average'], 2)];
    }
}
?>

