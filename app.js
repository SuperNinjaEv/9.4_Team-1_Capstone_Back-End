const express = require('express');
const cors = require('cors');
const jsonParser = express.json();
const app = express();  
const authController = require('./controllers/authController');
let postsController = require("./controllers/postsController");

let busboy = require('connect-busboy');
const fs = require('fs');

app.use(cors({
    origin: process.env.ORIGIN, //'http://localhost:5173', //process.env.ORIGIN || 'http://localhost:3000', //COMMENTED BECAUSE RUNNING TESTS
    credentials: true,
}));

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(busboy());

app.post('/upload', function(req, res) {
  req.pipe(req.busboy);
  req.busboy.on('file', function(fieldname, file, filename) {
    let fstream = fs.createWriteStream(`${__dirname}/public/files/${filename}` + filename);
    file.pipe(fstream);
    fstream.on('close', function () {
      res.send('upload succesful');
    });
  });
});

app.use(jsonParser)

app.get('/', (_,res)=>res.send('hello'))
app.use('/auth', authController)
app.use("/posts", postsController);

module.exports = app