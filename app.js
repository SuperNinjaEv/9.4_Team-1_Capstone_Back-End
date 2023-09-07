const express = require('express')
const cors = require('cors')
const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3')
const jsonParser = express.json()
const app = express()
const authController = require('./controllers/authController')
const postsController = require("./controllers/postsController");
const fileUpload = require('express-fileupload')
const s3 = new S3Client()
app.use(cors({
    origin:process.env.ORIGIN || 'http://localhost:3000',
    credentials:true,
}))
app.use(fileUpload())
app.use(jsonParser)

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.get('/', (_,res)=>res.send('hello'))
app.post('/upload', async (req,res, next)=>{
    const params = {
        Bucket:process.env.BUCKET_NAME,
        Key:req.body.name,
        Body:req.files['file'].data
    }
    const dbParams = {
        file_name:req.body.name,
        file_size:req.files['file'].size,
        file_type:req.files['file'].type,
        file_url:`${process.env.CLOUDFRONT_URI}${req.body.name}`,
        post_id:12
    }

    try{
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
          res.status(200).json({message:'File upload successful'})
    })
app.use('/auth', authController)
app.use("/posts", postsController);



module.exports = app