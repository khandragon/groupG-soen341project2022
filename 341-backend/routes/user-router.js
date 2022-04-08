const express = require("express");

const UserCtrl = require("../controller/user-ctrl");

const router = express.Router();

router.post("/user", UserCtrl.createUser);
router.put("/user/:username", UserCtrl.updateUser); //if first part called do 2nd part
router.get("/user/:username", UserCtrl.getUserByUsername);
router.post("/user/passwordSecurity/", passwordSecurityCtrl.securePassword);
router.get("/user/passwordAuthentification/", passwordSecurityCtrl.authentificatePassword);

module.exports = router;
