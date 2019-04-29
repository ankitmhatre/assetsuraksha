const http = require('http');
const mongoose = require('mongoose');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('{"name" : "ankit"}');
  
});

mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("We are connected");












 var kittySchema = new mongoose.Schema({
    name: String
  });
  kittySchema.methods.speak = function () {
    var greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  }


  var Kitten = mongoose.model('Kitten', kittySchema);
  var silence = new Kitten({ name: 'meowwwww' });
  console.log(silence.name); 


silence.speak(); // "Meow name is fluffy"
silence.save(function (err, silence) {
    if (err) return console.error(err);
    silence.speak();
  });

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

