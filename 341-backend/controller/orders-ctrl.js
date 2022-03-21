const Orders = require("../schemas/orders-model");

getOrders = async (req, res) => {
  try {
    console.log(req.params);
    const orders = await Orders.find({ username: req.params.username });
    return res.status(200).json({ success: true, data: orders });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

placeOrder = async (req, res) => {
  try {
    const body = req.body;
    if (!body) {
      return res.status(400).json({
        success: false,
        error: "You must provide account information",
      });
    }

    const order = new Orders(body);

    if (!order) {
      return res.status(400).json({ success: false, error: err });
    }

    order
      .save()
      .then(() => {
        return res.status(201).json({
          success: true,
          id: order.username,
          message: "Account created!",
        });
      })
      .catch((error) => {
        return res.status(400).json({
          error,
          message: "account not created!",
        });
      });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

module.exports = {
  placeOrder,
  getOrders,
};
