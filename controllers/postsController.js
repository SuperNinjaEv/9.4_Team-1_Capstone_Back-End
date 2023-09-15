
const express = require("express");
const posts = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');

const {
    getAllPostsFromUser,
    // getAllPosts,
    getOnePost,
    updateOnePost,
    deletePost,
    createPosts,
} = require("../queries/posts");

AWS.config.update({
  
})



//possible scrap code below
// //all posts from specific user
// posts.get("/", async (req, res) => {
//   try {
//     const posts = await getAllPostsFromUser();
//     res.json(posts);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: "something went terribly wrong!" });
//   }
// });
//possible scrap code above


// Get all posts from a specific user

posts.get("/", async (req, res) => {
  try {
    const posts = await getAllPostsFromUser();
    return res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something went terribly wrong!" });
  }
});

// Get a single post from a specific user

posts.get("/:post_id", async (req, res) => {
  try {
    const { post_id } = req.params;
    const post = await getOnePost(post_id);
    return res.json(post);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "That post log does not exist!" });
  }
});

// Edits/Updates a single post from a specific user

posts.put("/:post_id", async (req, res) => {
  try {
    const { post_id } = req.params;
    const post = req.body;

    const updatedpost = await updateOnePost(post_id, post);
   return  res.json(updatedpost);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Cannot update post log" });
  }
});

// Deletes a post from a specific user

posts.delete("/:post_id", async (req, res) => {
  try {
    const { post_id } = req.params;
    const deletedpost = await deletePost(post_id);
   return res.json(deletedpost);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Catastrophe! Something went terribly wrong!" });
  }
});

// Creates a post for a specific user

posts.post("/", async (req, res) => {
  try {
    const post = req.body;

    const createdpost = await createPosts(post);
   return res.json(createdpost);
} catch (error) {
    console.log(error);
    console.log("Incoming request body:", req.body);
    // res.status(400).json({ error: "Incorrect post body" });
    res.status(400).json({ error: "Incorrect post body" });
}
});

module.exports = posts;


