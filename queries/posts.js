const db = require("../db/dbConfig.js");

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
  


  const createPosts = async (posts) => {

    const insertedPosts = await db.one(
      "INSERT INTO posts (title, tags, body, user_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        posts.title,
        posts.tags,
        posts.body,
        posts.user_id
      ]
    );
  
    return insertedPosts;
  }
 
  const postMedia = async file => {
    const fileUploaded = await db.one(
      'INSERT INTO post_media (file_name, file_size, file_url, post_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [file.file_name, file.file_size, file.file_url, file.post_id]
    )
    if(!fileUploaded.error){
        return fileUploaded
    }else{
      return fileUploaded.error
    }
  }

  const addThumbnail =async(thumbnail, post_id)=>{
    const updatePost = await db.one(
      "UPDATE posts SET thumbnail=$1 WHERE post_id=$2 returning *", [thumbnail, post_id]
    )
    if(!updatePost.error){
      return updatePost 
    }
    return updatePost.error
  }

module.exports = {
  getAllPostsFromUser,
  getOnePost,
  updateOnePost,
  deletePost,
  createPosts,
  postMedia,
  addThumbnail
};
