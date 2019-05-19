const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const DpsController = require('../controllers/dps');

// Handle incoming GET requests to /orders
router.post("/", checkAuth, DpsController.dps_create_dps);

router.get("/:dpsId", checkAuth, DpsController.dps_get_dps);

router.get("/", checkAuth, DpsController.dps_get_all);

router.put("/:dpsId", checkAuth, DpsController.dps_update);

router.delete("/:dpsId", checkAuth, DpsController.dps_delete_dps);

module.exports = router;
