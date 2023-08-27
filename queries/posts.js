const db = require("../db/dbConfig.js");
const { findAccount } = require("./auth.js");

//function will get all post from a single user given the email to find the userid and hence ensuring user authenticated before posts are brought up for CRUD actions
/**
 * gets all posts from a user
 * @param {string} email - email associated with a user_cred account
 * @returns {object} all posts via json format
 **/
const getAllPostsFromUser = async (email) => {
  const account = await findAccount(email);

  if ("userid" in account) {
    const userid = account.userid;
    const post = await db.any("SELECT * FROM posts WHERE userid=$1", userid);
    return post;
  } else {
    return { message: "No account found with that email" };
  }
};

//function will get a single post from a single user given the email to find the userid and hence ensuring user authenticated before the post is brought up retrieval
/**
 * gets a single post from a user based on email and post identification
 * @param {string} email - email associated with a user_cred account
 * @param {number} post_id - a specific post's identification number
 * @returns {object} a single post via json format
 **/
const getOnePost = async (email, post_id) => {
  const account = await findAccount(email);

  if ("userid" in account) {
    const userid = account.userid;
    const post = await db.one(
      "SELECT * FROM posts WHERE userid=$1 AND post_id=$2",
      [userid, post_id]
    );
    return post;
  } else {
    return { message: "No account found with that email" };
  }
};

//function will update a post from a single user given the email to find the userid and hence ensuring user authenticated before posts are brought up for updating action
/**
 * gets a single post from a user based on email and post identification
 * @param {string} email - email associated with a user_cred account
 * @param {number} post_id - a specific post's identification number
 * @param {object} posts - the post's data to be edited
 * @returns {object} a single post via json format that has been edited
 */
const updateOnePost = async (email, post_id, posts) => {
  const account = await findAccount(email);

  if ("userid" in account) {
    const userid = account.userid;
    const { title, tags, body, created_at, edited_at } = posts;
    const post = db.one(
      "UPDATE posts SET title=$1, tags=$2, body=$3, created_at=$4, edited_at=$5, WHERE  userid=$6, post_id=$7 RETURNING *",
      [title, tags, body, created_at, edited_at, userid, post_id]
    );
    return post;
  } else {
    return { message: "No account found with that email" };
  }
};

//function will get a post from a single user given the email to find the userid and hence ensuring user authenticated before posts are brought up for deletion
/**
 * deletes a single post from a user based on email and post identification
 * @param {string} email - email associated with a user_cred account
 * @param {number} post_id - a specific post's identification number
 **/
const deletePost = async (email, post_id) => {
  const account = await findAccount(email);

  if ("userid" in account) {
    const userid = account.userid;
    const post = await db.one(
      "DELETE FROM posts WHERE userid=$1, post_id=$2 RETURNING *",
      [userid, post_id]
    );
  } else {
    return { message: "No account found with that email" };
  }
};

/**
 * creates a single post from a user based on email which will determine the userid and thus the user who is making the post
 * @param {string} email - email associated with a user_cred account
 * @param {number} post_id - a specific post's identification number
 * @param {object} posts - the post's data to be edited
 * @returns {object} a single post via json format
 */
const createPosts = async (email) => {
  const account = await findAccount(email);

  if ("userid" in account) {
    const userid = account.userid;
    const post = await db.one(
      "INSERT INTO posts (title, tags, body, created_at, edited_at) VALUES($1, $2, $3, $4, $5), WHERE userid=$6 RETURNING *",
      [
        post.title,
        post.tags,
        post.body,
        post.created_at,
        post.edited_at,
        userid,
      ]
    );

    return post;
  }
};
//scrap code below for maybe other purpose
// //ALL POSTS FROM ALL USERS EDIT THIS
// const getAllPosts = async () => await db.any("SELECT * FROM posts")

// const getOnePost = async (userid, post_id) =>
//   await db.one("SELECT * FROM posts WHERE userid=$1, post_id=$2",[userid, post_id]);
//scrap code above for maybe other purpose


module.exports = {
  getAllPostsFromUser,
  // getAllPosts,
  getOnePost,
  updateOnePost,
  deletePost,
  createPosts,
};
