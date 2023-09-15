const express = require('express')
//const multer = require('multer')
//const upload = multer({ dest: 'uploads/' })
const cors = require('cors')
const jsonParser = express.json()
const app = express()
const authController = require('./controllers/authController');
const postsController = require('./controllers/postsController');
const fileUpload = require('express-fileupload')

app.use(fileUpload());

app.use(cors({
    origin:process.env.ORIGIN || 'http://localhost:3000',
    credentials:true,
}))

app.use(jsonParser)

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/auth', authController)
app.use("/posts", postsController); //.post /posts to reach posts from front end  

module.exports = app
