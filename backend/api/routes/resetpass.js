const express = require("express");
const router = express.Router();

const ResetPassController = require('../controllers/resetpass');
//cost checkAuth = require('../middleware/check-auth');

//router.post("/reset_pass_otp", ResetPassController.reset_pass_otp);
//router.post("/reset_pass", ResetPassController.reset_pass);

router.post("/", ResetPassController.reset_pass);
router.post("/new_password", ResetPassController.new_password);

module.exports = router;
