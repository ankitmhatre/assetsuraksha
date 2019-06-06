const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const ContactUsController = require('../controllers/contactus');


router.post("/", ContactUsController.contact_us);



module.exports = router;
