const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Utilities = require("../utlities/mail");

exports.reset_pass = (req, res, next) => {

    if (req.body.email === undefined || req.body.email === null) {
        return res.status(203).json({
            code: 400,
            message: "No Email was specified"
        });
    }

    var otp_num = Math.floor(100000 + Math.random() * 900000)
    Utilities.sendMail(req.body.email, 'Asset Suraksha - Password Reset', 'Your OTP for Password reset is ' + otp_num)
    const token = jwt.sign(
        {
            email: req.body.email,
            otp: otp_num,

        },
        "otpcrypt",
        {
            expiresIn: 120
        }
    );


    return res.status(201).json({
        code: 201,
        message: "Otp has been sent",
        otp: otp_num,
        token: token,
        email: req.body.email

    });



};


exports.new_password = (req, res, next) => {
    if (req.body.email === undefined || req.body.email === null) {
        return res.status(203).json({
            code: 400,
            message: "No Email was specified"
        });
    }

    if (req.body.password === undefined || req.body.password === null) {
        return res.status(203).json({
            code: 400,
            message: "No Pass word  was specified"
        });
    }
    if (req.body.token === undefined || req.body.token === null) {
        return res.status(203).json({
            code: 400,
            message: "No Token  was specified"
        });
    }
    if (req.body.otp === undefined || req.body.otp === null) {
        return res.status(203).json({
            code: 400,
            message: "No Otp  was specified"
        });
    }

    /////////////////////////////////////

    const decoded = jwt.verify(req.body.token, "otpcrypt");

    if (decoded.email === req.body.email && decoded.otp === req.body.otp) {
        //token valid

    } else {

    }



    User.findOne({ email: req.body.email })
        .exec()
        .then(response => {
            console.log(JSON.stringify(response))
        })
        .catch(err => { console.log(err) })




};