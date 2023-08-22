
const express = require("express");
const posts = express.Router();
const {
    getAllPostsFromUser,
    getAllPosts,
    getOnePost,
    updateOnePost,
    deletePost,
    createPosts,
} = require("../queries/posts");


//all posts from specific user
posts.get("/", async (req, res) => {
  try {
    const posts = await getAllPostsFromUser();
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "something went terribly wrong!" });
  }
});


//all posts from all users
posts.get("/", async (req, res) => {
    try {
      const posts = await getAllPosts();
      res.json(posts);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "something went terribly wrong!" });
    }
  });

posts.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await getOnePost(id);
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "That post log does not exist!" });
  }
});

posts.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.body;

    const updatedpost = await updateOnePost(id, post);
    res.json(updatedpost);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Cannot update post log" });
  }
});

posts.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedpost = await deletePost(id);
    res.json(deletedpost);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Catastrophe! Something went terribly wrong!" });
  }
});

posts.post("/", async (req, res) => {
  try {
    const post = req.body;

    const createdpost = await createPosts(post);
    res.json(createdpost);
} catch (error) {
    console.log(error);
    console.log("Incoming request body:", req.body);
    // res.status(400).json({ error: "Incorrect post body" });
    res.status(400).json({ error: "Incorrect post body" });

}
});

module.exports = posts;


