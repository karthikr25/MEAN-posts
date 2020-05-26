const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts");

const Post = require('./models/post');

mongoose.connect("mongodb+srv://Karthik:Ganesha_7@cluster0-7tshq.mongodb.net/node-angular?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(() => {
        console.log("Connection to DB failed");
    });


app.use(bodyParser.json());
app.use((bodyParser.urlencoded({extended: false})));

app.use((req,res,next) => {
   res.setHeader('Access-Control-Allow-Origin',"*") ;
   res.setHeader('Access-Control-Allow-Headers',"Origin,X-Requested-With,Content-Type,Accept");
   res.setHeader('Access-Control-Allow-Methods',"GET,POST,DELETE,PATCH,PUT,OPTIONS");
    next();
});

app.use("/api/posts", postsRoutes);

module.exports= app;