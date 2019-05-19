const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const ReController = require('../controllers/re');

// Handle incoming GET requests to /orders
router.post("/", checkAuth, ReController.re_create_re);

router.get("/:reId", checkAuth, ReController.re_get_re);

router.get("/", checkAuth, ReController.re_get_all);

router.put("/:reId", checkAuth, ReController.re_update);

router.delete("/:reId", checkAuth, ReController.re_delete_re);

module.exports = router;
