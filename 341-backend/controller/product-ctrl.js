const Product = require("../schemas/products-model");
const Account = require("../schemas/account-model");
getProductInformation = async (req, res) => {
  try {
    console.log("isbn is " + req.params.isbn);
    const product = await Product.findOne({ isbn: req.params.isbn });
    console.log(product);
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
    const accounts = await Account.find({});
    const products = await Product.find({});
    console.log(accounts);
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
    const product = await Product.findOne({ username: req.params.isbn });

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
