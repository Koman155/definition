<?php
require_once '../models/Comment.php';

class CommentController {
    private $conn;
    private $commentModel;

    public function __construct($db) {
        $this->conn = $db;
        $this->commentModel = new Comment($db);
    }

    public function getAll() {
        $comments = $this->commentModel->getAll();
        return $comments;
    }

    public function getById($id) {
        $comment = $this->commentModel->getById($id);
        if (!$comment) {
            http_response_code(404);
            return ['message' => 'Comment not found'];
        }
        return $comment;
    }

    public function create($data) {
        if ($this->commentModel->create($data)) {
            return ['message' => 'Comment created successfully'];
        }
        http_response_code(500);
        return ['message' => 'Failed to create comment'];
    }

    public function update($id, $data) {
        if ($this->commentModel->update($id, $data)) {
            return ['message' => 'Comment updated successfully'];
        }
        http_response_code(500);
        return ['message' => 'Failed to update comment'];
    }

    public function delete($id) {
        if ($this->commentModel->delete($id)) {
            return ['message' => 'Comment deleted successfully'];
        }
        http_response_code(500);
        return ['message' => 'Failed to delete comment'];
    }
}
?>

