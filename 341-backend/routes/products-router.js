const express = require("express");

const productsCtrl = require("../controller/product-ctrl");
const productsCategoryCtrl = require("../controller/productsCategory-ctrl");

const router = express.Router();

router.get("/products/", productsCtrl.getAllProducts);
router.get("/products/:isbn", productsCtrl.getProductInformation);
router.put("/products/:isbn", productsCtrl.updateProductInformation);
router.post("/products/", productsCtrl.createProductInformation);
router.delete("/products/:isbn", productsCtrl.deleteProduct);
<<<<<<< HEAD
router.get("/productsCategory/:category", productsCategoryCtrl.getProductsCategory);
router.get("products/", homepageCtrl.getHomeProducts);
=======
router.get(
  "/productsCategory/:category",
  productsCategoryCtrl.getProductsCategory
);
router.get("/productsCategory/", productsCategoryCtrl.getAllProductsCategory);
>>>>>>> c56ad34c4e829e43b9423770898afb6a3342cc83

module.exports = router;
