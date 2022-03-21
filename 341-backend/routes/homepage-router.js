const express = require("express");

const HomepageCtrl = require("../controller/homepage-ctrl");

const router = express.Router();

router.get("/homepage/", HomepageCtrl.getHomeProduct);

module.exports = router;