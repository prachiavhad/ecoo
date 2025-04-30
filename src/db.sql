USE ecofarm;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image_url VARCHAR(500),
    price DECIMAL(10,2) NOT NULL,
    rating DECIMAL(3,2) CHECK (rating BETWEEN 0 AND 5),
    weight DECIMAL(10,2) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
