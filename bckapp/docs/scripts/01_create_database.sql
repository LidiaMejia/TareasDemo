CREATE SCHEMA demodb;

CREATE USER 'demouser'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL ON demodb.* TO 'demouser'@'%';