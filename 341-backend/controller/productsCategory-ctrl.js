const Products = require("../schemas/products-model");
const { deleteBusinessLink } = require("./businessProducts-ctrl");

getProductsCategory = async (req, res) => {
    try {
      const products = await Products.find({
        category: req.params.category,
      });
      return res.status(200).json({ success: true, data: products });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ success: false, msg: "something went wrong" });
    }
  };

module.exports = {
    getProductsCategory,
}