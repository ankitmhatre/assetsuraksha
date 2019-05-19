const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const MfController = require('../controllers/mf');

// Handle incoming GET requests to /orders
router.post("/", checkAuth, MfController.mf_create_mf);

router.get("/:mfId", checkAuth, MfController.mf_get_mf);

router.get("/", checkAuth, MfController.mf_get_all);

router.put("/:mfId", checkAuth, MfController.mf_update);

router.delete("/:mfId", checkAuth, MfController.mf_delete_mf);

module.exports = router;
