const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BusinessProducts = new Schema(
  {
    username: { type: String, required: true },
    productISBN: { type: String, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("BusinessProducts", BusinessProducts, "BusinessProducts");
