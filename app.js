const express = require('express')
const cors = require('cors')
const jsonParser = express.json()
const app = express()
const authController = require('./controllers/authController')

const toolsController = require("./controllers/toolsController")
const postsController = require('./controllers/postsController')
const fileUpload = require('express-fileupload')
app.use(
  cors({
    origin: process.env.ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
)

app.use(jsonParser)
app.use(fileUpload())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  // res.header('Access-Control-Allow-Credentials', 'true')
  next()
})
app.use('/auth', authController)

app.get('/', (_, res) => res.send('hello'))
app.use('/posts', postsController)
app.use("/tools", toolsController);


module.exports = app
