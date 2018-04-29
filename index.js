const express = require('express'); //Require express, the lightweight server module
const bodyParser = require("body-parser"); //Require bodyparser, a tool necessary to parse POST values
const formidable = require('formidable');
const fs = require('fs');
//Initialize the app values
const app = express();
//Allow the app to parse values
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//This allows our server to host files
app.use(express.static(__dirname + '/img'));


app.listen(3000, () => console.log('Example app listening on port 3000!'))
