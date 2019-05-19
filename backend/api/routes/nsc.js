const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const NscController = require('../controllers/nsc');

// Handle incoming GET requests to /orders
router.post("/", checkAuth, NscController.nsc_create_nsc);

router.get("/:nscId", checkAuth, NscController.nsc_get_nsc);

router.get("/", checkAuth, NscController.nsc_get_all);

router.put("/:nscId", checkAuth, NscController.nsc_update);

router.delete("/:nscId", checkAuth, NscController.nsc_delete_nsc);

module.exports = router;
