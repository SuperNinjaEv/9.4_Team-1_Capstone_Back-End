const db = require("../db/dbConfig.js");
const { findAccount } = require("./auth.js");

//function will get all post from a single user given the email to find the userid and hence ensuring user authenticated before posts are brought up for CRUD actions
/**
 * gets all posts from a user
 * @returns {object} all posts via json format
 **/
const getAllPostsFromUser = async () => await db.any("SELECT * FROM posts");


//function will get a single post from a single user given the email to find the userid and hence ensuring user authenticated before the post is brought up retrieval
/**
 * gets a single post from a user based on email and post identification
 * @param {number} post_id - a specific post's identification number
 * @returns {object} a single post via json format
 **/

const getOnePost = async (post_id) =>
  await db.one("SELECT * FROM posts WHERE post_id=$1",[post_id]);


//function will update a post from a single user given the email to find the userid and hence ensuring user authenticated before posts are brought up for updating action
/**
 * gets a single post from a user based on email and post identification
 * @param {number} post_id - a specific post's identification number
 * @param {object} posts - the post's data to be edited
 * @returns {object} a single post via json format that has been edited
 */
const updateOnePost = async (post_id,posts) => {
  const { title, tags, body, created_at, edited_at} = posts;

  return await db.one(
    "UPDATE posts SET title=$1, tags=$2, body=$3, created_at=$4, edited_at=$5 WHERE post_id=$6 RETURNING *",
    [title, tags, body, created_at, edited_at, post_id]
  );
};

//function will get a post from a single user given the email to find the userid and hence ensuring user authenticated before posts are brought up for deletion
/**
 * deletes a single post from a user based on email and post identification
 * @param {number} post_id - a specific post's identification number
 **/

const deletePost = async (post_id) =>
  await db.one("DELETE FROM posts WHERE post_id=$1 RETURNING *", post_id);
  

/**
 * creates a single post from a user based on email which will determine the userid and thus the user who is making the post
 * @param {number} post_id - a specific post's identification number
 * @param {object} posts - the post's data to be edited
 * @returns {object} a single post via json format
 */
const createPosts = async (post) => {
  const newPost = await db.one(
    "INSERT INTO posts (title, tags, body, created_at, edited_at, userid) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
    [
      post.title,
      post.tags,
      post.body,
      post.created_at,
      post.edited_at,
      post.userid,
    ]
  );

  return newPost;
};

module.exports = {
  getAllPostsFromUser,
  getOnePost,
  updateOnePost,
  deletePost,
  createPosts,
};
