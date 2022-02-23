const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Accounts = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    business: { type: Boolean, required: true },
    full_name: { type: String, required: true },
    buisness_name: { type: String },
    address: { type: String, required: true },
    phone_number: { type: String },
    cartID: { type: Number, auto: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Accounts", Accounts, "Accounts");
