const mongoose = require('mongoose');

const mfSchema = mongoose.Schema(
    {
        userId: String, 
        _id: mongoose.Schema.Types.ObjectId,
        noOfFolios: String,
        folioNo: String,
        folioName: String,
        ISIC: String,
        typeOfFund: String,
        noOfUnits: String,
        clientID: String,
        dmatAccount: String,
        postOffice: String,
        location: String,
        typeOfPayment: String,

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

        dealingDistributor: String,
        distributorName: String,
        ARNcode: String,

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

        debitManadate: String,
        bankName: String,
        accountType: String,
        accountNumber: String,
        branchName: String,

        created: {
            date: String,
            time: String
        }
    }
);

module.exports = mongoose.model('Mf', mfSchema);

