const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const physicalshareRoutes = require("./api/routes/physicalshare");
const nscRoutes = require("./api/routes/nsc");
const userRoutes = require('./api/routes/user');
const reRoutes = require('./api/routes/re');
const mfRoutes = require('./api/routes/mf');




  mongoose.connect('mongodb://localhost/dbname',  {useMongoClient: true}, function(err) {
    if (err) {
      console.log("Mongoose Error"+err)
     
    }
});



mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
//  app.use("/products", productRoutes);
app.use("/nsc", nscRoutes);
app.use("/user", userRoutes);
app.use("/physicalshare", physicalshareRoutes);
app.use("/re", reRoutes);
app.use("/mf", mfRoutes);







/** 
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
 // next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    code: error.status||500,
    message :'Error',
    error: {
      message: error.message
    }
  });
});
**/

module.exports = app;
