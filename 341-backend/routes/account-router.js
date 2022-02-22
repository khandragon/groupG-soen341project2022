const express = require("express");

const accountCtrl = require("../controller/account-ctrl");

const router = express.Router();

router.get("/accounts/:username", accountCtrl.getAccountInformation);
router.put("/accounts/:username", accountCtrl.updateAccountInformation);

module.exports = router;
