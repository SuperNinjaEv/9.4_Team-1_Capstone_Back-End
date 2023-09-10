
const express = require("express");
const tools = express.Router();
const {
    getAlltoolsFromUser,
    // getAlltools,
    getOnetool,
    updateOnetool,
    deletetool,
    createtools,
} = require("../queries/tools");

//possible scrap code below
// //all tools from specific user
// tools.get("/", async (req, res) => {
//   try {
//     const tools = await getAlltoolsFromUser();
//     res.json(tools);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: "something went terribly wrong!" });
//   }
// });
//possible scrap code above


// Get all tools from a specific user

tools.get("/", async (req, res) => {
  try {
    const tools = await getAlltoolsFromUser();
    return res.json(tools);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something went terribly wrong!" });
  }
});

// Get a single tool from a specific user

tools.get("/:tool_id", async (req, res) => {
  try {
    const { tool_id } = req.params;
    const tool = await getOnetool(tool_id);
    return res.json(tool);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "That tool log does not exist!" });
  }
});

// Edits/Updates a single tool from a specific user

tools.put("/:tool_id", async (req, res) => {
  try {
    const { tool_id } = req.params;
    const tool = req.body;

    const updatedtool = await updateOnetool(tool_id, tool);
   return  res.json(updatedtool);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Cannot update tool log" });
  }
});

// Deletes a tool from a specific user

tools.delete("/:tool_id", async (req, res) => {
  try {
    const { tool_id } = req.params;
    const deletedtool = await deletetool(tool_id);
   return res.json(deletedtool);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Catastrophe! Something went terribly wrong!" });
  }
});

// Creates a tool for a specific user

tools.post("/", async (req, res) => {
  try {
    const tool = req.body;

    const createdtool = await createtools(tool);
   return res.json(createdtool);
} catch (error) {
    console.log(error);
    console.log("Incoming request body:", req.body);
    // res.status(400).json({ error: "Incorrect tool body" });
    res.status(400).json({ error: "Incorrect tool body" });

}
});

module.exports = tools;


