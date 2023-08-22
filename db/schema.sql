DROP DATABASE IF EXISTS craftopia_database;
CREATE DATABASE craftopia_database; 

\c craftopia_database; 

CREATE TABLE user_cred (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  passhash text not null
  -- other user-related fields
);

CREATE TABLE user_profile (
  profile_id SERIAL PRIMARY KEY,
  username VARCHAR(40) NOT NULL UNIQUE,
  profile_pic BYTEA,
  learning_interest TEXT,
  current_skillset TEXT,
  user_id INT NOT NULL REFERENCES user_cred(user_id),

  -- other user-related fields
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  tags TEXT,
  body TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  edited_at TIMESTAMP NULL DEFAULT NULL
  profile_id INT NOT NULL REFERENCES user_profile(profile_id),
);
