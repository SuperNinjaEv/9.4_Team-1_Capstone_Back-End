\c craftopia_database; 

-- INSERT INTO user_cred (email, password) VALUES ('hellometropcs@gmail.com','user');

INSERT INTO users (user_id, name, email, password, username, dob, city_state, profile_pic, learning_interest, current_skillset) VALUES (1, 'sharukhgv','sharukhgv@email.com', 'SVpassword', 'sharukhUSERNAME', '1995-01-29', 'Sharukh, NY', '-74.006000, 40.712800', 'painting', 'drawing'),
(3, 'evanv', 'evanv@email.com', 'EVpassword', 'evanUSERNAME', '1986-02-10', 'Evan, CT', '-74.006000, 40.712800', 'sculpting', 'photography');

INSERT INTO posts (title, tags, body, created_at, edited_at, user_id) VALUES ('How to Paint', 'paint', 'mountain view','20230423 11:42:35.173', null, 1);

INSERT INTO posts (title, tags, body, created_at, edited_at, user_id) VALUES ('How to draw', 'draw', 'mountain view','20230423 11:42:35.173', null, 1);


INSERT INTO hobby (name_hobby) VALUES ('Painting');

INSERT INTO hobby (name_hobby) VALUES ('Pottery');

INSERT INTO hobby (name_hobby) VALUES ('Drawing');