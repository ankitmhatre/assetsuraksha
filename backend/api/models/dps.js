const mongoose = require('mongoose');

const dpsSchema = mongoose.Schema({
    userId: String,
    _id: mongoose.Schema.Types.ObjectId,
    isDematerialized: String,
    noOfPhysicalShares: String,
    totalDematsAcounts:String,
    noOfCertificates: String,
    sr_no: String,
    dpName: String,
    depositoryType:String,
    DMATtype: String,
    dpID: String,
    clientID: String,
    dmatAccount: String,

    holdingMode: String,
    soleFname: String,
    soleMname: String,
    soleLname:String,
    minorSole: String,
    jointFname: String,
    jointMname: String,
    jointLname:String,
    minorJoint: String,
    jointPAN: String,
    thirdHolderFname: String,
    thirdHolderMname: String,
    thirdHolderLname: String,
    minorThirdHolder: String,
    thirdHolderPAN:String,

    subBroker: String,
    brokerName: String,
    exchangeName: String,
    SEBIregistration: String,
    TradingMode: String,
    TradingCode: String,
    
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
created:{
    date: String,
    time: String
}
});

module.exports = mongoose.model('Dps', dpsSchema);

