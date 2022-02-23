const Accounts = require("../schemas/account-model");

getAccountInformation = async (req, res) => {
  try {
    const account = await Accounts.findOne({ username: req.params.username });
    return res.status(200).json({ success: true, data: account });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

updateAccountInformation = async (req, res) => {
  try {
    const account = await Accounts.findOne({ username: req.params.username });

    const body = req.body;

    if (!body) {
      return res.status(400).json({
        success: false,
        error: "You must provide a body to update",
      });
    }
    account.username = body.username;
    account.email = body.email;
    account.business = body.business;
    account.full_name = body.full_name;
    account.business_name = body.business_name;
    account.address = body.address;
    account.phone_number = body.phone_number;
    account.cartID = body.cartID;
    account.save();
    return res.status(200).json({
      success: true,
      username: account.username,
      message: "account updated!",
    });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

module.exports = {
  getAccountInformation,
  updateAccountInformation,
};
