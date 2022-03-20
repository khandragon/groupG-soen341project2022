const express = require("express");

const businessProductsCtrl = require("../controller/businessProducts-ctrl");

const router = express.Router();

router.get("/businessProducts/getSeller:productISBN", businessProductsCtrl.getProductSeller);
router.get("/businessProducts/getProducts:username", businessProductsCtrl.getBusinessProducts);
router.post("/businessProducts/", businessProductsCtrl.addBusinessProduct);
router.delete("/businessProducts/:productISBN", businessProductsCtrl.deleteBusinessLink)


module.exports = router;
