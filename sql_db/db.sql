CREATE TABLE IF NOT EXISTS `emp` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  salary number(11) NOT NULL,
  age int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;