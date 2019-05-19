const mongoose = require("mongoose");

const Kvp = require("../models/kvp");
const jwt = require("jsonwebtoken");

exports.kvp_get_all = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");
    Kvp.find({ userId: decoded.userId })
      .exec()
      .then(kvps => {
        return res.status(200).json({
          code: 200,
          message: 'success',
          kvps: kvps
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

exports.kvp_create_kvp = (req, res, next) => {

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

        const kvp = new Kvp({
          userId: decoded.userId,
          _id: new mongoose.Types.ObjectId(),

          KVPissue: req.body.KVPissue,
          self_agent: req.body.self_agent,
          agentName: req.body.agentName,
          agentCode: req.body.agentCode,
          noOfCertificates: req.body.noOfCertificates,
          sr_no: req.body.sr_no,
          certificateFormat: req.body.certificateFormat,
          certificateNumber: req.body.certificateNumber,
          postOffice: req.body.postOffice,
          location: req.body.location,
          faceValue: req.body.faceValue,
          maturityPeriod: req.body.maturityPeriod,
          maturityAmount: req.body.maturityAmount,

          holdingMode: req.body.holdingMode,
          soleFname: req.body.soleFname,
          soleMname: req.body.soleMname,
          soleLname: req.body.soleLname,
          minorSole: req.body.minorSole,
          jointFname: req.body.jointFname,
          jointMname: req.body.jointMname,
          jointLname: req.body.jointLname,
          minorJoint: req.body.minorJoint,
          jointPAN: req.body.jointPAN,
          thirdHolderFname: req.body.thirdHolderFname,
          thirdHolderMname: req.body.jointMname,
          thirdHolderLname: req.body.thirdHolderLname,
          minorThirdHolder: req.body.minorThirdHolder,
          thirdHolderPAN: req.body.thirdHolderPAN,

          nominationPlace: req.body.nominationPlace,
          nomineeFname: req.body.nomineeFname,
          nomineeMname: req.body.nomineeMname,
          nomineeLname: req.body.nomineeLname,
          nomineeCity: req.body.nomineeCity,
          nomineeState: req.body.nomineeCity,
          nomineePincode: req.body.nomineePincode,
          nomineePAN: req.body.nomineePAN,
          relationship: req.body.relationship,
          nomineeContact: req.body.nomineeContact,
          created: {
            date: req.body.date,
            time: req.body.time,
          }
        });


        kvp
          .save()
          .then(kvp => {


            return res.status(201).json({
              code: 201,
              message: "Kvp has been created"
            });


          })
          .catch(err => {
            console.log(err);
            return res.status(200).json({
              error_code: 500,
              code: 901,
              message: 'An error occurred, Cannot create new Kvp',
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

exports.kvp_get_kvp = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");
    Kvp.findOne({ _id: req.params.kvpId })
      .exec()
      .then(kvp => {
        if (kvp.userId === decoded.userId) {
          res.status(200).json({

            code: 200,
            message: "Success",
            kvp: kvp
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

exports.kvp_update = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");

    const kvp = new Kvp({
      KVPissue: req.body.KVPissue,
      self_agent: req.body.self_agent,
      agentName: req.body.agentName,
      agentCode: req.body.agentCode,
      noOfCertificates: req.body.noOfCertificates,
      sr_no: req.body.sr_no,
      certificateFormat: req.body.certificateFormat,
      certificateNumber: req.body.certificateNumber,
      postOffice: req.body.postOffice,
      location: req.body.location,
      faceValue: req.body.faceValue,
      maturityPeriod: req.body.maturityPeriod,
      maturityAmount: req.body.maturityAmount,

      holdingMode: req.body.holdingMode,
      soleFname: req.body.soleFname,
      soleMname: req.body.soleMname,
      soleLname: req.body.soleLname,
      minorSole: req.body.minorSole,
      jointFname: req.body.jointFname,
      jointMname: req.body.jointMname,
      jointLname: req.body.jointLname,
      minorJoint: req.body.minorJoint,
      jointPAN: req.body.jointPAN,
      thirdHolderFname: req.body.thirdHolderFname,
      thirdHolderMname: req.body.jointMname,
      thirdHolderLname: req.body.thirdHolderLname,
      minorThirdHolder: req.body.minorThirdHolder,
      thirdHolderPAN: req.body.thirdHolderPAN,

      nominationPlace: req.body.nominationPlace,
      nomineeFname: req.body.nomineeFname,
      nomineeMname: req.body.nomineeMname,
      nomineeLname: req.body.nomineeLname,
      nomineeCity: req.body.nomineeCity,
      nomineeState: req.body.nomineeCity,
      nomineePincode: req.body.nomineePincode,
      nomineePAN: req.body.nomineePAN,
      relationship: req.body.relationship,
      nomineeContact: req.body.nomineeContact
    });


    Kvp.update({ _id: req.params.kvpId, userId: decoded.userId }, kvp)
      .exec()
      .then(kvp => {
        res.status(200).json({
          code: 200,
          message: "success",
          result: kvp
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

exports.kvp_delete_kvp = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");

    Kvp.remove({ _id: req.params.kvpId, userId: decoded.userId })
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
