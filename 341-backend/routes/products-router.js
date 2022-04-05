const express = require("express");

const productsCtrl = require("../controller/product-ctrl");
const productsCategoryCtrl = require("../controller/productsCategory-ctrl");

const router = express.Router();

router.get("/products/", productsCtrl.getAllProducts);
router.get("/products/:isbn", productsCtrl.getProductInformation);
router.put("/products/:isbn", productsCtrl.updateProductInformation);
router.post("/products/", productsCtrl.createProductInformation);
router.delete("/products/:isbn", productsCtrl.deleteProduct);
router.get("/productsCategory/:category", productsCategoryCtrl.getProductsCategory);

module.exports = router;
