var mysql    = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : "root",
    password : "",
})
connection.connect(function(err){
`DROP DATABASE IF EXISTS Blambamazon;
CREATE DATABASE Blambamazon;
USE Blambamazon;

CREATE TABLE products(
  product_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45),
  department_name VARCHAR(45),
  price DECIMAL(10,2),
  stock_quantity INTEGER(11),
  PRIMARY KEY (product_id),
)
INSERT INTO products(product_name, department_name, price, stock_quantity,) VALUES ("Gold", "PreciousMetals", "1323.00", "500",);
INSERT INTO products(product_name, department_name, price, stock_quantity,) VALUES ("Silver", "PreciousMetals", "16.55", "500",)
INSERT INTO products(product_name, department_name, price, stock_quantity,) VALUES ("Air Jordan 1", "Shoes", "200.00", "50",);
INSERT INTO products(product_name, department_name, price, stock_quantity,) VALUES ("Air Yeezy 2", "Shoes", "4200.00", "25",);
INSERT INTO products(product_name, department_name, price, stock_quantity,) VALUES ("Alexander Wang Adidas", "Shoes", "420.00", "25",);
INSERT INTO products(product_name, department_name, price, stock_quantity,) VALUES ("Playstation 2", "Electronics", "40.00", "130",)
INSERT INTO products(product_name, department_name, price, stock_quantity,) VALUES ("Playstation 3", "Electronics", "120.00", "130",)
INSERT INTO products(product_name, department_name, price, stock_quantity,) VALUES ("Gameboy Advanced", "Electronics", "50.00", "130",)
INSERT INTO products(product_name, department_name, price, stock_quantity,) VALUES ("Gameboy", "Electronics", "100.00", "130",)
INSERT INTO products(product_name, department_name, price, stock_quantity,) VALUES ("Gameboy Color", "Electronics", "50.00", "130",)


`
});
connection.end();