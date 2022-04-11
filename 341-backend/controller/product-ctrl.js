const Products = require("../schemas/products-model");
const { deleteBusinessLink } = require("./businessProducts-ctrl");

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

createProductInformation = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide product information",
    });
  }

  const duplicateProduct = await Products.findOne({ title: body.title });

  if (duplicateProduct) {
    return res.status(401).json({
      success: false,
      error: "Product already exists.",
    });
  }

  var isbnRnd =
    "" +
    Math.floor(Math.random() * 9) +
    Math.floor(Math.random() * 9) +
    Math.floor(Math.random() * 9) +
    Math.floor(Math.random() * 9) +
    Math.floor(Math.random() * 9) +
    Math.floor(Math.random() * 9) +
    Math.floor(Math.random() * 9) +
    Math.floor(Math.random() * 9) +
    Math.floor(Math.random() * 9) +
    "-" +
    Math.floor(Math.random() * 9);
  let match = await Products.findOne({ isbn: isbnRnd });
  while (!(match == null)) {
    var isbnRnd =
      "" +
      Math.floor(Math.random() * 9) +
      Math.floor(Math.random() * 9) +
      Math.floor(Math.random() * 9) +
      Math.floor(Math.random() * 9) +
      Math.floor(Math.random() * 9) +
      Math.floor(Math.random() * 9) +
      Math.floor(Math.random() * 9) +
      Math.floor(Math.random() * 9) +
      Math.floor(Math.random() * 9) +
      "-" +
      Math.floor(Math.random() * 9);
    match = await Products.findOne({ isbn: isbnRnd });
  }
  body.isbn = isbnRnd;

  const product = new Products(body);

  if (!product) {
    console.log(product);
    return res.status(400).json({ success: false, error: err });
  }

  product
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: isbnRnd,
        message: "Product created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Product not created!",
      });
    });
};

deleteProduct = async (req, res) => {
  try {
    Products.deleteOne({ isbn: req.params.isbn });
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
  createProductInformation,
  deleteProduct,
};
