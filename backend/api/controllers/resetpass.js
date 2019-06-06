const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.reset_pass = (req, res, next) => {

    if (req.body.email === undefined || req.body.email === null) {
        return res.status(203).json({
            code: 400,
            message: "No Email was specified"
        });
    }

    var otp_num = Math.floor(100000 + Math.random() * 900000)


    //send mail with otp 

    return res.status(201).json({
        code: 201,
        message: "Otp has been sent",
        otp: otp_num
    });



};


exports.new_password = (req, res, next) => {
    if (req.body.email === undefined || req.body.email === null) {
        return res.status(203).json({
            code: 400,
            message: "No Email was specified"
        });
    }

    if (req.body.pass === undefined || req.body.pass === null) {
        return res.status(203).json({
            code: 400,
            message: "No Pass word  was specified"
        });
    }

    User.findOne({ email: req.body.email })
        .exec()
        .then(response => {
            User.update({ email: req.body.email }, { password: req.body.password })
                .exec()
                .then(rew => {
                    return res.status(201).json({
                        code: 201,
                        message: "Password has been reset"
                    });
                })
                .catch(err => {
                    console.log(err)
                    return res.status(201).json({
                        code: 201,
                        message: "Error",
                        error: err
                    });
                })
        })
        .catch(err => { console.log(err) })




};