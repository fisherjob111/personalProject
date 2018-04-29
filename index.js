const express = require('express'); //Require express, the lightweight server module
const bodyParser = require("body-parser"); //Require bodyparser, a tool necessary to parse POST values
const fs = require('fs-extra');
const generator = require('./flavorGenerators/generators.js')
//Initialize the app values
const app = express();
//Allow the app to parse values
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//This allows our server to host files
//app.use(express.static(__dirname + '/img'));

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  //__dirname is the directory in nodeJS, useful for building paths
  res.sendFile(__dirname + '/ui/home.html');
  }
);



app.get('/createProfile', (req,res) => {


 var user ={};
 user.profile = {};
 user.profile.factionName = generator.generateFaction();

/*
 fs.readFile('./save.json', 'utf8', (err, data) => {
   if (err) throw err;
   console.log(data);
 });
*/

fs.writeFile('./save.json', JSON.stringify(user), function (err) {
  if (err) throw err;
  console.log('Saved!');
});


res.send(user);


});

app.get('/loadSave',(req,res) => {
  fs.readFile('./save.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Sending JSONString of SavedData');
    res.send(data);
  });

});



app.listen(3000, () => console.log('Example app listening on port 3000!'))
