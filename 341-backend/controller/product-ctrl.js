const Products = require("../schemas/products-model");

getProductInformation = async (req, res) => {
  try {
    const product = await Products.findOne({ isbn: req.params.isbn });
    return res.status(200).json({ success: true, data: product });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    return res.status(200).json({ success: true, data: products });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

updateProductInformation = async (req, res) => {
  try {
    const product = await Products.findOne({ username: req.params.isbn });

    const body = req.body;

    if (!body) {
      return res.status(400).json({
        success: false,
        error: "You must provide a body to update",
      });
    }
    product.title = body.title;
    product.sellerName = body.sellerName;
    product.description = body.description;
    product.imgUrl = body.imgUrl;
    product.Price = body.Price;
    product.ShippingCost = body.ShippingCost;
    product.Sale = body.Sale;
    product.isbn = body.isbn;
    product.save();
    return res.status(200).json({
      success: true,
      username: product.title,
      message: "product updated!",
    });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

module.exports = {
  getAllProducts,
  getProductInformation,
  updateProductInformation,
};
