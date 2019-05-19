const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const KvpController = require('../controllers/kvp');

// Handle incoming GET requests to /orders
router.post("/", checkAuth, KvpController.kvp_create_kvp);

router.get("/:kvpId", checkAuth, KvpController.kvp_get_kvp);

router.get("/", checkAuth, KvpController.kvp_get_all);

router.put("/:kvpId", checkAuth, KvpController.kvp_update);

router.delete("/:kvpId", checkAuth, KvpController.kvp_delete_kvp);

module.exports = router;
