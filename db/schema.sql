-- DROP DATABASE IF EXISTS `burgers_db`;

CREATE DATABASE burgers_db;

USE burgers_db;
-- DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
	id INTEGER(10) auto_increment NOT NULL PRIMARY KEY UNIQUE,
    burger_name VARCHAR(100),
    devoured BOOLEAN,
    date TIMESTAMP
    );
    
-- SELECT * FROM `burgers`;