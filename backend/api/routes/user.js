const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.post("/verify_otp", checkAuth, UserController.user_verify)

router.put("/profile_update", checkAuth, UserController.user_update);

router.get("/", checkAuth, UserController.user_getProfile)



module.exports = router;
