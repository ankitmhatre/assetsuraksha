const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.user_signup = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
      
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: req.body.password
            });

            
         user
              .save()
              .then(result => {
                console.log(result);
              return  res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
            return  res.status(500).json({
                  error: err
                });
              });

          }
    });
};

exports.user_login = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
     
        if (req.body.password ===  user[0].password) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id
            },
            "asasdadadadas",
            {
              expiresIn: "1h"
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token
          });
        }

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.user_delete = (req, res, next) => {
  User.remove({ _id: req.params.userId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};
