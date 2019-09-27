DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products	(
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
 item_id INTEGER(50) NOT NULL,
 product_name VARCHAR(50) NOT NULL,
 department_name VARCHAR(50) NOT NULL,
 price DECIMAL(10, 2) DEFAULT 0,
 stock_quantity INTEGER(10) DEFAULT 0
 );
 
 INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
 VALUES (20, "Whoopie Cushion", "Toys", "3.59", 24), (10, "Hamster Wheel", "Pets", "9.99", 30), (30, "Clown Shoes", "Shoes", "29.99", 18), (40, "Bell-bottom Jeans", "Apparel", "109.99", 28), (50, "The Chicken Encyclopedia", "Books", "9.99", 30), 
 (60, "Dunce Hat", "Accessories", "8.29", 19), (70, "Spam", "Food", "2.59", 29), (80, "Flonase", "Medicine", "6.99", 40), (80, "Car Freshener", "Automotive", "1.59", 45), (90, "Disco Ball", "Party", "31.99", 50), (100, "Flamingo Yard Ornament", "Garden/Yard", "17.59", 99);
 SELECT * FROM products;
 
 
 