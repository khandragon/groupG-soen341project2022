const Carts = require("../schemas/carts-model");

getCart = async (req, res) => {
  try {
    const cart = await Carts.findOne({ cartID: req.params.cartID });
    return res.status(200).json({ success: true, data: cart });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

addToCart = async (req, res) => {
  try {
    console.log(req.body);

    const cart = await Carts.findOne({ cartID: req.body.cartID });
    cart.productsByIsbn.push(req.body.isbn);
    cart.save();
    return res.status(200).json({
      success: true,
      cartID: cart.cartID,
      message: "cart updated!",
    });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

removeFromCart = async (req, res) => {
  try {
    console.log(req.body);

    const cart = await Carts.findOne({ cartID: req.body.cartID });
    console.log(cart);

    const index = cart.productsByIsbn.indexOf(req.body.isbn);
    const removedIsbn = cart.productsByIsbn[index];
    cart.productsByIsbn.splice(index, 1);
    console.log(cart);
    cart.save();
    return res.status(200).json({
      success: true,
      message: "product removed successfully",
      removedIsbn: removedIsbn,
    });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

clearCart = async (req, res) => {
  try {
    const cart = await Carts.findOne({ cartID: req.params.cartID });

    cart.productsByIsbn = [];

    return res.status(200).json({ success: true, message: "cart cleared!" });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};
module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
};
