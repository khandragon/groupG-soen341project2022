const Carts = require("../schemas/carts-model");

createCart = async (req, res) => {
  var cartIdRnd = Math.floor(10000 + Math.random() * 90000);
  let match = await Carts.findOne({ cartID: cartIdRnd });
  do{
  var cartIdRnd = Math.floor(10000 + Math.random() * 90000);
  match = await Carts.findOne({ cartID: cartIdRnd });
  }while (!(match == null));
  
  var cart = new Carts();

  cart.cartID = cartIdRnd;
  cart.productsByIsbn = [];

  cart
    .save()
    .then( () => {
      return res.status(201).json({
        success: true,
        cartID: cart.cartID,
        message: "Cart created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Cart not created!",
      });
    });


};

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
    const cart = await Carts.findOne({ cartID: req.body.cartID });

    const index = cart.productsByIsbn.indexOf(req.body.isbn);
    const removedIsbn = cart.productsByIsbn[index];
    cart.productsByIsbn.splice(index, 1);
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
