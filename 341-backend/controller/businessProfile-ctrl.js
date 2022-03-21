const businessProfile = require("../schemas/businessProfile-model");

getbusinessProfileInformation = async (req, res) => {
  try {
    const businessProfile = await BusinessProfile.findOne({ username: req.params.username });
    return res.status(200).json({ success: true, data: businessProfile });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};
getAllbusinessProfile = async (req, res) => {
  try {
    const accounts = await BusinessProfile.find({});
    return res.status(200).json({ success: true, data: businessProfile });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};

updatebusinessProfileInformation = async (req, res) => {
  try {
    const account = await BusinessProfile.findOne({ username: req.params.username });

    const body = req.body;

    if (!body) {
      return res.status(400).json({
        success: false,
        error: "You must provide a body to update",
      });
    }
    
    businessProfile.username = body.username;
    businessProfile.business_name = body.business_name;
    businessProfile.city = body.city;
    businessProfile.address = body.address;
    businessProfile.phone_number = body.phone_number;
    businessProfile.email = body.email;
    businessProfile.save();
    return res.status(200).json({
      success: true,
      username: businessProfile.username,
      message: "business profile updated!",
    });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ success: false, msg: "something went wrong" });
  }
};
createBusinessProfileInformation = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide account information",
    });
  }

  const businessProfile = new BusinessProfile(body);

  if (!account) {
    return res.status(400).json({ success: false, error: err });
  }

  businessProfile
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: businessProfile.username,
        message: "Business profile created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "business profile not created!",
      });
    });
};
module.exports = {
  getBusinessProfileInformation,
  updateBusinessProfileInformation,
  createBusinessProfileInformation,
  getAllbusinessProfile,
};
