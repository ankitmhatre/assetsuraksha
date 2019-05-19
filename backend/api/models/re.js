const mongoose = require('mongoose');

const reSchema = mongoose.Schema({
    userId: String, 
    _id: mongoose.Schema.Types.ObjectId,
    realEstateType: String,
    typeOfLand: String,
    purchasedBy: String,
    ownership:String,

    holdingMode: String,
    soleFname: String,
    soleMname: String,
    soleLname:String,
    minorSole: String,
    jointFname: String,
    jointMname: String,
    jointLname: String,
    minorJoint: String,
    jointPAN:String,
    thirdHolderFname: String,
    thirdHolderMname: String,
    thirdHolderLname: String,
    minorThirdHolder: String,
    thirdHolderPAN: String,

    village: String,
    taluka: String,
    district: String,
    surveyNo: String,
    landArea: String,
    typeOfLand7_12: String,
    classOfLand: String,
    registeredCrop: String,
    isForestLand: String,
    forestArea: String,
    accessToLand: String,
    fencing: String,
    electricity: String,
    waterSource: String,
    structureOnLand: String,
    nearestVillageDistance: String,
    landSurveyDone: String,
    possesionOfLand: String,
    created: {
        date: String,
        time: String,
    }
}
);

module.exports = mongoose.model('Re', reSchema);

