const BusinessProducts = require("../schemas/businessProducts-model");
getProductSeller = async (req, res) => {
  try {
    const seller = await BusinessProducts.findOne({
      productISBN: req.params.productISBN,
    });
    return res.status(200).json({ success: true, data: seller });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

getBusinessProducts = async (req, res) => {
  try {
    const products = await BusinessProducts.find({
      username: req.params.username,
    });
    return res.status(200).json({ success: true, data: products });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

addBusinessProduct = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide product buisness information",
    });
  }
  const link = new BusinessProducts(body);

  if (!link) {
    return res.status(400).json({ success: false, error: err });
  }
  link
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        username: link.username,
        productISBN: link.productISBN,
        message: "Product-Business link created",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "account not created!",
      });
    });
};

deleteBusinessLink = async (req, res) => {
  try {
    BusinessProducts.deleteOne({ productISBN: req.params.productISBN });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};
module.exports = {
  getBusinessProducts,
  getProductSeller,
  addBusinessProduct,
  deleteBusinessLink,
};
