<?php
require_once '../models/Shipment.php';

class ShipmentController {
    private $conn;
    private $shipmentModel;

    public function __construct($db) {
        $this->conn = $db;
        $this->shipmentModel = new Shipment($db);
    }

    public function getAll() {
        $shipments = $this->shipmentModel->getAll();
        return $shipments;
    }

    public function getById($id) {
        $shipment = $this->shipmentModel->getById($id);
        if (!$shipment) {
            http_response_code(404);
            return ['message' => 'Shipment not found'];
        }
        return $shipment;
    }

    public function track($trackingNumber) {
        $shipment = $this->shipmentModel->getByTrackingNumber($trackingNumber);
        if (!$shipment) {
            http_response_code(404);
            return ['message' => 'Shipment not found'];
        }
        return $shipment;
    }

    public function create($data) {
        $data['tracking_number'] = 'TRK' . strtoupper(uniqid());
        if ($this->shipmentModel->create($data)) {
            return ['message' => 'Shipment created successfully', 'tracking_number' => $data['tracking_number']];
        }
        http_response_code(500);
        return ['message' => 'Failed to create shipment'];
    }

    public function update($id, $data) {
        if ($this->shipmentModel->update($id, $data)) {
            return ['message' => 'Shipment updated successfully'];
        }
        http_response_code(500);
        return ['message' => 'Failed to update shipment'];
    }

    public function delete($id) {
        if ($this->shipmentModel->delete($id)) {
            return ['message' => 'Shipment deleted successfully'];
        }
        http_response_code(500);
        return ['message' => 'Failed to delete shipment'];
    }
}
?>

