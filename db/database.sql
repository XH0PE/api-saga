CREATE DATABASE IF NOT EXISTS aprendicesdb;
USE aprendicesdb;
CREATE TABLE aprendiz (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    age INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);
DESCRIBE aprendiz;

INSERT INTO aprendiz VALUES
(1, 'Diego', 19),
(2, 'Marcos', 19),
(3, 'Juanfer', 20),
(4, 'Yineth', 23);

SELECT * FROM aprendiz;