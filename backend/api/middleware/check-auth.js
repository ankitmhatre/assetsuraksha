const jwt = require('jsonwebtoken');

var crypto = require('crypto');

module.exports = (req, res, next) => {
    try {
        try{
        const token = req.headers.authorization.split(" ")[1];
        }catch(error){
            return res.status(400).json({
                code:215,
                message : 'No token was specified.'
            })
        }
        const token = req.headers.authorization.split(" ")[1];
        if(token === undefined){
        return res.status(400).json({
            code:215,
            message : 'No token was specified.'
        })
    }else{
        try {
        const decoded = jwt.verify(token, "iguessthisiscrypt");
        req.userData = decoded;
        }catch (error){
            console.log(JSON.stringify(error))
            return res.status(403).json({
                code : 301,
                message: 'Invalid access token'
            }); 
        }
        next();
    }
    } catch (error) {
        console.log(error.code)
        return res.status(404).json({
            code : 600,
            message: 'Not found'
        });
    }
};