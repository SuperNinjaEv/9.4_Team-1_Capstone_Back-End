const express = require('express')
const posts = express.Router()
const {S3Client,PutObjectCommand} = require('@aws-sdk/client-s3')
const {
  getAllPostsFromUser,
  getAllPosts,
  getOnePost,
  updateOnePost,
  deletePost,
  createPosts,
  postMedia
} = require('../queries/posts')
const s3 = new S3Client()

//all posts from specific user
posts.get('/', async (req, res) => {
  try {
    const posts = await getAllPostsFromUser()
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
    if(!createdPost.error){
    files.forEach(async (file, i) => {
      console.log(createdPost.post_id)
      const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: `${createdPost.post_id}_image${i}`,
        Body: file.data,
      }
      const dbParams = {
        file_name: `${createdPost.post_id}_image${i}`,
        file_size: file.size,
        file_type: file.mimetype,
        file_url: `${process.env.CLOUDFRONT_URI}${req.body.name}`,
        post_id: createdPost.post_id,
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
        const dbResults = await postMedia(dbParams)
        console.log(dbResults)
        return results // For unit tests.
      } catch (err) {
        console.log('Error:', err)
      }
    })
  }
    res.status(200).json({message:'Post Successful',createdPost:createdPost})
  } catch (error) {
    console.log(error)
    console.log('Incoming request body:', req.body)
    res.status(400).json({error: 'Incorrect post body'})
  }

  ///////////////////////////////////////////////////////////////////////////∂

  // app.post('/upload', async (req,res, next)=>{
  //   const params = {
  //       Bucket:process.env.BUCKET_NAME,
  //       Key:req.body.name,
  //       Body:req.files['file'].data
  //   }
  //   const dbParams = {
  //       file_name:req.body.name,
  //       file_size:req.files['file'].size,
  //       file_type:req.files['file'].type,
  //       file_url:`${process.env.CLOUDFRONT_URI}${req.body.name}`,
  //       post_id:12
  //   }

  //   try{
  //       const results = await s3.send(new PutObjectCommand(params))
  //           console.log(
  //             'Successfully created ' +
  //               params.Key +
  //               ' and uploaded it to ' +
  //               params.Bucket +
  //               '/' +
  //               params.Key
  //           )
  //       const dbResults = await postMedia(dbParams)
  //               console.log(dbResults)
  //           return results // For unit tests.
  //         } catch (err) {
  //           console.log('Error:', err)
  //         }
  //         res.status(200).json({message:'File upload successful'})
  //   })
  ///////////////////////////////////////////////////////////////////////////∂
})

module.exports = posts
