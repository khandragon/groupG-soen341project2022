const express = require("express");

const cartsCtrl = require("../controller/carts-ctrl");

const router = express.Router();

router.get("/carts/:cartID", cartsCtrl.getCart);
router.put("/carts/:cartID_:isbn", cartsCtrl.addToCart);
router.delete("/carts/:cartID", cartsCtrl.clearCart);
router.delete("/carts/cartID_:isbn", cartsCtrl.removeFromCart)


module.exports = router;
