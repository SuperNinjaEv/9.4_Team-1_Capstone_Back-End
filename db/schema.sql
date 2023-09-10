DROP DATABASE IF EXISTS craftopia_database;
CREATE DATABASE craftopia_database; 

\c craftopia_database; 


CREATE TABLE user_cred (
  userid SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password text not null
);



CREATE TABLE user_profile (
  profile_id SERIAL PRIMARY KEY,
  username VARCHAR(40) NOT NULL UNIQUE,
  profile_pic BYTEA,
  birth_date DATE,
  locale_home POINT,
  learning_interest TEXT,
  current_skillset TEXT,
  userid INT NOT NULL REFERENCES user_cred(userid)
);


CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  tags TEXT,
  body TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  edited_at TIMESTAMP NULL DEFAULT NULL,
  userid INT NOT NULL REFERENCES user_cred(userid)
);
