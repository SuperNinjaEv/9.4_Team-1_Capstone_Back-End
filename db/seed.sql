\c craftopia_database; 

INSERT INTO user_cred (email, password) VALUES ('hellometropcs@gmail.com','user');

INSERT INTO users (name, email, password, username, dob, city_state, profile_pic, learning_interest, current_skillset, userid) VALUES ('sharukhgv','null','1995-01-29', '-74.006000, 40.712800', 'painting', 'drawing', 1);

 -- -- Inserting posts
INSERT INTO posts (title, tags, body, created_at, edited_at, userid) VALUES ('How to Paint', 'paint', 'mountain view','20230423 11:42:35.173', null, 1);

INSERT INTO posts (title, tags, body, created_at, edited_at, userid) VALUES ('How to draw', 'draw', 'mountain view','20230423 11:42:35.173', null, 1);

-- INSERT INTO tool_instrument (Paint Brush)

INSERT INTO hobby (name_hobby) VALUES ('Painting');

INSERT INTO hobby (name_hobby) VALUES ('Pottery');

INSERT INTO hobby (name_hobby) VALUES ('Drawing');