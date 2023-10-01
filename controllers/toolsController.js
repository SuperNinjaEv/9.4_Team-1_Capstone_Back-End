const express = require('express');
const tools = express.Router();
const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require('@aws-sdk/client-s3');

const {
  getAllToolsFromUser,
  getAllTools,
  getOneTool,
  updateOneTool,
  deleteTool,
  createTools,
  addThumbnailTools,
  addToolMedia,
  getToolMedia,
  getSingleToolsAll
} = require('../queries/tools');
const s3 = new S3Client();


tools.get('/', async (req, res) => {
  try {
    const tools = await getAllTools();
    return res.json(tools);
  } catch (error) {
    console.log(error);
    res.status(400).json({error: 'Something went terribly wrong!'});
  }
});




// Get all tools from a specific user

tools.get('/all/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const tools = await getAllToolsFromUser(id);
    return res.json(tools);
  } catch (error) {
    console.log(error);
    res.status(400).json({error: 'Something went terribly wrong!'});
  }
});

tools.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const tools = await getSingleToolsAll(id);
    return res.json(tools);
  } catch (error) {
    console.log(error);
    res.status(400).json({error: 'Something went terribly wrong!'});
  }
});


// Get a single tool from a specific user

tools.get('/one/:tool_id', async (req, res) => {
  try {
    const {tool_id} = req.params;
    const tool = await getOneTool(tool_id);
    const toolMedia = await getToolMedia(tool_id);
    return res.status(200).json({tool: tool, media: toolMedia});
  } catch (error) {
    console.log(error);
    res.status(404).json({error: 'That tool log does not exist!'});
  }
});

// Edits/Updates a single tool from a specific user

tools.put('/:tool_id', async (req, res) => {
  try {
    const {tool_id} = req.params;
    const tool = req.body;

    const updatedtool = await updateOneTool(tool_id, tool);
    return res.json(updatedtool);
  } catch (error) {
    console.log(error);
    res.status(400).json({error: 'Cannot update tool log'});
  }
});

// Deletes a tool from a specific user

tools.delete('/:tool_id', async (req, res) => {
  const {tool_id} = req.params;
  const media = await getToolMedia(tool_id);
  try {
    const deletedtool = await deleteTool(tool_id);
    // if (!media.error) {
    //   media.forEach(async img => {
    //     await s3.send(
    //       new DeleteObjectCommand({
    //         Bucket: process.env.BUCKET_NAME,
    //         Key: img.file_name,
    //       })
    //     );
    //   });
    // }
    res.status(200).json(deletedtool);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({error: 'Catastrophe! Something went terribly wrong!'});
  }
});

// Creates a tool for a specific user

tools.post('/', async (req, res) => {
  const fileKeys = req.files?Object.keys(req.files):[];
  const files = [];
  fileKeys.forEach(key => {
    files.push(req.files[key]);
  });

  try {
    const tool = req.body;
    const createdTool = await createTools(tool);
    if (!createdTool.error) {
      files.forEach(async (file, i) => {
        if (i === 0) {
          uploadImageS3(file, `tool_${createdTool.tool_id}_thumbnail`);
          await addThumbnailTools(
            `${process.env.CLOUDFRONT_URI}tool_${createdTool.tool_id}_thumbnail`,
            createdTool.tool_id
          );
          uploadImageDb(
            file,
            `tool_${createdTool.tool_id}_thumbnail`,
            createdTool.tool_id
          );
        } else {
          uploadImageS3(file, `tool_${createdTool.tool_id}_img${i}`);
          uploadImageDb(
            file,
            `tool_${createdTool.tool_id}_img${i}`,
            createdTool.tool_id
          );
        }
      });
    }
    res
      .status(200)
      .json({message: 'Post Successful', createdTool: createdTool});
  } catch (error) {
    console.log(error);
    console.log('Incoming request body:', req.body);
    res.status(400).json({error: 'Incorrect post body'});
  }
});

const uploadImageS3 = async (file, imageName) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: imageName,
    Body: file.data,
  };

  try {
    const results = await s3.send(new PutObjectCommand(params));
    console.log(
      'Successfully created ' +
        params.Key +
        ' and uploaded it to ' +
        params.Bucket +
        '/' +
        params.Key
    );

    return results; // For unit tests.
  } catch (err) {
    console.log('Error:', err);
  }
};
const uploadImageDb = async (file, imageName, tool_id) => {
  const dbParams = {
    file_name: imageName,
    file_size: file.size,
    file_type: file.mimetype,
    file_url: `${process.env.CLOUDFRONT_URI}${imageName}`,
    tool_id: tool_id,
  };
  const dbResults = await addToolMedia(dbParams);
  if (!dbResults.error) {
    return dbResults;
  } else {
    res.status(400).json({error: dbResults.error});
  }
};

module.exports = tools;
