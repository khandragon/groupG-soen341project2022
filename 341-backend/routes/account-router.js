const express = require("express");

const accountCtrl = require("../controller/account-ctrl");

const router = express.Router();

router.get("/account/:username", accountCtrl.getAccountInformation);
router.put("/account/:username", accountCtrl.updateAccountInformation);

module.exports = router;
