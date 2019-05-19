const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.user_signup = (req, res, next) => {

  if (req.body.email === undefined) {
    return res.status(203).json({
      code: 400,
      message: "No username was specified"
    });
  }
  else if (req.body.password === undefined) {
    return res.status(202).json({
      code: 400,
      message: "No password was specified"
    });
  } else {

    User.find({ email: req.body.email })
      .exec()
      .then(user => {
        if (user.length > 0) {
          return res.status(200).json({
            code: 401,
            message: "A user with the same username already exists."
          });
        } else {

          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: req.body.password
          });


          user
            .save()
            .then(user => {
              const token = jwt.sign(
                {
                  email: user.email,
                  userId: user._id
                },
                "iguessthisiscrypt",
                {
                  expiresIn: "1h"
                }
              );
              return res.status(201).json({
                code: 201,
                message: "User has been created",
                token: token
              });
            })
            .catch(err => {
              console.log(err);
              return res.status(500).json({

                code: 901,
                message: 'An error occurred, Cannot create a user',
                error: err
              });
            });

        }
      });
  }
};

exports.user_login = (req, res, next) => {

  if (req.body.email === undefined) {
    return res.status(203).json({
      code: 400,
      message: "No username was specified"
    });
  }
  else if (req.body.password === undefined) {
    return res.status(202).json({
      code: 400,
      message: "No password was specified"
    });
  } else {

    User.find({ email: req.body.email })
      .exec()
      .then(user => {



        if (user.length < 1 || user.length > 1) {
          return res.status(205).json({
            code: 403,
            message: "Invalid Username or Password"
          });
        } else {

          if (req.body.password === user[0].password) {
            const token = jwt.sign(
              {
                email: user[0].email,
                userId: user[0]._id
              },
              "iguessthisiscrypt",
              {
                expiresIn: "1h"
              }
            );
            return res.status(200).json({
              code: 202,
              message: "success",
              token: token
            });
          } else {
            return res.status(205).json({
              code: 403,
              message: "Invalid password"
            });
          }
        }
      })
      .catch(err => {

        res.status(206).json({
          code: 400,
          message: 'The specified user was not found',
          error: err
        });
      });
  }
};




exports.user_update = (req, res, next) => {

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token === undefined) {
      return res.status(400).json({
        code: 215,
        message: 'No token was specified.'
      })
    } else {
      try {
        const decoded = jwt.verify(token, "iguessthisiscrypt");
        req.userData = decoded;
        console.log("Decoded = " + JSON.stringify(decoded))

        if (decoded.userId === req.params.userId) {




          User.update({ _id: req.params.userId }, {
            name: {
              fname: req.body.fname,
              mname: req.body.mname,
              lname: req.body.lname
            },
            address: {
              line1: req.body.line1,
              state: req.body.state,
              country: req.body.country,
              landmark: req.body.landmark
            },
            contact: {
              mobile: [req.body.mobile],
              email: req.body.email
            },
            is_otp_verified: req.body.is_otp_verified,
            is_email_verified: req.body.is_email_verified
          })
            .exec()
            .then(result => {
              if (result.n === 0) {
                res.status(400).json({
                  code: 608,
                  message: "Invalid filter expression",
                  result: result
                });
              } else {
                res.status(200).json({
                  code: 204,
                  message: "User has been Updated",
                  result: result
                });
              }



            })
            .catch(err => {

              res.status(500).json({
                code: 602,
                message: 'Method not supported',
                error: err
              });
            });















        } else {
          return res.status(401).json({
            code: 604,
            message: "Unauthorized"
          })
          //Unauthorized
        }

      } catch (error) {
        return res.status(403).json({
          code: 301,
          message: 'Invalid access token'
        });
      }
      console.log("haglo 5")

    }
  } catch (error) {
    console.log(error.code)
    return res.status(401).json({
      code: 604,
      message: 'Internal Server Problem'
    });
  }

};
