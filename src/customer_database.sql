CREATE DATABASE IF NOT EXISTS ecofarm;
USE ecofarm;

CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    farm_shipping_address VARCHAR(255) NOT NULL,
    preferred_payment_method VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
