-- Admin seed data
-- Default admin user for initial setup
-- Password: admin123 (should be changed in production)

INSERT INTO users (name, email, password, role) 
VALUES (
    'System Administrator', 
    'admin@karasamyambi.com', 
    '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 
    'admin'
) ON DUPLICATE KEY UPDATE email=email;

-- Note: The password hash above is for 'password' - change this in production!
-- To generate a new hash, use PHP: password_hash('your_password', PASSWORD_DEFAULT)

