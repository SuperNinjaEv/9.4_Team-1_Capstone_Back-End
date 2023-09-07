const express = require('express')
const cors = require('cors')
const jsonParser = express.json()
const app = express()
const authController = require('./controllers/authController')
const postsController = require("./controllers/postsController");
const fileUpload = require('express-fileupload')
app.use(cors({
    origin:process.env.ORIGIN || 'http://localhost:5173',
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
app.use('/auth', authController)
app.use("/posts", postsController);



module.exports = app