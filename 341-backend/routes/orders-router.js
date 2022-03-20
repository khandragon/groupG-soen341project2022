const express = require("express");

const ordersCtrl = require("../controller/orders-ctrl");

const router = express.Router();

router.get("/orders/:username", ordersCtrl.getOrders);
router.put("/orders/:username", ordersCtrl.placeOrder);


module.exports = router;
