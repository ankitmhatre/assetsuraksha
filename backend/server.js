const http = require('http');
const mongoose = require('mongoose');
const hostname = '127.0.0.1';
const port = 3000;

var cors = require('cors')
var express = require('express');
var app = express();
var fs = require("fs");

var url = require('url');


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(cors())






app.post('/checkUserExists', function (req, res) {
   // First read existing users.

   var ans = {}
   ans["username"] = req.body.username
   ans["doesExists"]= true
   
   res.end( JSON.stringify(ans));
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

   mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true});
   var db = mongoose.connection;
   db.on('error', console.error.bind(console, 'connection error:'));
   db.once('open', function() {
    console.log("We are connected to Monogo database");
   });
   

})