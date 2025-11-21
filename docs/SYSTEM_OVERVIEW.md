# System Overview

## Karasamyambi Logistics System

A comprehensive logistics management system built with React frontend and PHP backend.

## Architecture

### Frontend
- **Framework:** React 18 with Vite
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **State Management:** React Context API

### Backend
- **Language:** PHP 7.4+
- **Database:** MySQL
- **Server:** XAMPP (Apache)
- **Architecture:** MVC Pattern

## Features

### User Roles
1. **Client** - Customers who create shipments
2. **Admin** - System administrators
3. **Manager** - Staff managers
4. **Driver** - Delivery drivers
5. **Pilot** - Air transport pilots
6. **Captain** - Ship captains
7. **Employee** - General staff members

### Core Functionality
- User authentication and authorization
- Shipment creation and tracking
- Payment processing with proof upload
- Rating and review system
- Comment system for shipments
- Role-based dashboards
- Real-time tracking

## Technology Stack

### Frontend
- React 18.2.0
- React Router DOM 6.20.0
- Axios 1.6.2
- Vite 5.0.8

### Backend
- PHP 7.4+
- MySQL 5.7+
- PDO for database access

## Project Structure

```
karasamyambi-logistics/
├── frontend/          # React application
├── backend/           # PHP API
├── database/          # SQL schemas and seeds
└── docs/              # Documentation
```

## Security Features
- Password hashing (bcrypt)
- Token-based authentication
- Role-based access control
- SQL injection prevention (PDO prepared statements)
- CORS configuration

## Development Setup

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
1. Place backend folder in XAMPP htdocs
2. Configure database in `config/database.php`
3. Import database from `database/karasamyambi.sql`
4. Access via `http://localhost/backend`

## Deployment Considerations
- Update database credentials
- Configure CORS for production domain
- Use environment variables for sensitive data
- Implement proper JWT tokens
- Enable HTTPS
- Set up proper file upload limits

