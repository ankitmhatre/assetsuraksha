const mongoose = require('mongoose');

const physicalshareSchema = mongoose.Schema(
    {
    userID: String,
    _id: mongoose.Schema.Types.ObjectId,
    noOfCertificates: String,
    certificateNumber: String,
    companyName: String,
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
    securityType: String,
    inFigures: String,
    inWords: String,
    faceValue: String,
    ISIN: String,
    securityStatus: String,
    folioNumber: String,
    certiNoFrom: String,
    certiNoTo: String,
    distinctiveNoFrom: String,
    distinctiveNoTo: String,
    quantity: String,
    sr_no: String,
    lockedInReason: String,
    lockedInReleaseDate: String,
    created: {
        date: String,
        time: String
    }
});

module.exports = mongoose.model('PS', physicalshareSchema);

