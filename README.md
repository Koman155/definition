# Karasamyambi Logistics

A comprehensive logistics management system built with React frontend and PHP backend.

## 🚀 Features

- **Multi-role Authentication** - Support for Clients, Staff, and Admins
- **Shipment Tracking** - Real-time tracking of shipments
- **Payment Management** - Payment processing with proof upload
- **Rating System** - Customer ratings and reviews
- **Comment System** - Comments on shipments
- **Role-based Dashboards** - Customized dashboards for each user role
- **Responsive Design** - Works on all devices

## 📋 Prerequisites

- Node.js (v16 or higher)
- PHP 7.4 or higher
- MySQL 5.7 or higher
- XAMPP (or similar PHP/MySQL server)

## 🛠️ Installation

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Copy the `backend` folder to your XAMPP `htdocs` directory:
   - Windows: `C:\xampp\htdocs\backend`
   - Or configure your web server to point to the backend directory

2. Configure the database connection in `backend/config/database.php`:
```php
private $host = 'localhost';
private $db_name = 'karasamyambi';
private $username = 'root';
private $password = '';
```

3. Create the database:
   - Open phpMyAdmin (http://localhost/phpmyadmin)
   - Import `database/karasamyambi.sql`
   - Or run the SQL file manually

4. Access the API at `http://localhost/backend` (or your configured path)

## 📁 Project Structure

```
karasamyambi-logistics/
├── frontend/              # React application
│   ├── public/           # Static assets
│   ├── src/              # Source code
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── api/          # API client functions
│   │   ├── context/      # React context providers
│   │   └── router/       # Routing configuration
│   └── package.json      # Dependencies
│
├── backend/               # PHP API
│   ├── config/           # Configuration files
│   ├── controllers/      # Request handlers
│   ├── models/           # Data models
│   ├── routes/           # Route definitions
│   ├── middleware/       # Middleware functions
│   └── uploads/          # Uploaded files
│
├── database/              # Database files
│   ├── karasamyambi.sql  # Full database export
│   ├── tables/           # Individual table definitions
│   └── seeds/            # Seed data
│
└── docs/                  # Documentation
    ├── API_DOCUMENTATION.md
    ├── SYSTEM_OVERVIEW.md
    ├── STORY_OF_GENERAL_KARASAMYAMBI.md
    └── WIREFRAMES.md
```

## 🔐 User Roles

- **Client** - Create and track shipments
- **Admin** - Full system access
- **Manager** - Manage operations and staff
- **Driver** - View and update deliveries
- **Pilot** - Manage flight assignments
- **Captain** - Manage ship assignments
- **Employee** - General staff access

## 📚 Documentation

- [API Documentation](docs/API_DOCUMENTATION.md)
- [System Overview](docs/SYSTEM_OVERVIEW.md)
- [Story of General Karasamyambi](docs/STORY_OF_GENERAL_KARASAMYAMBI.md)
- [Wireframes](docs/WIREFRAMES.md)

## 🧪 Development

### Frontend Development
```bash
cd frontend
npm run dev
```

### Backend Development
- Ensure XAMPP is running
- PHP files are automatically reloaded
- Check error logs in XAMPP control panel

### Database Management
- Use phpMyAdmin for database management
- SQL files are in the `database/` directory

## 🔒 Security Notes

- Change default database credentials in production
- Use environment variables for sensitive data
- Implement proper JWT tokens (currently using simple tokens)
- Enable HTTPS in production
- Validate and sanitize all user inputs
- Set proper file upload limits

## 📝 License

This project is proprietary software.

## 👥 Contributing

This is a private project. For contributions, please contact the project maintainer.

## 📞 Support

For support, please refer to the documentation or contact the development team.

---

**Built with ❤️ for Karasamyambi Logistics**

