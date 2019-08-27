const http = require('http')
const express = require('express')
const morgan = require('morgan')
const auth = require('./auth')
const app = express();

const cookierParser = require('cookie-parser')



app.use(morgan('dev'))
app.use(cookierParser('123456xxx'))
app.get('/',(req,res)=>{
    res.statusCode=200;
    res.end("Welcome Edemone to your express app!")
})
app.use(auth)
app.get('/secret',(req,res)=>{
    res.statusCode=200;
    res.end("This is ")
})
const server = http.createServer(app);

server.listen(3001,'localhost',()=>{
    console.log("We are off and kicking at localhost:3001");
});