const express = require("express");

const businessProfileCtrl = require("../controller/businessProfile-ctrl");

const router = express.Router();

router.get("/businessProfile/:username", businessProfileCtrl.getBusinessInformation);
router.put("/businessProfile/:username", businessProfileCtrl.updateBusinessInformation);
router.post("/businessProfile/", businessProfileCtrl.createBusinessProfileInformation);
router.get("/businessProfile/", businessProfileCtrl.getAllbusinessProfile);

module.exports = router;