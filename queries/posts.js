const db = require("../db/dbConfig.js");


const getAllPostsFromUser = async () => await db.any("SELECT * FROM posts WHERE profile_id=$1", profile_id);

//ALL POSTS FROM ALL USERS EDIT THIS
const getAllPosts = async () => await db.any("SELECT * FROM posts")


const getOnePost = async (post_id) =>
  await db.one("SELECT * FROM posts WHERE user_id=$1, post_id=$2",[post_id]);


const updateOnePost = async (post_id,posts) => {
  const { title, tags, body, created_at, edited_at} = posts;

  return await db.one(
    "UPDATE posts SET title=$1, tags=$2, body=$3, created_at=$4, edited_at=$5, WHERE post_id=$6 RETURNING *",
    [title, tags, body, created_at, edited_at, post_id]
  );
};

const deletePost = async (post_id) =>
  await db.one("DELETE FROM posts WHERE post_id=$1 RETURNING *", post_id);
  

  const createPosts = async (posts) => {

    const insertedPosts = await db.one(
      "INSERT INTO posts (title, tags, body, user_id) VALUES($1, $2, $3, $4) RETURNING *",
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


module.exports = {
  getAllPostsFromUser,
  getAllPosts,
  getOnePost,
  updateOnePost,
  deletePost,
  createPosts,
  postMedia
};
