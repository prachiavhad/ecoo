USE ecofarm;

CREATE TABLE distributor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    business_name VARCHAR(255) NOT NULL,
    business_license_number VARCHAR(100) UNIQUE NOT NULL,
    service_area VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);