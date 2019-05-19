const mongoose = require('mongoose');

const nscSchema = mongoose.Schema({
    userId: String,
    _id: mongoose.Schema.Types.ObjectId,
    self_agent: String,
    agentName: String,
    agentCode: String,
    NSCissue: String,
    noOfCertificates: String,
    sr_no: String,
    certificateFormat: String,
    certificateNumber: String,
    postOffice: String,
    location: String,
    faceValue: String,
    maturityPeriod: String,
    maturityAmount: String,

    holdingMode: String,
    soleFname: String,
    soleMname: String,
    soleLname: String,
    minorSole: String,
    jointName: {
        jointFname: String,
        jointMname: String,
        jointLname: String
    },

    minorJoint: String,
    jointPAN: String,
    thirdHolderName: {
        thirdHolderFname: String,
        thirdHolderMname: String,
        thirdHolderLname: String
    },

    minorThirdHolder: String,
    thirdHolderPAN: String,

    nominationPlace: String,
    nomineeName: {
        nomineeFname: String,
        nomineeMname: String,
        nomineeLname: String
    },

    nomineeCity: String,
    nomineeState: String,
    nomineePincode: String,
    nomineePAN: String,
    relationship: String,
    nomineeContact: String,

    created: {
        date: String,
        time: String
    }
});

module.exports = mongoose.model('Nsc', nscSchema);

