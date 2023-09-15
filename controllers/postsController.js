const express = require('express')
const posts = express.Router()
const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3')
const {
  getAllPostsFromUser,
  getAllPosts,
  getOnePost,
  updateOnePost,
  deletePost,
  createPosts,
  postMedia,
  addThumbnail,
} = require('../queries/posts')
const s3 = new S3Client()

//all posts from specific user
posts.get('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const posts = await getAllPostsFromUser(id)
    res.json(posts)
  } catch (error) {
    console.log(error)
    res.status(400).json({error: 'something went terribly wrong!'})
  }
})

//all posts from all users
posts.get('/', async (req, res) => {
  try {
    const posts = await getAllPosts()
    res.json(posts)
  } catch (error) {
    console.log(error)
    res.status(400).json({error: 'something went terribly wrong!'})
  }
})

// Get a single post from a specific user

posts.get('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const post = await getOnePost(id)
    res.json(post)
  } catch (error) {
    console.log(error)
    res.status(404).json({error: 'That post log does not exist!'})
  }
})

posts.put('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const post = req.body

    const updatedpost = await updateOnePost(id, post)
    res.json(updatedpost)
  } catch (error) {
    console.log(error)
    res.status(400).json({error: 'Cannot update post log'})
  }
})

posts.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const deletedpost = await deletePost(id)
    res.json(deletedpost)
  } catch (error) {
    console.log(error)
    res.status(400).json({error: 'Catastrophe! Something went terribly wrong!'})
  }
})

posts.post('/', async (req, res) => {
  const fileKeys = Object.keys(req.files)
  const files = []

  fileKeys.forEach(key => {
    files.push(req.files[key])
  })
  try {
    const post = req.body
    const createdPost = await createPosts(post)
    if (!createdPost.error) {
      files.forEach(async(file, i) => {
        console.log(file)
        if(i===0){
          uploadImageS3(file,`${createdPost.post_id}_thumbnail`)
          await addThumbnail(`${process.env.CLOUDFRONT_URI}/${createdPost.post_id}_thumbnail${i}`,createdPost.post_id )
        }else{
          uploadImageS3(file,`${createdPost.post_id}_image${i}`)
          uploadImageDb(file,`${createdPost.post_id}_image${i}`, createdPost.post_id)
        }
      }) 
    }
    res.status(200).json({message: 'Post Successful', createdPost: createdPost})
  } catch (error) {
    console.log(error)
    console.log('Incoming request body:', req.body)
    res.status(400).json({error: 'Incorrect post body'})
  }
})


const uploadImageS3 = async(file,imageName,post_id)=>{
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: imageName,
    Body: file.data,
  }
  
  try {
    const results = await s3.send(new PutObjectCommand(params))
    console.log(
      'Successfully created ' +
        params.Key +
        ' and uploaded it to ' +
        params.Bucket +
        '/' +
        params.Key
    )
    
    return results// For unit tests.
  } catch (err) {
    console.log('Error:', err)
  }
}
const uploadImageDb = async(file, imageName, post_id)=>{
  const dbParams = {
    file_name: imageName,
    file_size: file.size,
    file_type: file.mimetype,
    file_url: `${process.env.CLOUDFRONT_URI}${imageName}`,
    post_id: post_id,
  }
  const dbResults = await postMedia(dbParams)
  if(!dbResults.error){
    return dbResults
  }
  else{
    res.status(400).json({error:dbResults.error})
  }
}
module.exports = posts
