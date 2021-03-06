const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.user_signup = (req, res, next) => {

  if (req.body.email === undefined || req.body.email === null || req.body.email.length < 5) {
    return res.status(203).json({
      code: 400,
      message: "No username was specified"
    });
  }
  else if (req.body.password === undefined || req.body.password === null || req.body.password.length < 5) {
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

exports.user_verify = (req, res, next) => {

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

        // console.log("Decoded = " + JSON.stringify(decoded))

        //decoded.userId


        if (req.body.phoneNumber !== undefined || req.body.phoneNumber !== null) {
          var otp_num = Math.floor(100000 + Math.random() * 900000)
          const accountSid = 'AC1328a1efa305162dff1b4e31d697c5fe';
          const authToken = 'f7036092f3d60f451f7dcf20ff3120df';
          const client = require('twilio')(accountSid, authToken);

          client.messages
            .create({
              body: 'Your OTP for Asset Suraksha is ' + otp_num,
              from: '+15017122661',
              to: '' + req.body.phoneNumber
            })
            .then(message => {
              console.log(message.sid)
              return res.status(400).json({
                code: 215,
                message: 'OTP send successfully',
                otp: otp_num
              })

            }).catch(err => {
              console.log(err)
              return res.status(400).json({
                code: 400,
                message: 'Failed to send Message.',
                err: err
              })
            });

        } else {
          return res.status(403).json({
            code: 401,
            message: 'No Phone Number provided'
          });
        }
      } catch (error) {
        return res.status(403).json({
          code: 301,
          message: 'Invalid access token'
        });
      }


    }
  } catch (error) {
    console.log(error.code)
    return res.status(401).json({
      code: 604,
      message: 'Internal Server Problem'
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

        // console.log("Decoded = " + JSON.stringify(decoded))




        User.update({ _id: decoded.userId }, {
          name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName
          },
          address: {
            line1: req.body.line1,
            line2: req.body.line2,
            line3: req.body.line3,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country
          },
          contact: {
            mobile: req.body.phoneNumber
          },
          is_otp_verified: req.body.is_otp_verified
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


      } catch (error) {
        return res.status(403).json({
          code: 301,
          message: 'Invalid access token'
        });
      }


    }
  } catch (error) {
    console.log(error.code)
    return res.status(401).json({
      code: 604,
      message: 'Internal Server Problem'
    });
  }

};


exports.user_getProfile = (req, res, next) => {
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
        User.findOne({ _id: decoded.userId })
          .exec()
          .then(user => {

            return res.status(200).json({

              code: 200,
              message: "Success",
              user: user
            });


          })
          .catch(err => {
            res.status(404).json({

              code: 600,
              message: "Not Found",
              error: err
            });
          })
      } catch (error) {
        return res.status(403).json({
          code: 301,
          message: 'Invalid access token'
        });
      }


    }
  } catch (error) {
    console.log(error.code)
    return res.status(401).json({
      code: 604,
      message: 'Internal Server Problem'
    });
  }

};