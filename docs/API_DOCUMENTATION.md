# API Documentation

## Base URL
```
http://localhost/api
```

## Authentication
Most endpoints require authentication via Bearer token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Client Login
- **POST** `/auth/client/login`
- **Body:**
  ```json
  {
    "email": "client@example.com",
    "password": "password123"
  }
  ```

#### Client Register
- **POST** `/auth/client/register`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "client@example.com",
    "password": "password123",
    "phone": "1234567890"
  }
  ```

#### Staff Login
- **POST** `/auth/staff/login`
- **Body:**
  ```json
  {
    "email": "staff@example.com",
    "password": "password123"
  }
  ```

#### Staff Register
- **POST** `/auth/staff/register`
- **Body:**
  ```json
  {
    "name": "Jane Smith",
    "email": "staff@example.com",
    "password": "password123",
    "phone": "1234567890",
    "role": "manager"
  }
  ```

#### Admin Login
- **POST** `/auth/admin/login`
- **Body:**
  ```json
  {
    "email": "admin@example.com",
    "password": "password123"
  }
  ```

#### Get Current User
- **GET** `/auth/me`
- **Headers:** Authorization required

### Shipments

#### Get All Shipments
- **GET** `/shipments`
- **Headers:** Authorization required

#### Get Shipment by ID
- **GET** `/shipments/{id}`
- **Headers:** Authorization required

#### Track Shipment
- **GET** `/shipments/track/{trackingNumber}`
- **Headers:** Not required

#### Create Shipment
- **POST** `/shipments`
- **Headers:** Authorization required
- **Body:**
  ```json
  {
    "origin": "New York",
    "destination": "Los Angeles",
    "status": "pending",
    "estimated_delivery": "2024-12-31"
  }
  ```

#### Update Shipment
- **PUT** `/shipments/{id}`
- **Headers:** Authorization required
- **Body:**
  ```json
  {
    "status": "in_transit"
  }
  ```

#### Delete Shipment
- **DELETE** `/shipments/{id}`
- **Headers:** Authorization required

### Payments

#### Get All Payments
- **GET** `/payments`
- **Headers:** Authorization required

#### Get Payment by ID
- **GET** `/payments/{id}`
- **Headers:** Authorization required

#### Create Payment
- **POST** `/payments`
- **Headers:** Authorization required
- **Body:**
  ```json
  {
    "shipment_id": 1,
    "amount": 100.00,
    "status": "pending",
    "payment_method": "credit_card"
  }
  ```

#### Upload Payment Proof
- **POST** `/payments/{id}/proof`
- **Headers:** Authorization required
- **Body:** Form-data with file field `proof`

### Comments

#### Get All Comments
- **GET** `/comments`
- **Headers:** Authorization required

#### Create Comment
- **POST** `/comments`
- **Headers:** Authorization required
- **Body:**
  ```json
  {
    "shipment_id": 1,
    "content": "Great service!"
  }
  ```

### Ratings

#### Get All Ratings
- **GET** `/ratings`
- **Headers:** Authorization required

#### Get Average Rating
- **GET** `/ratings/average`
- **Headers:** Not required

#### Create Rating
- **POST** `/ratings`
- **Headers:** Authorization required
- **Body:**
  ```json
  {
    "shipment_id": 1,
    "rating": 5,
    "comment": "Excellent service"
  }
  ```

### Dashboard

#### Get Dashboard Stats
- **GET** `/dashboard`
- **Headers:** Authorization required
- Returns statistics based on user role

