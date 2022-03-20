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
getAllAccounts = async (req, res) => {
  try {
    const accounts = await Accounts.find({});
    return res.status(200).json({ success: true, data: accounts });
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
createAccountInformation = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide account information",
    });
  }

  const account = new Accounts(body);

  if (!account) {
    return res.status(400).json({ success: false, error: err });
  }

  account
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: account.username,
        message: "Account created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "account not created!",
      });
    });
};
module.exports = {
  getAccountInformation,
  updateAccountInformation,
  createAccountInformation,
  getAllAccounts,
};
