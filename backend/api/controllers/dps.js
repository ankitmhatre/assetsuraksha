const mongoose = require("mongoose");

const Dps = require("../models/dps");
const jwt = require("jsonwebtoken");

exports.dps_get_all = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");
    Dps.find({ userId: decoded.userId })
      .exec()
      .then(dpss => {
        return res.status(200).json({
          code: 200,
          message: 'success',
          dpss: dpss
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

exports.dps_create_dps = (req, res, next) => {

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

        const dps = new Dps({
          userId: decoded.userId,
          _id: mongoose.Schema.Types.ObjectId,
          isDematerialized: req.body.isDematerialized,
          noOfPhysicalShares: req.body.noOfPhysicalShares,
          totalDematsAcounts:req.body.totalDematsAcounts,
          noOfCertificates: req.body.noOfCertificates,
          sr_no: req.body.sr_no,
          dpName: req.body.dpName,
          depositoryType:req.body.depositoryType,
          DMATtype: req.body.DMATtype,
          dpID: req.body.dpID,
          clientID: req.body.clientID,
          dmatAccount: req.body.dmatAccount,
      
          holdingMode: req.body.holdingMode,
          soleFname: req.body.soleFname,
          soleMname: req.body.soleMname,
          soleLname:req.body.soleLname,
          minorSole: req.body.minorSole,
          jointFname: req.body.jointFname,
          jointMname: req.body.jointMname,
          jointLname:req.body.jointLname,
          minorJoint: req.body.minorJoint,
          jointPAN: req.body.jointPAN,
          thirdHolderFname: req.body.thirdHolderFname,
          thirdHolderMname: req.body.thirdHolderMname,
          thirdHolderLname: req.body.thirdHolderLname,
          minorThirdHolder: req.body.minorThirdHolder,
          thirdHolderPAN:req.body.thirdHolderPAN,
      
          subBroker: req.body.subBroker,
          brokerName: req.body.brokerName,
          exchangeName: req.body.exchangeName,
          SEBIregistration: req.body.SEBIregistration,
          TradingMode: req.body.TradingMode,
          TradingCode: req.body.TradingCode,
          
          nominationPlace: req.body.nominationPlace,
          nomineeFname: req.body.nomineeFname,
          nomineeMname: req.body.nomineeMname,
          nomineeLname: req.body.nomineeLname,
          nomineeCity: req.body.nomineeCity,
          nomineeState: req.body.nomineeState,
          nomineePincode: req.body.nomineePincode,
          nomineePAN: req.body.nomineePAN,
          relationship: req.body.relationship,
          nomineeContact: req.body.nomineeContact,
      created:{
          date: req.body.date,
          time: req.body.time
      }
      });


        dps
          .save()
          .then(dps => {


            return res.status(201).json({
              code: 201,
              message: "Dps has been created"
            });


          })
          .catch(err => {
            console.log(err);
            return res.status(200).json({
              error_code: 500,
              code: 901,
              message: 'An error occurred, Cannot create new Dps',
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

exports.dps_get_dps = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");
    Dps.findOne({ _id: req.params.dpsId })
      .exec()
      .then(dps => {
        if (dps.userId === decoded.userId) {
          res.status(200).json({

            code: 200,
            message: "Success",
            dps: dps
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

exports.dps_update = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");

    const dps = new Dps({

      isDematerialized: req.body.isDematerialized,
      noOfPhysicalShares: req.body.noOfPhysicalShares,
      totalDematsAcounts:req.body.totalDematsAcounts,
      noOfCertificates: req.body.noOfCertificates,
      sr_no: req.body.sr_no,
      dpName: req.body.dpName,
      depositoryType:req.body.depositoryType,
      DMATtype: req.body.DMATtype,
      dpID: req.body.dpID,
      clientID: req.body.clientID,
      dmatAccount: req.body.dmatAccount,
  
      holdingMode: req.body.holdingMode,
      soleFname: req.body.soleFname,
      soleMname: req.body.soleMname,
      soleLname:req.body.soleLname,
      minorSole: req.body.minorSole,
      jointFname: req.body.jointFname,
      jointMname: req.body.jointMname,
      jointLname:req.body.jointLname,
      minorJoint: req.body.minorJoint,
      jointPAN: req.body.jointPAN,
      thirdHolderFname: req.body.thirdHolderFname,
      thirdHolderMname: req.body.thirdHolderMname,
      thirdHolderLname: req.body.thirdHolderLname,
      minorThirdHolder: req.body.minorThirdHolder,
      thirdHolderPAN:req.body.thirdHolderPAN,
  
      subBroker: req.body.subBroker,
      brokerName: req.body.brokerName,
      exchangeName: req.body.exchangeName,
      SEBIregistration: req.body.SEBIregistration,
      TradingMode: req.body.TradingMode,
      TradingCode: req.body.TradingCode,
      
      nominationPlace: req.body.nominationPlace,
      nomineeFname: req.body.nomineeFname,
      nomineeMname: req.body.nomineeMname,
      nomineeLname: req.body.nomineeLname,
      nomineeCity: req.body.nomineeCity,
      nomineeState: req.body.nomineeState,
      nomineePincode: req.body.nomineePincode,
      nomineePAN: req.body.nomineePAN,
      relationship: req.body.relationship,
      nomineeContact: req.body.nomineeContact
  });


    Dps.update({ _id: req.params.dpsId, userId: decoded.userId }, dps)
      .exec()
      .then(dps => {
        res.status(200).json({
          code: 200,
          message: "success",
          result: dps
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

exports.dps_delete_dps = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");

    Dps.remove({ _id: req.params.dpsId, userId: decoded.userId })
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
