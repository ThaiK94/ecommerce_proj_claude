CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

DROP TABLE IF EXISTS carts;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('ADMIN', 'USER', 'STAFF') NOT NULL DEFAULT 'USER'
);

CREATE TABLE carts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_cart_user
        FOREIGN KEY (user_id) REFERENCES users(id)
) AUTO_INCREMENT = 100;


CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(150) NOT NULL,
    price_cents BIGINT DEFAULT 0,
    description TEXT,
    img_url VARCHAR(2048),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO products(product_name, price_cents, description, img_url)
VALUES
    ("Purse", 
    10000, 
    "Brown Leather Purse",
    "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
),
(
    'Wireless Headphones',
    7999,
    'Wireless Bluetooth headphones',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
),
(
    'Smart Watch',
    12999,
    'Modern smartwatch with fitness tracking',
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
),
(
    'Running Sneakers',
    8999,
    'Comfortable everyday running shoes',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
),
(
    'Camera',
    49999,
    'Digital camera for photography',
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32'
),
(
    'Backpack',
    5999,
    'Everyday travel backpack',
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62'
),
(
    'Sunglasses',
    3499,
    'Classic everyday sunglasses',
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083'
),
(
    'Laptop',
    89999,
    'High performance laptop',
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'
),
(
    'Coffee Maker',
    7499,
    'Automatic coffee brewing machine',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'
),
(
    'Leather Watch',
    15999,
    'Classic leather strap wristwatch',
    'https://images.unsplash.com/photo-1524805444758-089113d48a6d'
),
(
    'Travel Shoes',
    6999,
    'Casual comfortable travel shoes',
    'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3'
);



INSERT INTO users(first_name, last_name, email, password, role)
VALUES
    ('Mary', 'Jane', 'mary_jane@gmail.com', 'test123', 'ADMIN');
INSERT INTO carts(user_id)
VALUES (LAST_INSERT_ID());

INSERT INTO users(first_name, last_name, email, password)
VALUES   
    ('Peter', 'Parker', 'peter_parker@gmail.com', 'test123'),
    ('SpongeBob', 'Squarepants', 'mr_square@gmail.com', 'test123');
INSERT INTO carts(user_id)
VALUES 
    (2),
    (3);





