const mongoose = require("mongoose");

const PS = require("../models/physicalshare");
const jwt = require("jsonwebtoken");

exports.ps_get_all = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");
    PS.find({ userId: decoded.userId })
      .exec()
      .then(pss => {
        return res.status(200).json({
          code: 200,
          message: 'success',
          pss: pss
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

exports.ps_create_ps = (req, res, next) => {

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


        //allowed same user

        const physicalshare = new PS(
          {
            userID: decoded.userId,
            _id: mongoose.Schema.Types.ObjectId,
            noOfCertificates: req.body.noOfCertificates,
            certificateNumber: req.body.certificateNumber,
            companyName: req.body.companyName,
            holdingMode: req.body.holdingMode,
            soleFname: req.body.soleFname,
            soleMname: req.body.soleMname,
            soleLname:  req.body.soleLname,
            minorSole:  req.body.minorSole,
            jointFname:  req.body.jointFname,
            jointMname:  req.body.jointMname,
            jointLname:  req.body.jointLname,
            minorJoint:  req.body.minorJoint,
            jointPAN:  req.body.jointPAN,
            thirdHolderFname:  req.body.thirdHolderFname,
            thirdHolderMname:  req.body.thirdHolderMname,
            thirdHolderLname:  req.body.thirdHolderLname,
            minorThirdHolder:  req.body.minorThirdHolder,
            thirdHolderPAN:  req.body.thirdHolderPAN,
            securityType:  req.body.securityType,
            inFigures:  req.body.inFigures,
            inWords:  req.body.inWords,
            faceValue:  req.body.faceValue,
            ISIN:  req.body.ISIN,
            securityStatus:  req.body.securityStatus,
            folioNumber:  req.body.folioNumber,
            certiNoFrom:  req.body.certiNoFrom,
            certiNoTo:  req.body.certiNoTo,
            distinctiveNoFrom:  req.body.distinctiveNoFrom,
            distinctiveNoTo:  req.body.distinctiveNoTo,
            quantity:  req.body.quantity,
            sr_no:  req.body.sr_no,
            lockedInReason:  req.body.lockedInReason,
            lockedInReleaseDate:  req.body.lockedInReleaseDate,
            created: {
              date:  req.body.date,
              time:  req.body.time
            }
          }

        );


        physicalshare
          .save()
          .then(ps => {


            return res.status(201).json({
              code: 201,
              message: "Physical Share has been created"
            });


          })
          .catch(err => {
            console.log(err);
            return res.status(200).json({
              error_code: 500,
              code: 901,
              message: 'An error occurred, Cannot create new Physical Share',
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

exports.ps_get_ps = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");
    PS.findOne({ _id: req.params.psId })
      .exec()
      .then(ps => {
        if (ps.userId === decoded.userId) {
          res.status(200).json({

            code: 200,
            message: "Success",
            ps: ps
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

    const ps = new PS(
      {
       
        noOfCertificates: req.body.noOfCertificates,
        certificateNumber: req.body.certificateNumber,
        companyName: req.body.companyName,
        holdingMode: req.body.holdingMode,
        soleFname: req.body.soleFname,
        soleMname: req.body.soleMname,
        soleLname:  req.body.soleLname,
        minorSole:  req.body.minorSole,
        jointFname:  req.body.jointFname,
        jointMname:  req.body.jointMname,
        jointLname:  req.body.jointLname,
        minorJoint:  req.body.minorJoint,
        jointPAN:  req.body.jointPAN,
        thirdHolderFname:  req.body.thirdHolderFname,
        thirdHolderMname:  req.body.thirdHolderMname,
        thirdHolderLname:  req.body.thirdHolderLname,
        minorThirdHolder:  req.body.minorThirdHolder,
        thirdHolderPAN:  req.body.thirdHolderPAN,
        securityType:  req.body.securityType,
        inFigures:  req.body.inFigures,
        inWords:  req.body.inWords,
        faceValue:  req.body.faceValue,
        ISIN:  req.body.ISIN,
        securityStatus:  req.body.securityStatus,
        folioNumber:  req.body.folioNumber,
        certiNoFrom:  req.body.certiNoFrom,
        certiNoTo:  req.body.certiNoTo,
        distinctiveNoFrom:  req.body.distinctiveNoFrom,
        distinctiveNoTo:  req.body.distinctiveNoTo,
        quantity:  req.body.quantity,
        sr_no:  req.body.sr_no,
        lockedInReason:  req.body.lockedInReason,
        lockedInReleaseDate:  req.body.lockedInReleaseDate
      }
    
    );


    ps.update({ _id: req.params.psId, userId: decoded.userId }, ps)
      .exec()
      .then(ps => {
        res.status(200).json({
          code: 200,
          message: "success",
          result: ps
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

exports.ps_delete_ps = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");

    PS.remove({ _id: req.params.psId, userId: decoded.userId })
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
