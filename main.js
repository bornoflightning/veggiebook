
// this dependency allows us to use express
const express = require("express");
// this dependency allows us ot parse input in the body to retrieve the data and manipulate it such as html form inputs
const bodyParser = require("body-parser");

const http = require("http");

const app = express();

// use body parser with express to encode html info
app.use(bodyParser.urlencoded({extended: true}));

// allows for get request to work on any server outside of local computer when website is posted and find folder with html info
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

//setting up which port to listen on
app.listen(3000, function() {
    // testing to make sure its working
    console.log("this is running on port 3000, because why not?");
});