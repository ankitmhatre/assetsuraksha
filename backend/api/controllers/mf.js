const mongoose = require("mongoose");

const Mf = require("../models/mf");
const jwt = require("jsonwebtoken");

exports.mf_get_all = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");
    Mf.find({ userId: decoded.userId })
      .exec()
      .then(mfs => {
        return res.status(200).json({
          code: 200,
          message: 'success',
          mfs: mfs
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

exports.mf_create_mf = (req, res, next) => {

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

        const mf = new Mf({
          userId: decoded.userId,
          _id:mongoose.Schema.Types.ObjectId,
          noOfFolios: req.body.noOfFolios,
          folioNo: req.body.folioNo,
          folioName: req.body.folioName,
          ISIC: req.body.ISIC,
          typeOfFund: req.body.typeOfFund,
          noOfUnits: req.body.noOfUnits,
          clientID: req.body.clientID,
          dmatAccount: req.body.dmatAccount,
          postOffice: req.body.postOffice,
          location: req.body.location,
          typeOfPayment: req.body.typeOfPayment,

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
          thirdHolderFname:req.body.thirdHolderFname ,
          thirdHolderMname: req.body.thirdHolderMname,
          thirdHolderLname: req.body.thirdHolderLname,
          minorThirdHolder: req.body.minorThirdHolder,
          thirdHolderPAN: req.body.thirdHolderPAN,

          dealingDistributor: req.body.dealingDistributor,
          distributorName: req.body.distributorName,
          ARNcode: req.body.ARNcode,

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

          debitManadate: req.body.debitManadate,
          bankName: req.body.bankName,
          accountType: req.body.accountType,
          accountNumber: req.body.accountNumber,
          branchName: req.body.branchName,

          created: {
            date: req.body.date,
            time: req.body.time
          }
        });


        mf
          .save()
          .then(mf => {


            return res.status(201).json({
              code: 201,
              message: "Mf has been created"
            });


          })
          .catch(err => {
            console.log(err);
            return res.status(200).json({
              error_code: 500,
              code: 901,
              message: 'An error occurred, Cannot create new Mf',
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

exports.mf_get_mf = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");
    Mf.findOne({ _id: req.params.mfId })
      .exec()
      .then(mf => {
        if (mf.userId === decoded.userId) {
          res.status(200).json({

            code: 200,
            message: "Success",
            mf: mf
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

exports.mf_update = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");

    const mf = new Mf({
      noOfFolios: req.body.noOfFolios,
      folioNo: req.body.folioNo,
      folioName: req.body.folioName,
      ISIC: req.body.ISIC,
      typeOfFund: req.body.typeOfFund,
      noOfUnits: req.body.noOfUnits,
      clientID: req.body.clientID,
      dmatAccount: req.body.dmatAccount,
      postOffice: req.body.postOffice,
      location: req.body.location,
      typeOfPayment: req.body.typeOfPayment,

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
      thirdHolderFname:req.body.thirdHolderFname ,
      thirdHolderMname: req.body.thirdHolderMname,
      thirdHolderLname: req.body.thirdHolderLname,
      minorThirdHolder: req.body.minorThirdHolder,
      thirdHolderPAN: req.body.thirdHolderPAN,

      dealingDistributor: req.body.dealingDistributor,
      distributorName: req.body.distributorName,
      ARNcode: req.body.ARNcode,

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

      debitManadate: req.body.debitManadate,
      bankName: req.body.bankName,
      accountType: req.body.accountType,
      accountNumber: req.body.accountNumber,
      branchName: req.body.branchName,

      created: {
        date: req.body.date,
        time: req.body.time
      }
    });


    Mf.update({ _id: req.params.mfId, userId: decoded.userId }, mf)
      .exec()
      .then(mf => {
        res.status(200).json({
          code: 200,
          message: "success",
          result: mf
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

exports.mf_delete_mf = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token === undefined) {
    return res.status(400).json({
      code: 215,
      message: 'No token was specified.'
    })
  } else {
    const decoded = jwt.verify(token, "iguessthisiscrypt");

    Mf.remove({ _id: req.params.mfId, userId: decoded.userId })
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
