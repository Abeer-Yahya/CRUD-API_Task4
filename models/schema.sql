DROP TABLE IF EXISTS paintings;
CREATE TABLE paintings (
	id SERIAL PRIMARY KEY,
	title TEXT UNIQUE NOT NULL,
	year INT NOT NULL,
	artist TEXT NOT NULL,
	url VARCHAR(8000) NOT NULL,
	location VARCHAR(500)
);


DROP TABLE IF EXISTS users;
CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	username TEXT UNIQUE NOT NULL,
	password TEXT NOT NULL
);