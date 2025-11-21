<?php
require_once '../models/Shipment.php';
require_once '../models/Payment.php';
require_once '../models/Rating.php';

class DashboardController {
    private $conn;
    private $shipmentModel;
    private $paymentModel;
    private $ratingModel;

    public function __construct($db) {
        $this->conn = $db;
        $this->shipmentModel = new Shipment($db);
        $this->paymentModel = new Payment($db);
        $this->ratingModel = new Rating($db);
    }

    public function getStats($userRole, $userId) {
        $stats = [];

        if ($userRole === 'admin') {
            $stats['totalShipments'] = count($this->shipmentModel->getAll());
            $stats['totalPayments'] = count($this->paymentModel->getAll());
            $avgRating = $this->ratingModel->getAverage();
            $stats['averageRating'] = $avgRating['average'];
        } elseif ($userRole === 'client') {
            $query = "SELECT COUNT(*) as count FROM shipments WHERE client_id = :user_id";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':user_id', $userId);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            $stats['myShipments'] = $result['count'];
        }

        return $stats;
    }
}
?>

