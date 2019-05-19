const mongoose = require("mongoose");

const Nsc = require("../models/nsc");
const jwt = require("jsonwebtoken");

exports.nsc_get_all = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");
    Nsc.find({ userId: decoded.userId })
      .exec()
      .then(nscs => {
        return res.status(200).json({
          code: 200,
          message: 'success',
          nscs: nscs
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

exports.nsc_create_nsc = (req, res, next) => {

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

        const nsc = new Nsc({
          userId: decoded.userId,
          _id: new mongoose.Types.ObjectId(),
          self_agent: req.body.self_agent,
          agentName: req.body.agentName,
          agentCode: req.body.agentCode,
          NSCissue: req.body.NSCissue,
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
          jointName: {
            jointFname: req.body.jointFname,
            jointMname: req.body.jointMname,
            jointLname: req.body.jointLname
          },

          minorJoint: req.body.minorJoint,
          jointPAN: req.body.jointPAN,
          thirdHolderName: {
            thirdHolderFname: req.body.thirdHolderFname,
            thirdHolderMname: req.body.thirdHolderMname,
            thirdHolderLname: req.body.thirdHolderLname
          },

          minorThirdHolder: req.body.minorThirdHolder,
          thirdHolderPAN: req.body.thirdHolderPAN,

          nominationPlace: req.body.nominationPlace,
          nomineeName: {
            nomineeFname: req.body.nomineeFname,
            nomineeMname: req.body.nomineeMname,
            nomineeLname: req.body.nomineeLname
          },

          nomineeCity: req.body.nomineeCity,
          nomineeState: req.body.nomineeState,
          nomineePincode: req.body.nomineePincode,
          nomineePAN: req.body.nomineePAN,
          relationship: req.body.relationship,
          nomineeContact: req.body.nomineeContact,

          created: {
            date: req.body.date,
            time: req.body.time
          }
        });


        nsc
          .save()
          .then(nsc => {


            return res.status(201).json({
              code: 201,
              message: "Nsc has been created"
            });


          })
          .catch(err => {
            console.log(err);
            return res.status(200).json({
              error_code: 500,
              code: 901,
              message: 'An error occurred, Cannot create new Nsc',
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

exports.nsc_get_nsc = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");
    Nsc.findOne({ _id: req.params.nscId })
      .exec()
      .then(nsc => {
        if (nsc.userId === decoded.userId) {
          res.status(200).json({

            code: 200,
            message: "Success",
            nsc: nsc
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

exports.nsc_update = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");

    const nsc = new Nsc({
      self_agent: req.body.self_agent,
      agentName: req.body.agentName,
      agentCode: req.body.agentCode,
      NSCissue: req.body.NSCissue,
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
      jointName: {
        jointFname: req.body.jointFname,
        jointMname: req.body.jointMname,
        jointLname: req.body.jointLname
      },

      minorJoint: req.body.minorJoint,
      jointPAN: req.body.jointPAN,
      thirdHolderName: {
        thirdHolderFname: req.body.thirdHolderFname,
        thirdHolderMname: req.body.thirdHolderMname,
        thirdHolderLname: req.body.thirdHolderLname
      },

      minorThirdHolder: req.body.minorThirdHolder,
      thirdHolderPAN: req.body.thirdHolderPAN,

      nominationPlace: req.body.nominationPlace,
      nomineeName: {
        nomineeFname: req.body.nomineeFname,
        nomineeMname: req.body.nomineeMname,
        nomineeLname: req.body.nomineeLname
      },

      nomineeCity: req.body.nomineeCity,
      nomineeState: req.body.nomineeState,
      nomineePincode: req.body.nomineePincode,
      nomineePAN: req.body.nomineePAN,
      relationship: req.body.relationship,
      nomineeContact: req.body.nomineeContact,


    });


    Nsc.update({ _id: req.params.nscId, userId: decoded.userId }, nsc)
      .exec()
      .then(nsc => {
        res.status(200).json({
          code: 200,
          message: "success",
          result: nsc
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

exports.nsc_delete_nsc = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");

    Nsc.remove({ _id: req.params.nscId, userId: decoded.userId })
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
