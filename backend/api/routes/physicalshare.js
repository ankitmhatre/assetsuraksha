const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const PhysicalshareController = require('../controllers/physicalshare');

router.post("/", checkAuth, PhysicalshareController.ps_create_ps);

router.get("/:psId", checkAuth, PhysicalshareController.ps_get_ps);

router.get("/", checkAuth, PhysicalshareController.ps_get_all);

router.put("/:psId", checkAuth, PhysicalshareController.ps_update);

router.delete("/:psId", checkAuth, PhysicalshareController.ps_delete_ps);

module.exports = router;
