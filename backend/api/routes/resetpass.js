const express = require("express");
const router = express.Router();

const ResetPassController = require('../controllers/resetpass');
const checkAuth = require('../middleware/check-auth');

router.post("/reset_pass_otp", ResetPassController.reset_pass_otp);
router.post("/reset_pass", ResetPassController.reset_pass);



module.exports = router;
