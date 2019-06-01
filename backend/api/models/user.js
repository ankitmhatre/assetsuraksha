const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email: { 
        type: String, 
        required: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    name:{  
        firstName:String,
        lastName:String
     },
     gender: String, 
     address:{  
        line1: String,
        line2: String,
        line3:String,
        city: String,
        state: String,
        country:String
     },
     phoneNumber:String,
    is_otp_verified:{type :Boolean, default : false}
});

module.exports = mongoose.model('User', userSchema);



