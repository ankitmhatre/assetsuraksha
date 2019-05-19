const mongoose = require("mongoose");

const Re = require("../models/re");
const jwt = require("jsonwebtoken");

exports.re_get_all = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");
    Re.find({ userId: decoded.userId })
      .exec()
      .then(res => {
        return res.status(200).json({
          code: 200,
          message: 'success',
          res: res
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err,
          code: 501,
          message: "Internal server error"
        });
      });
  }
};

exports.re_create_re = (req, res, next) => {

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token === undefined) {
      return res.status(400).json({
        code: 215,
        message: 'No token was specified.'
      })
    } else {
      try {
        const decoded = jwt.verify(token, "iguessthisiscrypt");
        req.userData = decoded;
        console.log("Decoded = " + JSON.stringify(decoded))


        //allowed same user

        const re = new Re({
          userId: decoded.userId, 
          _id: mongoose.Schema.Types.ObjectId,
          realEstateType: req.body.realEstateType,
          typeOfLand:  req.body.typeOfLand,
          purchasedBy:  req.body.purchasedBy,
          ownership: req.body.ownership,
          holdingMode:  req.body.holdingMode,
          soleFname:  req.body.soleFname,
          soleMname:  req.body.soleMname,
          soleLname: req.body.soleLname,
          minorSole:  req.body.minorSole,
          jointFname:  req.body.jointFname,
          jointMname:  req.body.jointMname,
          jointLname:  req.body.jointLname,
          minorJoint:  req.body.minorJoint,
          jointPAN: req.body.jointPAN,
          thirdHolderFname:  req.body.thirdHolderFname,
          thirdHolderMname:  req.body.thirdHolderMname,
          thirdHolderLname:  req.body.thirdHolderLname,
          minorThirdHolder:  req.body.minorThirdHolder,
          thirdHolderPAN:  req.body.thirdHolderPAN,
          village:  req.body.village,
          taluka:  req.body.taluka,
          district:  req.body.district,
          surveyNo:  req.body.surveyNo,
          landArea:  req.body.landArea,
          typeOfLand7_12:  req.body.typeOfLand7_12,
          classOfLand:  req.body.classOfLand,
          registeredCrop:  req.body.registeredCrop,
          isForestLand:  req.body.isForestLand,
          forestArea:  req.body.forestArea,
          accessToLand:  req.body.accessToLand,
          fencing:  req.body.fencing,
          electricity:  req.body.electricity,
          waterSource:  req.body.waterSource,
          structureOnLand:  req.body.structureOnLand,
          nearestVillageDistance:  req.body.nearestVillageDistance,
          landSurveyDone:  req.body.landSurveyDone,
          possesionOfLand:  req.body.possesionOfLand,
          created: {
              date:  req.body.date,
              time:  req.body.time,
          }
      });


        re
          .save()
          .then(re => {


            return res.status(201).json({
              code: 201,
              message: "Real Estate  has been created"
            });


          })
          .catch(err => {
            console.log(err);
            return res.status(200).json({
              error_code: 500,
              code: 901,
              message: 'An error occurred, Cannot create new Real Estate',
              error: err
            });
          });

      } catch (error) {

      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });


  }












};

exports.re_get_re = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");
    Re.findOne({ _id: req.params.reId })
      .exec()
      .then(re => {
        if (re.userId === decoded.userId) {
          res.status(200).json({

            code: 200,
            message: "Success",
            re: re
          });
        } else {
          res.status(404).json({

            code: 600,
            message: "Not Found",

          });

        }

      })
      .catch(err => {
        res.status(200).json({
          error: err,
          code: 500,
          message: "Internal server error"
        });
      });
  }
};

exports.re_update = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");

    const re = new Re({
  
      realEstateType: req.body.realEstateType,
      typeOfLand:  req.body.typeOfLand,
      purchasedBy:  req.body.purchasedBy,
      ownership: req.body.ownership,
      holdingMode:  req.body.holdingMode,
      soleFname:  req.body.soleFname,
      soleMname:  req.body.soleMname,
      soleLname: req.body.soleLname,
      minorSole:  req.body.minorSole,
      jointFname:  req.body.jointFname,
      jointMname:  req.body.jointMname,
      jointLname:  req.body.jointLname,
      minorJoint:  req.body.minorJoint,
      jointPAN: req.body.jointPAN,
      thirdHolderFname:  req.body.thirdHolderFname,
      thirdHolderMname:  req.body.thirdHolderMname,
      thirdHolderLname:  req.body.thirdHolderLname,
      minorThirdHolder:  req.body.minorThirdHolder,
      thirdHolderPAN:  req.body.thirdHolderPAN,
      village:  req.body.village,
      taluka:  req.body.taluka,
      district:  req.body.district,
      surveyNo:  req.body.surveyNo,
      landArea:  req.body.landArea,
      typeOfLand7_12:  req.body.typeOfLand7_12,
      classOfLand:  req.body.classOfLand,
      registeredCrop:  req.body.registeredCrop,
      isForestLand:  req.body.isForestLand,
      forestArea:  req.body.forestArea,
      accessToLand:  req.body.accessToLand,
      fencing:  req.body.fencing,
      electricity:  req.body.electricity,
      waterSource:  req.body.waterSource,
      structureOnLand:  req.body.structureOnLand,
      nearestVillageDistance:  req.body.nearestVillageDistance,
      landSurveyDone:  req.body.landSurveyDone,
      possesionOfLand:  req.body.possesionOfLand
  });


    Re.update({ _id: req.params.reId, userId: decoded.userId }, re)
      .exec()
      .then(re => {
        res.status(200).json({
          code: 200,
          message: "success",
          result: re
        })
      })
      .catch(err => {
        res.status(200).json({
          error: err,
          code: 500,
          message: "Internal server error"
        });
      });

  }
};

exports.re_delete_re = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");

    Re.remove({ _id: req.params.reId, userId: decoded.userId })
      .exec()
      .then(result => {
        res.status(200).json({
          code: 200,
          message: "successfully deleted",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  }
};
