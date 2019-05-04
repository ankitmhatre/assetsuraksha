const mongoose = require('mongoose');
var cors = require('cors')
var express = require('express');
var app = express();
var fs = require("fs");
var url = require('url')
var bodyParser = require('body-parser')

//Mongoose
mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true});
var db = mongoose.connection;

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));   // to support URL-encoded bodies
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(cors())



var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("AssetSuraksha Server listening at http://%s:%s", host, port)

  
   db.on('error', console.error.bind(console, 'connection error:'));
   db.once('open', function() {
    console.log("We are connected to mongo database");
   });
})




app.post('/checkUserExists', function (req, res) {
   // check from db  
   var ans = {}
   ans["username"] = req.body.username
   ans["doesExists"]= true
   
   res.end( JSON.stringify(ans));
})

