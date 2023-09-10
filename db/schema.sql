DROP DATABASE IF EXISTS craftopia_database;
CREATE DATABASE craftopia_database; 

\c craftopia_database; 

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email VARCHAR(100) NOT NULL,
  password TEXT NOT NULL,
  username VARCHAR(40) NOT NULL UNIQUE,
  dob VARCHAR(10) NOT NULL,
  city_state TEXT NOT NULL,
  profile_pic BYTEA,
  -- birth_date DATE,
  -- locale_home POINT,
  learning_interest TEXT,
  current_skillset TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  -- other user-related fields
);


CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  tags TEXT,
  body TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  edited_at TIMESTAMP NULL DEFAULT NULL,
  thumbnail TEXT,
  user_id INT NOT NULL REFERENCES users(user_id)
);



CREATE TABLE hobby (
  hobby_id SERIAL PRIMARY KEY,
  name_hobby TEXT NOT NULL
);



CREATE TABLE tools (
  tool_id SERIAL PRIMARY KEY,
  name_tools TEXT,
  description TEXT,
  price FLOAT,
  stock_quantity INT,
  item_condition TEXT,
  hobby_id INT NOT NULL REFERENCES hobby(hobby_id)
);


CREATE TABLE item_exchange_barter (
  barter_id SERIAL PRIMARY KEY,
  confirm_trade BOOLEAN,
  date_meeting DATE,
  location POINT,
  stock_quantity INT,
  tool_id INT NOT NULL REFERENCES tools(tool_id)

);

CREATE TABLE post_media (
  file_id SERIAL PRIMARY KEY,
  file_name TEXT NOT NULL,
  file_size INT,
  file_type TEXT,
  file_url TEXT NOT NULL,
  post_id INT NOT NULL REFERENCES posts(post_id)
);

-- CREATE TABLE products (
--   product_id SERIAL PRIMARY KEY,
--   name VARCHAR(180) NOT NULL,
--   tags VARCHAR(100),

-- )
