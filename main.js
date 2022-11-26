
// this dependency allows us to use express
const express = require("express");
// this dependency allows us ot parse input in the body to retrieve the data and manipulate it such as html form inputs
const bodyParser = require("body-parser");
const session = require('express-session');
const routes = require('./controllers');

const http = require("http");

// declaration of variables to be used 
const app = express();
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// THIS will listen on port 3000 to deploy locally or which ever port is used by server when deployed
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

// use body parser with express to encode html info
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
app.use(express.json());
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  

// allows for get request to work on any server outside of local computer when website is posted and find folder with html info
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    
})

//setting up which port to listen on
app.listen(PORT, function() {
    // testing to make sure its working
    console.log("this is running on port 3000, because why not?");
});