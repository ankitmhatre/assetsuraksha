const mongoose = require('mongoose');

const contactus = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    name: String,
    title: String,
    query: String

});

module.exports = mongoose.model('ContactUs', contactus);



