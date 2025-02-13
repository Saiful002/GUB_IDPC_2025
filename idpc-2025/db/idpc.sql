-- Active: 1726242650294@@127.0.0.1@3306@gub_idpc_2025
CREATE DATABASE IF NOT EXISTS gub_idpc_2025;

CREATE TABLE registrations (
    name VARCHAR(255) NOT NULL,
    id VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    contact VARCHAR(20) UNIQUE NOT NULL,
    department VARCHAR(100) NOT NULL,
    batch VARCHAR(50) NOT NULL,
    tshirtSize ENUM('S', 'M', 'L', 'XL', 'XXL') NOT NULL,
    transactionId VARCHAR(255) UNIQUE NOT NULL
);

SELECT * from registrations

DROP Table registrations