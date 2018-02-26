USE `qxk82kyb7emsb26h`;

DROP TABLE IF EXISTS `burgers`;

CREATE TABLE `burgers`(
	id INTEGER(10) auto_increment NOT NULL PRIMARY KEY UNIQUE,
    burger_name VARCHAR(100),
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

SELECT * FROM `burgers`;