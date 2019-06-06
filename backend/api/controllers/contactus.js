const mongoose = require("mongoose");

const Contact = require("../models/contactus");
const jwt = require("jsonwebtoken");

exports.contact_us = (req, res, next) => {

    if (req.body.title === undefined || req.body.title === null) {
        return res.status(400).json({
            code: 215,
            message: 'No Title was specified.'
        })
    }
    if (req.body.email === undefined || req.body.email === null) {
        return res.status(400).json({
            code: 215,
            message: 'No Email was specified.'
        })
    }
    if (req.body.name === undefined || req.body.name === null) {
        return res.status(400).json({
            code: 215,
            message: 'No Name was specified.'
        })
    }
    if (req.body.query === undefined || req.body.query === null) {
        return res.status(400).json({
            code: 215,
            message: 'No Query was specified.'
        })
    }


    //send email to us 
    const contactobj = new Contact({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        title: req.body.title,
        name: req.body.name,
        query: req.body.query
    });




    contactobj
        .save()
        .then(contact => {

            return res.status(201).json({
                code: 201,
                message: "Yor response has been recorded",
                contact: contact
            });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({

                code: 901,
                message: 'An error occurred, Cannot record your response',
                error: err
            });
        });

};
