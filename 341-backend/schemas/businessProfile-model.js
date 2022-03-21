const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BusinessProfile = new Schema(
    {
        username: { type: String, required: true },
        buisness_name: { type: String },
        city: { type: String },
        address: { type: String, required: true },
        phone_number: { type: String },
        email: { type: String, required: true },
        

      },
      { timestamps: true }
    );

module.exports = mongoose.model("BusinessProfile", BusinessProfile, "BusinessProfile");


