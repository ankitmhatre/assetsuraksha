
var nodemailer = require('nodemailer');

exports.sendMail = (to, subject, message) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'assetsuraksha19@gmail.com',
            pass: 'suraksha123'
        },
        debug: true
    });

    var mailOptions = {
        from: 'assetsuraksha19@gmail.com',
        to: to,
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {    
            console.log('Email sent: ' + info.response);
        }
    });

}