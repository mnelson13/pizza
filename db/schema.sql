CREATE DATABASE pizzas_db;

USE pizzas_db;

CREATE TABLE pizzas(
    id INTEGER NOT NULL AUTO_INCREMENT,
    pizza_name VARCHAR(255),
    devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);