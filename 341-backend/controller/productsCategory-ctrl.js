const Products = require("../schemas/products-model");
const { deleteBusinessLink } = require("./businessProducts-ctrl");

// returns all products belonging to a given category
getProductsCategory = async (req, res) => { 
    try {
      const products = await Products.find({
        category: req.params.category, // in Products, find all items from a given category
      });
      return res.status(200).json({ success: true, data: products }); // returns all products from given category
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