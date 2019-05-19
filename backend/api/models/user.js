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
        fname:String,
        mname:String,
        lname:String
     },
     address:{  
        line1:String,
        state:String,
        country:String,
        landmark:String
     },
     contact:{  
        mobile:[String],
        email:String
     },
    is_otp_verified:{type :Boolean, default : false},
    is_email_verified:{type :Boolean, default : false}
});

module.exports = mongoose.model('User', userSchema);



