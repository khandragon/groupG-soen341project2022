const express = require("express");

const UserCtrl = require("../controller/user-ctrl");

const router = express.Router();

router.post("/user", UserCtrl.createUser);
router.put("/user/:username", UserCtrl.updateUser);
router.get("/user/:username", UserCtrl.getUserByUsername);

module.exports = router;
