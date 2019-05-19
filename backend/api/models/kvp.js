const mongoose = require('mongoose');

const kvpSchema = mongoose.Schema({
    userId: String,
    _id: mongoose.Schema.Types.ObjectId,
    KVPissue: String,
    self_agent: String,
    agentName: String,
    agentCode: String,
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
    jointFname: String,
    jointMname: String,
    jointLname: String,
    minorJoint: String,
    jointPAN: String,
    thirdHolderFname: String,
    thirdHolderMname: String,
    thirdHolderLname: String,
    minorThirdHolder: String,
    thirdHolderPAN: String,

    nominationPlace: String,
    nomineeFname: String,
    nomineeMname: String,
    nomineeLname: String,
    nomineeCity: String,
    nomineeState: String,
    nomineePincode: String,
    nomineePAN: String,
    relationship: String,
    nomineeContact: String,
    created: {
        date: String,
        time: String,
    }
});

module.exports = mongoose.model('Kvp', kvpSchema);

